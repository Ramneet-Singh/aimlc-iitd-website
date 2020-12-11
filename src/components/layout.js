import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({children, className}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo />
        <Link to='/' className='site-name'>{siteTitle}</Link>
        <Navigation/>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

