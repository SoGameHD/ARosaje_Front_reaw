import './App.css'
import { LangProvider } from './app/contexts/lang-context'
import Home from './app/views/components/Home/Home'

function App() {
  return (
    <div className="App">
			<LangProvider>
      	<Home />
			</LangProvider>
    </div>
  )
}

export default App
