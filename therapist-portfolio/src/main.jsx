﻿import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import {I18nProvider} from './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider>
      <App/>
    </I18nProvider>
  </React.StrictMode>
)
