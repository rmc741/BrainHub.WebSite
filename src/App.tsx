import './App.css'
import { Footer } from './components/layout/footer/Footer'
import { Header } from './components/layout/header/Header'
import AppRouteConfig from './config/RouteConfig'

function App() {

  return (
    <div>
      <Header/>
      <AppRouteConfig />
      <Footer/>
    </div>
  )
}

export default App
