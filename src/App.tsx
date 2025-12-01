import Title from "./Title/Title"
import Projects from "./Projects/Projects"
import "./App.css"
import Header from "./Components/Header/Header"
import Skills from "./Skills/Skills"
import Timeline from "./Timeline/Timeline"
import About from "./About/About"
function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Title/>
      <Projects/>
      <Skills/>
      <About/>
      <Timeline/>
    </div>
  )
}

export default App
