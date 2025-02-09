import clubLogo from '../assets/club_logo.svg';
import linkedIn from '../assets/linkedinlogo.svg';
import github from "../assets/github logo.svg";
import discord from "../assets/discord logo.svg";
import insta from "../assets/instagram logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
    <div className="club_logo">

      <img src={clubLogo} alt="Club Logo" />
    </div>
    <div className="social">
      <img className='social_icns' src={linkedIn} alt="" />
      <img  className='social_icns' src={github} alt="" />
      <img  className='social_icns' src={discord} alt="" />
      <img   className='social_icns' src={insta} alt="" />
      

    </div>
  </nav>
  )
}

export default Navbar
