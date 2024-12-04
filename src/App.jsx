import './index.css'
import dots from "./img/Dots.svg"
import first from "./img/FIRST.svg"
import subtract from "./img/Subtract.svg"
import light from "./img/LIGHT.svg"
import Screenshot from "./img/Screenshot.svg"
import Vector from "./img/Vector.svg"
import Numero from "./img/Numero.svg"
import BI from "./img/BI.svg"
import KF from "./img/KF.svg"
import FB from "./img/FB.svg"
import HB from "./img/HB.svg"
import Dora from "./img/Dora.svg"
import Shirt from "./img/Shirt.svg"
import ArrowLeft from "./img/ArrowLeft.svg"
import ArrowRight from "./img/ArrowRight.svg"
import EenMan from "./img/EenMan.svg"
import man from "./img/man.svg"
import woman from "./img/woman.svg"
import ArrowUpRight from "./img/ArrowUpRight.svg"
import FastCompany from "./img/FastCompany.svg"
import Forbes from "./img/Forbes.svg"
import Bloomberg from "./img/Bloomberg.svg"
import ArrowUpRightPurple from "./img/ArrowUpRightPurple.svg"

import { version } from 'react'

function App() {
  return (
    <div className="App">
      <header className='bg-orange-500 flex justify-between px-3 py-3'>
        <img className='' src={dots} alt="" />
        <p className='text-sm front-bold'> <b>Summer sale up to 50% off</b></p>
        <img src={dots} alt="" />
      </header>
      <body>
        <div className='item-center flex justify-center h-[100px] gap-[57px] mt-[40px]'>
          <img className='' src={first} alt="" />
          <img className='' src={subtract} alt="" />
          <img className='' src={light} alt="" />
        </div>
        <div className='item-center flex justify-center gap-[57px] mt-[60px] '>
          <img className='w-full' src={Screenshot} alt="" />
        </div>
        <div className="">
          <p className='text text-[60px] items-start flex font-bold ml-[150px] mt-[-200px]'>Spring Season</p>
          <p className='text text-[30px] ml-[1500px]'>view collection</p>
          <img src={Vector} alt="" className='ml-[1710px] mt-[-25px]' />
        </div>
        <div className='box items-center flex justify-between px-28 py-14 mt-[78px]'>
          <img src={Numero} alt="" />
          <img src={BI} alt="" />
          <img src={KF} alt="" />
          <img src={FB} alt="" />
          <img src={HB} alt="" />
        </div>
        <div className='flex'>
          <div className="w-1/2 flex justify-center align-middle">
            <img className='ml-9' src={ArrowLeft} alt="" width={50} height={50}/>
            <img className=' w-full h-[600px] mt-[150px]' src={Shirt} alt="" />
            <img className='mr-9' src={ArrowRight} alt="" width={50} height={50}/>
          </div>
          <div className="w-1/2">
            <img src={Dora} alt="" className='w-full' />
          </div>
        </div>
<div className="">
<p className='text-[30px] ml-[400px] mt-[-180px]'>Basic Shirt</p>
<p className='text-[30px] ml-[440px] mt-[20px]'>€49</p>
</div>
<div>
  <button className='bg-black text-white px-7 py-4 rounded ml-[1000px] mt-[-100px]'>Shop Shirts</button>
</div>
      <div className="">
      <div className="bg-white w-full h-[44px] mt-7"></div>
         <div className="man w-[650px] h-[636px] ml-[200px] rounded-[10px] "></div>
         <img src={EenMan} alt="" className='mt-[-635px] ml-[200px]' />
          <button className='bg-black text-white absolute ml-[250px] px-4 py-3 rounded-[10px] mt-[-80px]'>Shop Sweaters</button>    
      <div className="mt-[-635px]  orngbg w-[650px] h-[636px] ml-[950px] mb-[600px] rounded-[10px]"></div>
      <p className=' text-[40px] items-start flex font-bold ml-[1000px] mt-[-1200px] py-3 w-[516px] h-[278px] '>“ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “</p>
      <p className=' text-[20px] items-start flex font-bold ml-[1000px] mt-[200px] py-3 '>— Guera Latissa, Creative Director</p>
      </div>
      <div classname="box items-center flex ">
      <img className='w-[608px] rounded-l-md mt-[150px] ml-[300px]' src={woman} alt="" />
      <img className='w-[608px] rounded-r-md ml-[900px] mb-[-300px] mt-[-640px] ' src={man} alt="" />
      <p className=' text-[20px] items-start flex ml-[950px] mt-[230px] py-3 '>MEN</p>
      <p className=' text-[20px] items-start flex ml-[350px] mt-[-50px] py-3 '>WOMEN</p>
      <img className='ml-[430px] mb-[-305px] mt-[-35px] ' src={ArrowUpRight} alt="" />
      <img className=' ml-[1000px] mb-[-305px] mt-[280px] ' src={ArrowUpRight} alt="" />
      </div>
      <div className=''>
      <header className=' flex justify-center px-3 py-3'>
        <p className='text-sm front-bold text-[50px] mt-[450px]'> <b>Hot off the press</b></p>
      </header>
      </div>
      <div className='mt-10 flex items-center justify-center'>
        <div className='w-[1216px] h-[286px] border-2 rounded-md flex justify-between'>
          <div>
          <img src={Bloomberg} alt="" className='px-[50px] py-[40px]' />
          <p className='text-[18px] w-[298px] h-[75px] ml-[50px] '>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
          </div>
          <div>
          <img src={Forbes} alt="" className=' py-[40px]' />
          <p className='text-[18px] w-[298px] h-[75px] '>“First light proves it is possible to combine great design with the finest materials available.”</p>
          </div>
          <div>
          <img src={FastCompany} alt="" className=' py-[40px]' />
          <p className='text-[18px] w-[298px] h-[75px] '>“Redefining excellence with premium materials and visionary robust design.”</p>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}
export default App;