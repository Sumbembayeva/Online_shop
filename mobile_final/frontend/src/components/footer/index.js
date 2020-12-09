import React from 'react';
import './footer.css';
import '../../style/style2.css';


function Footer() {
  return (
    <footer>
    <div className='container'>
        <div className="row">
            <div className='col-2 footer'><img class="work_icon" alt="work" src='images/icon.png' /></div>
            <div className='col-3 footer' >
                <h5>Footer</h5> 
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
                <div className='col-3 footer'> <h5>Footer</h5> 
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
                <div className='col-3 footer'> <h5>Footer</h5> 
                    <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
        <div className="row">
            <div className='col-2 footer'> <h2>CS inc.</h2></div>
            <div className='col-3 footer' >
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
                <div className='col-3 footer'>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
                <div className='col-3 footer'>
                    <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
        <div className="row">
            <div className='col-6 footer'> <h5>Developed by Makymetova Ainur for Web Advanced course || IITU </h5></div>
    </div>
    </div>
</footer>      
    
  );
}

export default Footer;