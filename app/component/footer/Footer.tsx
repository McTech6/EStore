import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaLinkedin,
    
  } from "react-icons/fa";


const Footer = () => {
    return ( 
          <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Returning & Exchanges</Link>
                         
                        <Link href="#">FAQs</Link>
                         
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">About Us</h3>
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum at, molestiae ipsum dolorum eaque nobis odit doloribus debitis impedit eligendi ex earum cupiditate eum numquam sapiente quisquam? Inventore blanditiis asperiores ratione neque qui. Laboriosam excepturi, aliquam natus ut dolor explicabo vel animi, est, sit consequuntur perferendis atque voluptas quibusdam.</p>
                    <p>&copy; {new Date().getFullYear()} Tidding Ramsey. All rights reserved</p>
                    </div>
                    <FooterList >
                        <h3 className="text-base font-bold mb-2">Follow us</h3>
                         <div className="flex gap-2">
                         <Link href="#"><i className="fab FaFacebookSquare,"></i> < FaFacebookSquare size={24}/></Link>
                        <Link href="#"><i className="fab FaTwitterSquare,"></i> < FaTwitterSquare size={24}/></Link>
                        <Link href="#"><i className="fab FaInstagramSquare,"></i> <FaInstagramSquare size={24}/></Link>
                        <Link href="#"><i className="fab FaLinkedin,"></i> <FaLinkedin size={24}/></Link>
                         
                         </div>
                    </FooterList>
                </div>
            </Container>
          </footer>
     );
}
 
export default Footer;