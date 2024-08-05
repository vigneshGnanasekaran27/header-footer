import React from 'react';
import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';
import './header.css';

 
export default function Header(){
    return (
        <>
            <nav>
                <div class="navbar">
                    <div class="logo"><Link href="/"> HopeFit</Link></div>
                    <div class="nav-links">
                        <ul class='links'>
                            <li><Link className='linkClass' href="/"> Home</Link></li>
                            <li>
                                <Link href="/">Start Your Training</Link>
                                <i class="bx bxs-chevron-down arrow htmlcss-arrow"></i>
                                <ul class="htmlCss-sub-menu sub-menu">
                                    <li><Link href="/">From Virtual</Link></li>
                                    <li><Link href="/">Direct One on One</Link></li>
                                    <li><Link href="/">Group Training</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/">HopeFit Kitchen</Link>
                                <i class="bx bxs-chevron-down arrow js-arrow"></i>
                                <ul class="htmlCss-sub-menu sub-menu">
                                    <li><Link href="/">Custom Meal Plan</Link></li>
                                    <li><Link href="/">Our Meals</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/"> Gym Wear For Men and Women</Link></li>
                            <li><Link href="/"> Blogs</Link></li>
                            <li><Link href="/"> Events</Link></li>
                            <li><Link href="/"> About</Link></li>
                            <li><Link href="/"> Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};


 