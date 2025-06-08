import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles/Footer.css'
import './styles/Footer-Mobile.css'
import { BsPhone, BsPhoneFill } from 'react-icons/bs';
import { MdAttachEmail, MdEmail, MdMarkEmailUnread, MdOutlineAttachEmail } from 'react-icons/md';
import { ImPhoneHangUp } from 'react-icons/im';
import { PiPhone } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';
import { BiPhone } from 'react-icons/bi';

function Footer(){
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid"> 
            {/* Company Info */}
            <div>
              <h4>Miraitech Computer Services</h4>
              <p><b>Proudly Serving Alberta </b></p>
              <p>Red Deer, Blackfalds, Sylvan Lake, Lacombe, Penhold, Innisfail, and nearby areas</p>
              <p>Reliable solutions in Security, Networking, and IT Services.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h5>Quick Links</h5>
              <ul>
              <li><a href="/about">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Business Hours */}
              <div>
              <h5>Business Hours</h5>
              <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
              <p>Sat: 10:00 AM – 3:00 PM</p>
              <p>Sun: Closed</p>
            </div>

            {/* Social Media */}
            <div>
              <h5>Follow Us</h5>
              <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              </div>
              <br></br>
              <h5>Contact Us</h5>
              <div className="social-icons">
              <a href="#"><BiPhone/>   403-307-8375</a> <br></br>
              <a href="#"><MdEmail />  miraitech.help@gmail.com</a>
             
              </div>
            </div> 
          </div>

          {/* Bottom Note */}
          <div className="footer-bottom">
            <p>
            "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."- Proverbs 3:5-6
            </p>
            <p>&copy; {new Date().getFullYear()} Miraitech Computer Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;