import './App.css'
import { Footer } from './components/layout/footer/Footer'
import { Header } from './components/layout/header/Header'
import AppRouteConfig from './config/RouteConfig'

function App() {

  return (
    <div className="app-shell">
      <Header/>
      <main className="app-main">
        <AppRouteConfig />
      </main>
      <Footer/>
    </div>
  )
}

export default App
