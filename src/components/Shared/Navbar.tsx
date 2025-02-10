import Image from 'next/image';
import React from 'react';
import logo from '@/../public/uqi/logo.svg';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=' fixed w-full z-10 top-0 bg-black/50 backdrop-blur-md px-6'>
            <div className='max-w-5xl mx-auto flex justify-center md:justify-between items-center py-5'>
                <div className='hidden md:flex items-center'>
                <Link href="/">
                    <Image src={logo} alt='logo' height={100} width={160} />
                    </Link>
                </div>
                <div className='flex gap-8 items-center text-white text-xs'>
                    <Link href="/">
                        <span>HOME</span>
                    </Link>
                    <Link href="/about">
                        <span>ABOUT</span>
                    </Link>
                    <Link href="/contact">
                        <span>CONTACT</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;