const raiz = document.documentElement
const interruptor = document.querySelector('.interruptor')
const principal = document.querySelector('main')

function crearElemento(etiqueta, clase, texto = '') {
  const elemento = document.createElement(etiqueta)
  elemento.className = clase
  elemento.textContent = texto
  return elemento
}

function mostrarInicio() {
  const lista = crearElemento('ul', 'dialogos')

  for (const dialogo of dialogos) {
    const enlace = crearElemento('a', '', dialogo)
    enlace.href = `?dialogo=${encodeURIComponent(dialogo)}`

    const elemento = document.createElement('li')
    elemento.append(enlace)
    lista.append(elemento)
  }

  principal.append(crearElemento('h1', 'titulo', 'Diálogos'), lista)
}

function mostrarDialogo(dialogo) {
  document.title = dialogo

  const volver = crearElemento('a', 'volver', '← Diálogos')
  volver.href = 'index.html'
  document.querySelector('.barra').prepend(volver)

  principal.append(crearElemento('h1', 'titulo', dialogo))

  const datos = document.createElement('script')
  datos.src = `BIBLIOTECA/${encodeURIComponent(dialogo)}/frases.js`
  datos.onload = mostrarFrases
  document.body.append(datos)
}

function mostrarFrases() {
  for (const { de, es } of frases) {
    const aleman = crearElemento('p', 'aleman', de)
    aleman.lang = 'de'

    const frase = crearElemento('div', 'frase')
    frase.append(aleman, crearElemento('p', 'traduccion', es))
    principal.append(frase)
  }
}

const dialogoElegido = new URLSearchParams(location.search).get('dialogo')

if (dialogos.includes(dialogoElegido)) {
  mostrarDialogo(dialogoElegido)
} else {
  mostrarInicio()
}

interruptor.setAttribute('aria-checked', raiz.dataset.tema === 'oscuro')

interruptor.addEventListener('click', () => {
  const tema = raiz.dataset.tema === 'oscuro' ? 'claro' : 'oscuro'
  raiz.dataset.tema = tema
  interruptor.setAttribute('aria-checked', tema === 'oscuro')
  localStorage.setItem('tema', tema)
})
