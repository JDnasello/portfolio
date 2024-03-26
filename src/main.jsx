import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/css/index.css'
import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'

import globalEN from './translations/en/global.json'
import globalES from './translations/es/global.json'

i18next.use(initReactI18next).init({
  lng: 'es',
  interpolations: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: globalEN
    },
    es: {
      translation: globalES
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
