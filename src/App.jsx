import { useState } from 'react'
import frases from '../HEAD OVER HEELS/frases.json'

export default function App() {
  const [oscuro, setOscuro] = useState(
    () => document.documentElement.dataset.tema === 'oscuro',
  )

  function alternarTema() {
    const tema = oscuro ? 'claro' : 'oscuro'
    document.documentElement.dataset.tema = tema
    setOscuro(!oscuro)
    localStorage.setItem('tema', tema)
  }

  return (
    <div className="pagina">
      <header className="barra">
        <button
          type="button"
          role="switch"
          aria-checked={oscuro}
          className="interruptor"
          onClick={alternarTema}
        >
          <span>Modo oscuro</span>
          <span className="pista" aria-hidden="true" />
        </button>
      </header>
      <main>
        {frases.map((frase, indice) => (
          <div className="frase" key={indice}>
            <p className="aleman" lang="de">
              {frase.de}
            </p>
            <p className="traduccion">{frase.es}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
