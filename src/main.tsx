import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU' // Русская локализация для дат и таблиц
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: '#1677ff', // Синий цвет как на кнопках "Войти"
          borderRadius: 6,
          fontFamily: 'inherit',
        },
        components: {
          Layout: {
            siderBg: '#2b2b2b', // Темный фон сайдбара как на скриншоте
            headerBg: '#ffffff',
          },
          Menu: {
            darkItemBg: '#2b2b2b',
            darkItemSelectedBg: '#3e3e3e',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)