import './App.css'
import Home from './app/views/components/Home/Home'
import { LangProvider } from './app/contexts/lang-context'

const App = () => {
  return (
    <div className="App">
			<LangProvider>
      	<Home />
			</LangProvider>
    </div>
  )
}

export default App
