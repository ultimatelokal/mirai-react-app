import 'bootstrap/dist/css/bootstrap.min.css'; // Classic Bootstrap
import { Button, Card } from 'react-bootstrap';

function Footer(){
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} miraiTECH Computer Services</p>
        </footer>
    );
}

export default Footer;