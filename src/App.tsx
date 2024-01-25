import './App.css'
import Home from './components/Home'

const AppRoot = () => {
  return (
    <main>
      <header className="brand-name">
        <img className="brand-logo" src="/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section className="content">
        <Home />
      </section>
    </main>
  )
}

export default AppRoot