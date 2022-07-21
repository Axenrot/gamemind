import React from 'react';
import Link from 'next/link';


export const Navbar = () => {
    return (
        <>
            <nav className='bg-gradient-to-r from-gray-800 via-violet-700 to-pink-600 p-3 '>
                <div className='container flex items-center flex-wraph-14 mx-auto'>
                    <Link href='/'>
                        <a className='inline-flex items-center p-2 mr-4 '>
                            <span className='text-xl text-white font-bold uppercase tracking-wide'>
                                <img src='./images/logo2.png' />
                            </span>
                        </a>
                    </Link>
                    <div className='md:hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                            <Link href='/'>
                                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white '>
                                    Início
                                </a>
                            </Link>
                            <Link href='/blog'>
                                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white'>
                                    Blog
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;