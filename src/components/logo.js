import React from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/aimlc_logo.png"

const Logo = () => (
  <div className="site-logo">
    <Link to="/"><img src={logo} alt="AI/ML Club IIT Delhi" style={{height:46, width:270.588235294}} /></Link>
  </div>
)

export default Logo