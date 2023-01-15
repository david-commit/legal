import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import lady from '../images/DSC_0142.JPG';
import sign from '../images/signature.jpeg';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';
import user4 from '../images/user4.jpg';

function Home() {
  return (
    <div className='home-main-container'>
      <div className='home-banner-main-container'>
        <div className='home-banner-text'>
          <h2>Need any help?</h2>
          <h1>We Fight For What Is Right</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            aliquid, molestiae cupiditate, laudantium tempore provident quidem
            totam neque sed similique natus accusantium itaque distinctio
            dolores vero unde? At, reprehenderit dicta.
          </p>
          <br />
          <a href='#home-about-container'>
            <button>About Us</button>
          </a>
        </div>
      </div>
      <div className='home-about-container' id='home-about-container'>
        <img src={lady} alt='lady' />
        <section className='home-about-section'>
          <p>About Us</p>
          <h2>Welcome to C. Njomo Lawfirm</h2>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish.
            <br /> In a free hour, when our power of choice when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. Ut enim ad minim veniam, quis
            nostrud exercitation. Duis aute irure dolor in reprehen derit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <img src={sign} alt='sign' />
          <h4>CEO & Founder</h4>
        </section>
      </div>
      {/* == PRACTICING AREAS == */}
      <div className='home-practicing-areas'>
        <p style={{ fontSize: '28px' }}>What we Do</p>
        <h2 style={{ fontSize: '40px' }}>Our Practice Areas</h2>
        <div className='home-practcing-areas-cards'>
          <div className='home-practcing-areas-card'>
            <i class='fa-solid fa-people-roof'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Family Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
          <div className='home-practcing-areas-card'>
            <i class='fa-solid fa-children'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Children Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
          <div className='home-practcing-areas-card'>
            <i class='fa-solid fa-handcuffs'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Criminal Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
          <div className='home-practcing-areas-card'>
            <i class='fa-regular fa-copyright'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Intellectual Property Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
          <div className='home-practcing-areas-card'>
            <i class='fa-solid fa-scroll'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Succession Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
          <div className='home-practcing-areas-card'>
            <i class='fa-solid fa-briefcase'></i>
            <div className='home-practcing-areas-card-text'>
              <h2>Commercial Law</h2>
              <br />
              <p>
                Law is complex from a method view point except your activity
                about corporate business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ==== */}
      <div className='home-our-team-container'>
        <h1 style={{ color: '#1f2839' }}>Our Team</h1>
        <br />
        <br />
        <div className='home-our-team-cards'>
          <div className='home-our-team-card'>
            <img src={user4} alt='user' />
            <br />
            <br />
            <h2>Gina Torres</h2>
            <p>CEO & Founder</p>
            <br />
          </div>
          <div className='home-our-team-card'>
            <img src={user2} alt='user' />
            <br />
            <br />
            <h2>Machela Pratts</h2>
            <p>Senior Partner</p>
          </div>
          <div className='home-our-team-card'>
            <img src={user3} alt='user' />
            <br />
            <br />
            <h2>Gabriel Maddoks</h2>
            <p>Partner</p>
          </div>
          <div className='home-our-team-card'>
            <img src={user1} alt='user' />
            <br />
            <br />
            <h2>Eddy Woods</h2>
            <p>Partner</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
