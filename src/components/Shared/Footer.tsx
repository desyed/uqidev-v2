import Image from 'next/image';
import React from 'react';
import logo from '@/../public/uqi/logo.svg'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto text-white pb-20 pt-20 md:pt-40 px-5">


            <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-left space-y-4 ">
                    <div className="container mx-auto p-3 md:p-8 lg:p-24">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            {/* Brand Section */}
                            <div className='flex items-center'>
                                <Image src={logo} alt='logo' height={100} width={160} />
                            </div>

                            {/* Navigation Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Navigation</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="/about" className="text-neutral-400 hover:text-white">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="faq" className="text-neutral-400 hover:text-white">
                                            Faq
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Stay Updated Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Stay updated</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="#" className="text-neutral-400 hover:text-white">
                                            License
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-neutral-400 hover:text-white">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Socials Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Socials</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <FaTwitter className="text-neutral-400 hover:text-white" />
                                        <a
                                            href="https://twitter.com/lexingtonthemes"
                                            className="text-neutral-400 hover:text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            @UQIDEV
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaLinkedin className="text-neutral-400 hover:text-white" />
                                        <a
                                            href="https://linkedin.com/in/your-profile"
                                            className="text-neutral-400 hover:text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaGithub className="text-neutral-400 hover:text-white" />
                                        <a
                                            href="https://github.com/Siyammahdi"
                                            className="text-neutral-400 hover:text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 text-sm text-neutral-400">
                            <p className="mb-6">&copy; 2022 UQIDEV. All rights reserved.</p>
                            
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
