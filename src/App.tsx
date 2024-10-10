import './App.css'
import Button from './components/atoms/button/Button'
import Image from './components/atoms/image/Image'
import Input from './components/atoms/input/Input'
import Media from './components/atoms/media/Media'
import Tag from './components/atoms/typography/Typography'

function App() {
  const handleOnClick = () => console.log("Clicked")

  return (
    <>
      <Media
        src=""
        alt="Ameen Click Logo"
        classes='logo rocketLaunch'
      />
      {/* <Image
        src="/Logo.png"
        classes='logo rocketLaunch'
        draggable={false}
        alt="Ameen Click Logo"
      /> */}
      <Tag 
        type="h1" 
        text="Ameen Click" 
        classes="title"
        style={{fontFamily: 'cursive'}} 
      />
      {/* <Tag 
        type="h2"
        text="Design Style" 
        classes="sub-title"
      /> */}
      <Button
        type='button'
        variant="secondary" 
        variantType='outline'
        isLoading={true}
        //style={{backgroundColor: 'blue', color: 'white', textAlign: 'center'}}
        onClick={handleOnClick}
        //disabled
        autoFocus
        //draggable
      >Coming Soon</Button>
      {/* <Input type='text' placeholder='Enter your email' classes='form-control' /> */}
    </>
  )
}

export default App
