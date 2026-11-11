// Panel de alemán sobre Prime Video. Pegar en la consola (F12) con el episodio ya abierto en el reproductor.
// Necesita la web local en marcha. Coloca el reproductor arriba a la izquierda y abre la sección Diálogos alrededor.
// Para quitarlo, recargar la página.
(function () {
  const AVISO = '[panel]';
  const WEB = 'http://127.0.0.1:3100';
  const DIALOGO = 'viktor-bringts';
  // Las mismas medidas que .modo-video en web/public/css/estilos.css
  const CAJA = { left: '120px', top: '72px', width: '600px', height: '338px' };
  const ENCIMA = '2147483647';
  const DEBAJO = '2147483646';

  if (window.top !== window.self) {
    console.error(AVISO, 'Solo se ejecuta en la ventana principal. Elegir «top» en el selector de contexto de la consola.');
    return;
  }
  if (!/(^|\.)primevideo\.com$/i.test(location.hostname)) {
    console.error(AVISO, 'Solo se ejecuta en primevideo.com.');
    return;
  }
  if (window.__panelPrime) {
    console.warn(AVISO, 'Ya está en marcha en esta pestaña. Recargar la página para volver a pegarlo.');
    return;
  }
  window.__panelPrime = true;

  const area = (elemento) => {
    const r = elemento.getBoundingClientRect();
    return r.width * r.height;
  };

  // Solo se mueve y se controla lo que está dentro del reproductor: la ficha de la serie tiene su propio vídeo, el del tráiler
  const reproductorAbierto = () => [...document.querySelectorAll('[id^="dv-web-player"]')].find((e) => area(e) > 0) ?? null;

  // Dentro del reproductor puede haber más de un vídeo: el bueno es el que ya ha avanzado y, si no, el mayor
  const videoDe = (reproductor) =>
    [...reproductor.querySelectorAll('video')]
      .filter((v) => v.readyState > 0 && area(v) > 0)
      .sort((a, b) => Number(b.currentTime > 0) - Number(a.currentTime > 0) || area(b) - area(a))[0] ?? null;

  const colocar = (reproductor) => {
    const estilos = { position: 'fixed', right: 'auto', bottom: 'auto', overflow: 'hidden', 'z-index': ENCIMA, ...CAJA };
    for (const [propiedad, valor] of Object.entries(estilos)) {
      reproductor.style.setProperty(propiedad, valor, 'important');
    }
    for (let padre = reproductor.parentElement; padre && padre !== document.body; padre = padre.parentElement) {
      if (getComputedStyle(padre).position !== 'static') {
        padre.style.setProperty('z-index', ENCIMA, 'important');
      }
    }
  };

  const marco = document.createElement('iframe');
  marco.src = `${WEB}/biblioteca.html?video=1#${DIALOGO}/1`;
  marco.title = 'Alemán';
  // Sin esto, Chrome y Edge no dejan que una web pública abra una página local
  marco.allow = 'local-network-access; local-network; loopback-network';
  marco.style.cssText = `position:fixed;inset:0;width:100vw;height:100vh;border:0;background:#0b0f1a;z-index:${DEBAJO}`;
  document.body.appendChild(marco);

  // El contador del reproductor puede no coincidir con el segundo interno del vídeo
  let desfase = 0;
  let diagnosticoHecho = false;
  const segundoEnPantalla = () => {
    const texto = document.querySelector('.atvwebplayersdk-timeindicator-text')?.textContent ?? '';
    const m = texto.match(/^\s*(?:(\d+):)?(\d+):(\d+)/);
    return m ? Number(m[1] ?? 0) * 3600 + Number(m[2]) * 60 + Number(m[3]) : null;
  };

  let vueltasSinReproductor = 0;

  const describir = (elemento) => `${elemento.tagName.toLowerCase()}${elemento.id ? `#${elemento.id}` : ''}${elemento.classList.length ? `.${[...elemento.classList].slice(0, 3).join('.')}` : ''}`;

  const avisarSinReproductor = () => {
    const rutas = [...document.querySelectorAll('video')].map((video) => {
      const ruta = [];
      for (let e = video; e && e !== document.body && ruta.length < 7; e = e.parentElement) {
        ruta.push(describir(e));
      }
      return ruta.join(' < ');
    });
    console.warn(AVISO, 'No encuentro el reproductor abierto, así que no muevo nada. Vídeos de la página:', JSON.stringify(rutas));
  };

  setInterval(() => {
    const reproductor = reproductorAbierto();
    const video = reproductor && videoDe(reproductor);
    if (!video) {
      vueltasSinReproductor += 1;
      if (vueltasSinReproductor === 40) {
        avisarSinReproductor();
      }
      return;
    }
    vueltasSinReproductor = 0;
    colocar(reproductor);

    const visto = segundoEnPantalla();
    if (visto !== null && Math.abs(visto - video.currentTime - desfase) > 1.5) {
      desfase = visto - video.currentTime;
    }
    marco.contentWindow.postMessage({ tipo: 'tiempo-video', segundos: video.currentTime + desfase, enPausa: video.paused }, WEB);

    if (!diagnosticoHecho) {
      diagnosticoHecho = true;
      console.log(AVISO, `Vídeos en la página: ${document.querySelectorAll('video').length}. Segundo interno: ${Math.round(video.currentTime)}. Contador en pantalla: ${visto ?? 'no encontrado'}.`);
    }
  }, 250);

  // El botón de reproducir y pausar de la web local pulsa el del reproductor de Prime.
  // Si ese botón no está o no hace nada, actúa sobre el vídeo del reproductor.
  window.addEventListener('message', (evento) => {
    if (evento.source !== marco.contentWindow || evento.origin !== WEB || evento.data?.tipo !== 'alternar-video') {
      return;
    }
    const reproductor = reproductorAbierto();
    const video = reproductor && videoDe(reproductor);
    if (!video) {
      return;
    }
    const estabaEnPausa = video.paused;
    reproductor.querySelector('.atvwebplayersdk-playpause-button')?.click();
    setTimeout(() => {
      if (video.paused !== estabaEnPausa) {
        return;
      }
      if (estabaEnPausa) {
        video.play().catch((error) => console.warn(AVISO, 'No se ha podido reproducir:', error.message));
      } else {
        video.pause();
      }
    }, 300);
  });

  console.log(AVISO, 'En marcha. Si el navegador pide permiso para acceder a la red local, aceptar. Si el panel sale en blanco, comprobar que la web local está arrancada.');
})();
