import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full py-20">
            <div className='container flex md:flex-row flex-col justify-between items-start mx-auto'>
                <div className="p-5">
                    <img src="/images/logo.png" />
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-black-600 font-bold text-xl pb-6">
                            Navegue
                        </p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-400 cursor-pointer">
                            Início
                        </li>
                        <Link href='/blog'>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-rose-400 cursor-pointer">
                                Blog
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-black-600 font-bold text-xl pb-6">
                            <span>Acompanhe nas redes:</span>
                        </p>
                        <div className="flex gap-6 pb-5">
                            <div className="text-2x1 cursor-pointer hover:text-rose-400">
                                <a href="https://www.instagram.com/gamemindstudios/" target="blank">
                                    <FaInstagram icon={FaInstagram} />
                                </a>
                            </div>
                            <div className="text-2x1 cursor-pointer hover:text-rose-400">
                                <a href="https://www.facebook.com/gamemindstudios" target="blank">
                                    <FaFacebook icon={FaFacebook} />
                                </a>
                            </div>
                            <div className="text-2x1 cursor-pointer hover:text-rose-400" target="blank">
                                <a href="https://twitter.com/gamemindstudios" target="blank">
                                    <FaTwitter icon={FaTwitter} />
                                </a>
                            </div>
                            <div className="text-2x1 cursor-pointer hover:text-rose-400">
                                <a href="https://www.linkedin.com/company/gamemindstudios/" target="blank">
                                    <FaLinkedin icon={FaLinkedin} />
                                </a>
                            </div>
                            <div className="text-2x1 cursor-pointer hover:text-rose-400">
                                <a href="https://www.youtube.com/channel/UC2cSWokWK75CddMPvV58B4g" target="blank">
                                    <FaYoutube icon={FaYoutube} />
                                </a>
                            </div>
                        </div>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-900">
                <h1 className="text-gray-50 font-semibold">
                    Game Mind Studios © 2022 . Todos os direitos reservados.
                </h1>
            </div>
        </>
    );
}

export default Footer;