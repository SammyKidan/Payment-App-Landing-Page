import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import 'bulma/css/bulma.css'
import iphone  from './img/iPhoneWhite.png'
import logo from './img/kika-logo.svg'
import Whitelogo from './img/kika-logo2.svg'
import twitter from './img/twitterIcon.svg'
import linkedIn from './img/linkedinIcon.svg'
import twitterWhite from './img/twitterWhite.svg'
import linkedinWhite from './img/linkedinWhite.svg'
import rightIcon from './img/rightIcon.svg'
import img1 from './img/img1.svg'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'
import img4 from './img/img4.png'
import curve1 from './img/curve1.png'



                   //-----------HEADER-----------//

const Header = () =>{
    return  (
          <header className="header">
            <nav className="navbar is-transparent is-fixed-top">
            
    
            <img src={logo} id="logo"/>
    
                <div id="navbarBasicExample" class="navbar-menu">
                 
                    <div class="navbar-start">
                        <ul id="menu">
                          <li className="menu_item">MERCHANTS</li>
                          <li className="menu_item">CUSTOMERS</li>
                          <li className="menu_item">PARTNERS</li>
                          <li className="menu_item">ABOUT</li>
                        </ul>
                    </div>

                    <div id="socialIcons">
                          <img src={twitter} id="icon"/>
                          <img src={linkedIn} id="icon"/>
                    </div>

              </div>

               
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
   
            </nav>
          </header>


            
    );
};
                       //------MOBILE NAV ICON-----//

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

                  //------------HERO SECTION-----------//


const Hero= () => {
    return (
  <section  id="hero_margin_top" className="section fade-in" >
        <div className="container is-mobile">
            <div className="columns is-fluid">

                <div className="column is-fluid is-7-desktop heroText has-text-centered-touch">
                    <h1 class="is-size-1-desktop" id="title">fairer, faster payments</h1>
                    <h2 className="subtitle is-size-6-touch" id="lineHeight">
                    Direct from bank payments that are convenient and secure for merchants and their customers
                    </h2>

                    <button id="button">Get In Touch <img src={rightIcon} id="rightIcon" /></button>
                </div>

                <div className="column is-hidden-touch">
                <img src={iphone} id="iphone" />
                </div>

            </div>
        </div>
   </section>
    );
};         

                   //------------BODY--------------//

const Body = () => {
    return (
        <section class="section">
        <div  className="container">
        <div class="columns content_margin is-multiline has-text-centered three">

            <div className="column has-text-left-desktop is-full-touch">
            <img  src={img1} class="bodyImg"/>
            </div>

            <div className="column has-text-left-desktop is-full-touch ">
                    <h1 id="title">Cut Costs</h1>
                    <h2 class="subtitle is-size-6-touch">
                    KiKa cuts costs by dramatically reducing transaction fees. <span class="link">Get in touch</span>
                    to find out exactly how much KiKa could save your business.
                    </h2>
            </div>

        </div>
        </div>




        <div className="container">
        <div className="columns is-multiline has-text-centered-touch three flex">

            <div className="column has-text-left-desktop is-full-touch">
                    <h1 id="title">Reduces Risk of Fraud</h1>
                    <h2 class="subtitle is-size-6-touch">KiKa’s model, enabled by UK Open Banking regulations,
                     means your business no longer needs to handle 
                    customer payment data or bear liability for fraud, 
                    so your staff can concentrate on adding value to your business.</h2>
            </div>


            <div className="column  has-text-right-desktop is-full-touch">
            <img  src={img2} class="bodyImg"/>
            </div>
            
        </div>
        </div>




        <div class="container">
        <div class="columns is-multiline has-text-centered-touch three ">

            <div className="column is-full-touch">
            <img  src={img3} class="bodyImg" />
            </div>
        

            <div className="column has-text-left-desktop is-full-touch">
                    <h1 id="title">Immediate Payments</h1>
                    <h2 class="subtitle is-size-6-touch">No more waiting around for your money
                     - receive your funds instantly with KiKa!
                     Our streamlined payment process makes KiKa perfect for you and your customers.</h2>
            </div>
       
        </div>
        </div>




        <div class="container" id="margin_top">
        <div class="columns is-multiline has-text-centered-touch three flex">

            <div className="column is-full-touch">
            <img  src={img4} class="bodyImg2" />
            </div>

            <div className="column  has-text-left-desktop is-full-touch">
                    <h1 id="title">How it works</h1>
                    <h2 class="subtitle is-size-6-touch">KiKa enables customers to pay merchants directly 
                    from their bank accounts, 
                    which guarantees immediate payment via the Faster Payments Service. 
                    KiKa gives customers new payment flexibility and keeps their data protected.</h2>
                    
                    
                    <h2 class="subtitle is-size-6-touch">We are being regulated by the FCA so you can rest 
                    assured that every KiKa payment is completely secure.</h2>
            </div>

        </div>
        </div>


      </section>
    
    );
};
                     //--------------FOOTER---------------//

const Footer= () => {
    return (
 <div class="footer_">
    <div className="content footer_wrapper is-vcentered">
         <div className="footer__left">

                <a className="footer_left-logo"><img src={Whitelogo} id="logo2"/></a>
                <div class="footer__left-text">fairer, faster payments</div>

                <div class="footer__left-icons">

                      <a class="footer__left-icons-twitter" href="https://twitter.com/kikapay" target="_blank">
                        <img src={twitterWhite} id="icon2"/>
                      </a>

                      <a class="footer__left-icons-linkedin" href="https://www.linkedin.com/company/kikapay/" target="_blank">
                        <img src={linkedinWhite} id="icon2"/>
                      </a>
                </div>
                <div class="footer__left-copyright">© KiKapay 2019. All rights reserved.</div>
         </div>

        
         <div class="footer__right">
            <div class="footer__right-dual">
                <div class="footer__right-dual-header">Services</div>
                  <a class="footer__right-dual-text" href="/">Merchants</a>
                  <a class="footer__right-dual-text" href="/customers">Customers</a>
                  <a class="footer__right-dual-text" href="/partners">Partners</a>
                  <a class="footer__right-dual-text" href="/about">About</a>
                  <a class="footer__right-dual-text" href="/#faq">FAQ's</a>
            </div>
         
            <div class="footer__right-dual margin_top">
                    <div class="footer__right-dual-header">Contact</div>
                        <a class="footer__right-dual-text">info@kikapay.com</a>
                        <div class="footer__right-dual-text footer__right-dual-text-mt">1 Ropemaker Street</div>
                        <div class="footer__right-dual-text">London</div>
                    <div class="footer__right-dual-text">EC2Y 9AW</div>
            </div>
         </div> 
    </div>    
 </div>

    );
};






const App = () => {
return (
    <div>
    <Header />,
    <Hero />,
    <Body />,
    <Footer />
    </div>
  );
}

ReactDOM.render (
    <App />,
    document.getElementById("root")
    );

    export default App