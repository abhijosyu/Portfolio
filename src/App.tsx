import Title from "./Title/Title"
import Projects from "./Projects/Projects"
import "./App.css"
import Header from "./Components/Header/Header"
import Skills from "./Skills/Skills"
import Timeline from "./Timeline/Timeline"
function App() {

  return (
    <>
      <Header></Header>
      <Title/>
      <Projects/>
      <Skills/>
      <Timeline/>
    </>
  )
}

export default App
