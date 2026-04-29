import './App.css'
import Body from './Components/Body'
import {Provider} from "react-redux"
import store from './utils/Store'
function App() {
  return (
  <Provider store={store}>
     <div>
      <Body/>
     </div>
        
  </Provider>
    
  
  )
}

export default App
