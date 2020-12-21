import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <ul>
        <li><a target="_blank" href="https://www.instagram.com/aimlc.iitd/"><span className="icon"><AiFillInstagram /></span></a></li>
        <li><a target="_blank" href="https://www.youtube.com/channel/UCYZexisW1MxuVkPyiybQoxg/"><span className="icon"><AiFillYoutube /></span></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/ramneetsinghiitd/"><span className="icon"><AiFillLinkedin /></span></a></li>
      </ul>
      <p>Website for AIMLC IIT Delhi, Made with <span className="icon -love"><RiHeart2Line /></span> by <a target="_blank" href="https://www.linkedin.com/in/ramneetsinghiitd/" className="author-name">Ramneet Singh</a></p>
    </div>
  </footer>
)

export default Footer