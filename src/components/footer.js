import React from "react"
import { RiHeart2Line } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <ul>
        <li><a target="_blank" href="https://www.instagram.com/aimlc.iitd/"><span className="icon"><AiFillInstagram /></span></a></li>
        <li><a target="_blank" href="https://www.youtube.com/channel/UCYZexisW1MxuVkPyiybQoxg/"><span className="icon"><AiFillYoutube /></span></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/ramneetsinghiitd/"><span className="icon"><AiFillLinkedin /></span></a></li>
      </ul>
      <p>Disclaimer: We are a newly created club and don't claim to be an official IIT Delhi society. Responsiblity for any beliefs a viewer may have resides with them only.  <FaCopyright /> 2020, Website for AIMLC IIT Delhi, Made with <span className="icon -love"><RiHeart2Line /></span> by <a target="_blank" href="https://www.linkedin.com/in/ramneetsinghiitd/" className="author-name">Ramneet Singh</a></p>
    </div>
  </footer>
)

export default Footer