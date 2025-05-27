import { Button, Container } from 'react-bootstrap';
import './home.css';
import heroIMG from './images/home-page/hero-1.jpg';
import testIMG from './images/home-page/test.jpg';
import ParticlesBackground from "./components/ParticlesComponent.jsx";


 
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
                     
            <Services-Container>
                <Services-Sub-Container>
                    <div>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🛡 CCTV Installation</p>
                        <p>Protect your property with high-quality surveillance systems.</p>
                        </div>
                    </div>
                    <div>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🌐 Network & Wi-Fi Setup</p>
                        <p>Reliable wired and wireless solutions for homes and businesses.</p>
                        </div>
                    </div>
                    <div>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>💻 Web Services</p>
                        <p>Websites that are fast, modern, and mobile-friendly.</p>
                        </div>
                    </div>
                    <div>
                        <div> <img src= {testIMG} alt=''></img></div>
                        <div>
                        <p>🔧 And More…</p>
                        <p>From computer repairs to audio systems — we’ve got you covered.</p>
                        </div>
                    </div>
                </Services-Sub-Container>
            </Services-Container>

        </Home-Container>
        
        
    );
}

export default Home