import React from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/club_logo.jpeg"

const Logo = () => (
  <div className="site-logo">
    <Link to="/"><img src={logo} alt="AI/ML Club IIT Delhi" style={{height:34, width:187}} /></Link>
  </div>
)

export default Logo