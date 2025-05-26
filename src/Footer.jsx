

function Footer(){
    return (
      <footer-container className='bg-light'>
        <footer className="text-center">
          <small>
            "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."- Proverbs 3:5-6 
          </small>
          <br/>
          <small>
            © {new Date().getFullYear()} Miraitech Computer Services. Designed and Developed by Miraitech Computer Services.
          </small> 
        </footer>
      </footer-container>
    );
}

export default Footer;