import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home'
import GroupExample from './components/card-game/card-games'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GroupExample/ >
  </React.StrictMode>,
)
