import React, {useState} from 'react';
import{menu, close} from '../assets';
import { FaMapMarked } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';




const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)


  return (
    <div className='w-full h-[80px] z-10 bg-white drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                <Link to={"/"}><span className="ml-10 sm:ml-10 ss:ml-10 md:ml-3 font-bold text-2xl opacity-[85%] w-full h-[25px] mb-2" >BIRMATEK</span></Link>
                </div>
          

                <div className='flex items-center'>
                    <ul className='hidden md:flex text-sm '>
                        <Link to={"/"}><li className='hover:bg-slate-100'>ANASAYFA</li></Link>
                        <Link to={"/about"}><li className='hover:bg-slate-100'>HAKKIMIZDA</li></Link>
                        <ScrollLink to="services" smooth={true} duration={500}><li className='hover:bg-slate-100'>HİZMETLER</li></ScrollLink>
                        <Link to={"/products"}><li className='hover:bg-slate-100'>ÜRÜNLER</li></Link>
                        <ScrollLink to="contact" smooth={true} duration={500}><li className='hover:bg-slate-100'>İLETİŞİM</li></ScrollLink>
                    </ul>
                </div>



                <div className='hidden md:flex gap-2 sm:mr-10 md:mr-10'>
                    <button className='border-none hover:bg-slate-100 px-2 bg-transparent text-black mr-3'>+90555 555 55 55 </button>
                    <button className='px-8 py-3 bg-orange-400'>info@mail.com</button>
                    <span className=' px-4 py-3 hover:bg-slate-100 cursor-pointer'><FaMapMarked/></span>

                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>



                

        </div>
        <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                        <Link to={"/"}><li className='hover:bg-slate-100 hover:underline'>ANASAYFA</li></Link>
                        <Link to={"/about"}><li className='hover:bg-slate-100'>HAKKIMIZDA</li></Link>
                        <ScrollLink to="services" smooth={true} duration={500}><li>HİZMETLER</li></ScrollLink>
                        <Link to={"/products"}><li>ÜRÜNLER</li></Link>
                        <ScrollLink to="contact" smooth={true} duration={500}><li>İLETİŞİM</li></ScrollLink>
                        <div className='flex flex-col my-4'>
                            <button className='bg-transparent text-black mb-4 py-3 px-8'>+90555 555 55 55</button>
                            <button className='px-8 py-3'>info@mail.com</button>
                        </div>
        </ul>

    </div>
  )
}

export default Navbar