import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='cards'>
      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <br></br>

      <IdCard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height={172}
    birth={new Date("1988-05-11")}
    picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<br></br>

<div className='Greeting'>
  <Greetings lang="de">Ludwig</Greetings>
  <br></br>
  <Greetings lang="fr">François</Greetings>
  <br></br>
  <Greetings lang="de">Henrik</Greetings>
  <br></br>
  <Greetings lang="es">Nacho</Greetings>

</div>
<br></br>
<div>
  <Random min={1} max={9}/>
  <br></br>
  <Random min={1} max={100}/>
</div>
<br></br>
<div className='BoxColor'>
<BoxColor r={255} g={0} b={0} />
<br></br>
<BoxColor r={128} g={255} b={0} />
</div>



</div>
  );
}

export default App;
