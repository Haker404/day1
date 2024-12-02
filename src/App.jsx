import './index.css'
import dots from "./img/Dots.svg"
import first from "./img/FIRST.svg"
import subtract from "./img/Subtract.svg"
import light from "./img/LIGHT.svg"

function App() {
  return (
    <div className="App">
      <header className='bg-orange-500 flex justify-between px-3 py-3'>
        <img className='' src={dots} alt=""/>
        <p className='text-sm front-bold'> <b>Summer sale up to 50% off</b></p>
        <img src={dots} alt=""/>
      </header>
      <body>
        <div className='item-center flex justify-center h-[80px] gap-[57px]'>
          <img className='' src={first} alt=""/>
          <img className='' src={subtract} alt=""/>
          <img className='' src={light} alt=""/>
        </div>
      </body>
    </div>
  );
}
export default App;