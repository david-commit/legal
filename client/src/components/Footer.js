import React from 'react';
import "../style/Footer.css"

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <section className='footer-section-one' id='footer-sections'>
          <h1>About C. Njomo</h1>
          <br />
          <hr />
          <br />
          <p>
            The law evolves, as do clients expectations of the firm they choose
            to represent and Recognizing them.
            <br />
            We measure our success through our clients; how well we are regarded
            by them and the depth of the service.
          </p>
        </section>
        <section className='footer-section-two' id='footer-sections'>
          <h1>Get In Touch</h1>
          <br />
          <hr />
          <br />
          <p>
            <i class='fa-solid fa-location-dot'></i> Ngonglane Plaza, Nairobi
          </p>
          <p>
            <i class='fa-solid fa-phone'></i> (+254) 712 345 678
          </p>
          <p>
            <i class='fa-solid fa-envelope'></i> info@c.njomo.com
          </p>
          <p>
            <i class='fa-solid fa-globe'></i> www.c.njomo.com
          </p>
        </section>
        <section className='footer-section-three' id='footer-sections'>
          <h1>Practice Areas</h1>
          <br />
          <hr />
          <br />
          <ul>
            <li>Children Law</li>
            <li>Family Law</li>
            <li>Commercial Law</li>
            <li>Crimainal Law</li>
          </ul>
        </section>
        <section className='footer-section-four' id='footer-sections'>
          <h1>Newsletter</h1>
          <br />
          <hr />
          <br />
          <p>
            Sign up today for to know the latest news about lawrules, cases we
            run and won.
          </p>
          <input type='text' placeholder='Enter Your Email' />
          <button>
            <i class='fa-solid fa-envelope'></i>
          </button>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
