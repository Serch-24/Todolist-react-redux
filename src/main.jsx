import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './mainStyles/main.scss'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './Stores/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider> 
  </BrowserRouter>,
)