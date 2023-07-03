import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer p-10 text-neutral-content max-w-[1440px] mx-auto ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-neutral text-base-content">
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by <h1><b class="text-orange-600">Tabanoon Mim Yuki</b></h1></p>
                </div>
            </footer>
        </div>
        
    );
};

export default Footer;