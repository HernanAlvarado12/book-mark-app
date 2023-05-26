import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
