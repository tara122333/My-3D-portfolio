import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);


    const navLinks = [
        {
          id: "about",
          title: "About",
        },
        {
          id: "work",
          title: "Work",
        },
        {
          id: "contact",
          title: "Contact",
        },
      ];

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <>
        <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
            <div className='w-full flex gap-5 items-center max-w-7xl mx-auto'>
                <Link to='/' 
                  className='flex items-center gap-2'
                  onClick={()=>{
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                <img src="https://yt3.googleusercontent.com/ygl2Z8enlHOjF0jy86ZGvxiudkz27hGnLToUpXZNtus9T8gsBywcfOFkH_N6YiAch2_gB1muJlg=s900-c-k-c0x00ffffff-no-rj" 
                alt='logo' className='w-9 h-9 object-contain rounded-full'/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Tara &nbsp;
                        <span className='sm:block hidden'> |  &nbsp; Portfolio</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                  {
                    navLinks.map((nav) => (
                        <li
                        key={nav.id}
                        className={`${
                          active === nav.title ? "text-white" : "text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer`}

                        onClick={() => setActive(nav.title)}
                        >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))
                  }
                </ul>



                  {/* For mobile */}

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div className='w-[28px] h-[28px] text-3xl object-contain' 
                    onClick={() => setToggle(!toggle)}>
                      {
                        toggle ? <RxCross2 /> : <BiMenu />
                      }
                    </div>
                    <div
                    className={`${
                      !toggle ? "hidden" : "flex"
                    } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        {navLinks.map((nav) => (
                            <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                              active === nav.title ? "text-white" : "text-secondary"
                            }`}

                            onClick={() => {
                              setToggle(!toggle);
                              setActive(nav.title);
                            }}

                            >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;