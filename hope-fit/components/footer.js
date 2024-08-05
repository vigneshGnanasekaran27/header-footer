import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';
import './footer.css';


export default function Footer(){
    return(
        <>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>HoepFit</h4>
                        <ul>
                        <li><Link href="/">about us</Link></li>
                        <li><Link href="/">our service</Link></li>
                        <li><Link href="/">privacy policy</Link></li>
                        <li><Link href="/">wears</Link></li>    
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                        <li><Link href="/">FAQ</Link></li>
                        <li><Link href="/">payment options</Link></li>
                        <li><Link href="/">shipping</Link></li>
                        <li><Link href="/">return</Link></li>
                        <li><Link href="/">order status</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Online shoping</h4>
                        <ul>
                        <li><Link href="/">top</Link></li>
                        <li><Link href="/">bottom</Link></li>
                        <li><Link href="/">men</Link></li>
                        <li><Link href="/">women</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Follow Us</h4>
                         <div class="social-links">
                         <li><Link href="/"> <i class='bx bxl-facebook'></i></Link></li>
                         <li><Link href="/"> <i class='bx bxl-instagram-alt' ></i></Link></li>
                         <li><Link href="/"><i class='bx bxl-youtube' ></i></Link></li>
                         <li><Link href="/"><i class='bx bxl-twitter' ></i></Link></li>
                         <li><Link href="/"><i class='bx bxl-linkedin-square' ></i></Link></li>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

