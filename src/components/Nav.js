import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z50'>
    <div className="container mx-auto">
      {/* bav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-55 flex justify-between items-center text-2x1 text-white/50'>
      <Link 
      to='acasa' 
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiHomeAlt />
      </Link>
      <Link 
      to='despre' 
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiUser />
      </Link>
      <Link 
      to='servicii' 
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsClipboardData />
      </Link>
      <Link 
      
      to='munca' 
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BsBriefcase />
      </Link>
   </div>
   </div>
  </nav>;
  
};
export default Nav;
