import './App.css'
import Image from './components/atoms/image/Image'
import Tag from './components/atoms/typography/Typography'

function App() {

  return (
    <>
      <Image
        src="/Logo.png"
        classes='logo rocketLaunch'
        draggable={false}
        alt="Ameen Click Logo"
      />
      <Tag 
        type="h1" 
        text="Ameen Click" 
        classes="title" 
      />
      <Tag 
        type="h2"
        text="Design Style" 
        classes="sub-title"
      />
    </>
  )
}

export default App
