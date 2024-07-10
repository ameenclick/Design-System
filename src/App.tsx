import './App.css'
import Button from './components/atoms/button/Button'
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
        style={{fontFamily: 'cursive'}} 
      />
      <Tag 
        type="h2"
        text="Design Style" 
        classes="sub-title"
      />
      <Button
        text="Click Me"
        classes="btn" 
        style={{backgroundColor: 'blue', color: 'white', textAlign: 'center'}}
      />
    </>
  )
}

export default App
