import { Button, Container } from 'react-bootstrap';
import './home.css';
import heroIMG from './images/home-page/hero-1.jpg';

function Home (){
    return(
        <Home-Container>
            <Hero-Container>
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
            </Hero-Container>
          <Call-to-action-banner>
                 
                {<p>asdasds</p>/* Your content goes here */}
             
            </Call-to-action-banner>

        </Home-Container>
        
        
    );
}

export default Home