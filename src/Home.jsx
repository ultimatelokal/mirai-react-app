import { Button, Container } from 'react-bootstrap';
import './home.css';
import heroIMG from './images/home-page/hero-1.jpg';
import testIMG from './images/home-page/test.jpg';
import why_img from './images/home-page/why-choose-us.jpg';
import ParticlesBackground from "./components/ParticlesComponent.jsx";
import { FaClock, FaDollarSign, FaHeadphonesAlt, FaGraduationCap } from "react-icons/fa";
import { FaPeace,FaWifi,FaVideo,FaVolumeUp,FaBriefcase, FaPaintBrush } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { FaClock, FaDollarSign, FaHeadphonesAlt, FaGraduationCap } from "react-icons/fa6";

 
function Home (){
    
    return(
        <Home-Container>
            <Hero-Container>
                <Hero-Sub-Container>
                    <div className='hero-container-1'> 
                        <div>
                            <p>MEET MIRAI ミライ</p>
                        </div>
                        <div>
                            <p>Smart Tech. <br/>Secure Spaces.<br/> Creative Solutions.</p>
                        </div>
                        <div>
                            <p>MiraiTECH brings you the future of technology in Red Deer, with expert services in CCTV installation, computer repair, network solutions, audio systems, graphic design, and web development.</p>
                        </div>
                        <div> 
                            <a href='#'>Get Free Quote</a> 
                            <a href='#'>Explore Our Services</a>
                        </div>
                        <div>
                            <p>✅ Serving homes and businesses with trusted tech solutions.</p>
                        </div>
                    </div>
                    <div className='hero-container-2'>
                        <div> 
                            <img src={heroIMG} alt=''/>
                        </div>
                    </div>
                </Hero-Sub-Container>
            </Hero-Container>

            <About-Container>
                <div id="particles-container">
                <ParticlesBackground id='particles' />
                </div>

                <div>
                <p>WHO WE ARE</p>
                <p>At Miraitech Computer Services, we specialize in smart technology solutions for homes and businesses. 
                From CCTV systems and computer maintenance to network setup, commercial audio, and graphic design — 
                we bring expertise, reliability, and a personal touch to every project. We’re proudly local, focused 
                on quality, and committed to keeping your technology running smoothly.</p>
                </div>   
                <div>
                { }
                </div>
            </About-Container>

            <Why-Choose-Container>
                <Why-Choose-Sub-Container>
                <div>
                    <p>Why Choose Us?</p>
                    <p>Reinforce trust with key strengths</p>
                    <img src={why_img} alt=''/>
                </div>

                <div>
                    <div className="card-container">
                        <div className="card">
                            <div className='card-title'>
                                <FaClock className="icon" />
                                <h3>Fast Turnaround</h3>
                            </div>     
                            <div className='card-description'>
                                <p>Get your systems up and running quickly — we prioritize speed without cutting corners.</p>
                                </div>
                        </div>

                        <div className="card">
                            <div className='card-title'>
                                <FaDollarSign className="icon" />
                                <h3>Fair Pricing</h3>
                            </div>
                            <div className='card-description'>
                                <p>Affordable services with transparent quotes — no hidden fees.</p>
                            </div>                                
                        </div>
                    
                        <div className="card">
                            <div className='card-title'>
                                <FaHeadphonesAlt className="icon" />
                                <h3>Expert Audio Integration</h3>
                            </div>
                            <div className='card-description'>
                                <p>Clear, balanced sound systems tailored for commercial spaces — from offices to retail.</p>
                            </div> 
                        </div>

                        <div className="card">
                            <div className='card-title'>
                                <FaGraduationCap className="icon" />
                                <h3>Experienced & Local</h3>
                            </div>
                            <div className='card-description'>
                                <p>Trusted techs from your community — trained and field-tested in real-world installations.</p>
                            </div> 
                        </div>

                    </div>
                </div>
                </Why-Choose-Sub-Container>
            </Why-Choose-Container>
                     
            <Services-Container>
                <Services-Sub-Container>
                    <div className='card'>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🛡 CCTV Installation</p>
                        <p>Protect your property with high-quality surveillance systems.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🌐 Network & Wi-Fi Setup</p>
                        <p>Reliable wired and wireless solutions for homes and businesses.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>💻 Web Services</p>
                        <p>Websites that are fast, modern, and mobile-friendly.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🔧 And More…</p>
                        <p>From computer repairs to audio systems — we’ve got you covered.</p>
                        </div>
                    </div>
                </Services-Sub-Container>
            </Services-Container>

            <What-You-Get-Container>
                <What-You-Get-Sub-Container>
                    <div className='What-You-Get-title'>
                        <h2>💡 What You Get With Miraitech</h2>
                        <p className="subtitle">Showcase benefits that matter to the customer</p>
                    </div>
                    <div className='benefit-main-container'>
                        <div className="benefit-container">
                            <div className="benefit-item">
                                <FaPeace className="icon" />
                                <div className='benefit-description'>
                                    <h3>Peace of Mind</h3>
                                    <p>Reliable systems and support — no more tech stress.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FaWifi className="icon" />
                                <div className='benefit-description'>
                                    <h3>Strong Connectivity</h3>
                                    <p>No more lag or weak spots — we optimize Wi-Fi and Ethernet like pros.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FaVideo className="icon" />
                                <div className='benefit-description'>
                                    <h3>Smarter Surveillance</h3>
                                    <p>Get clarity, reliability, and mobile access from your CCTV system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="benefit-container">
                            <div className="benefit-item">
                                <FaVolumeUp className="icon" />
                                <div className='benefit-description'>
                                    <h3>Powerful Sound Solutions</h3>
                                    <p>Crystal-clear announcements, music, or audio throughout your business.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FaBriefcase className="icon" />
                                <div className='benefit-description'>
                                    <h3>All-in-One Tech Partner</h3>
                                    <p>One call for repairs, setup, design, and installations — we do it all.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FaPaintBrush className="icon" />
                                <div className='benefit-description'>
                                    <h3>Clean, Professional Design</h3>
                                    <p>Your brand, your visuals — designed to impress.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </What-You-Get-Sub-Container>
            </What-You-Get-Container>

            <Call-to-action-Container>
                <div className="cta-section">
      <h2>📞 Ready to Get Started?</h2>
      <p>Let’s talk about how Miraitech can help your business. Call us today or request a quote!</p>
      <div className="cta-buttons">
        <a href="tel:1234567890" className="cta-call">Call Now: (123) 456-7890</a>
        <a href="/contact" className="cta-quote">Request a Quote</a>
      </div>
    </div>
            </Call-to-action-Container> 

        </Home-Container>
        
        
    );
}

export default Home