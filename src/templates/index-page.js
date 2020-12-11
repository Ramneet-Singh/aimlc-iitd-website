import React from "react"
import { graphql, Link } from "gatsby"
import { CgMoreR } from "react-icons/cg"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
	return (
		<Layout>
      <SEO/>
      <div className="image-overlay">
          <section className="overlay-content">
            <h1 class="title">{frontmatter.title}</h1>
            <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
            <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}<span class="icon -right"><CgMoreR/></span></Link>
          </section>
      </div>
      <BlogListHome />
		</Layout>
	)
}

export default HomePage
