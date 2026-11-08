const raiz = document.documentElement
const interruptor = document.querySelector('.interruptor')
const principal = document.querySelector('main')

function crearParrafo(clase, texto) {
  const parrafo = document.createElement('p')
  parrafo.className = clase
  parrafo.textContent = texto
  return parrafo
}

for (const { de, es } of frases) {
  const aleman = crearParrafo('aleman', de)
  aleman.lang = 'de'

  const frase = document.createElement('div')
  frase.className = 'frase'
  frase.append(aleman, crearParrafo('traduccion', es))
  principal.append(frase)
}

interruptor.setAttribute('aria-checked', raiz.dataset.tema === 'oscuro')

interruptor.addEventListener('click', () => {
  const tema = raiz.dataset.tema === 'oscuro' ? 'claro' : 'oscuro'
  raiz.dataset.tema = tema
  interruptor.setAttribute('aria-checked', tema === 'oscuro')
  localStorage.setItem('tema', tema)
})
