import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <ul>
        <li><Link to="https://www.instagram.com/aimlc.iitd/"><span className="icon"><AiFillInstagram /></span></Link></li>
        <li><Link to="https://www.linkedin.com/in/ramneetsinghiitd/"><span className="icon"><AiFillLinkedin /></span></Link></li>        
        <li><Link to="https://github.com/Ramneet-Singh"><span className="icon"><AiFillGithub /></span></Link></li>
      </ul>
      <p>Website for AIMLC IIT Delhi, Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="https://www.linkedin.com/in/ramneetsinghiitd/" className="author-name">Ramneet Singh</Link></p>
    </div>
  </footer>
)

export default Footer