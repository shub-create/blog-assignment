import React from 'react'
import '../css/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
   <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col about">
          <h4>About Us</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus.
          </p>
        </div>
        
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><InstagramIcon /></a>
            <a href="#"><WhatsAppIcon/></a>
            <a href="#"><FacebookIcon/></a>
            <a href="#"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  )
}

export default Footer