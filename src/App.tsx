
import './App.css';
import Plane from './Components/ThreeJs/Plane';
import BackGround from './Components/ThreeJs/BackGround/BackGround';
import BackGroundTexture from './Components/ThreeJs/BackGround/BackGroundTexture';
import ColorMenu from './Components/UI/ColorMenu';
import { useState } from 'react';
import Boxes from './Components/ThreeJs/Box/Boxes';
import SpriteText from './Components/ThreeJs/Text/SpriteText';



function App() {

  const [color, setColor] = useState("blue")

  return <div style={{ height: '100vh', width: '100vw' }}>
    <ColorMenu setColor={setColor} />
    <BackGround cameraPosition={[0, 2, 10]}>
      <Boxes />
      <BackGroundTexture />
      <SpriteText> hola</SpriteText>
      <Plane width={15} depth={10} color={color} />
    </BackGround>
  </div>
}


export default App;
