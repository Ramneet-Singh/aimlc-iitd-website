import React from "react"
import {Link, StaticQuery} from "gatsby"
import Img from "gatsby-image"

const ProfileCard = ({ data }) => (
    //Code for a single profile card
    <div className="profile-card">
        <Img 
            fluid={data.frontmatter.profileImage.childImageSharp.fluid} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.first_name + ' ' + data.frontmatter.last_name + ' - Profile Image'}
            className="profile-image"
        />
        <div className="profile-content">
            <h2 className="profile-name">
                {data.frontmatter.first_name+" "+data.frontmatter.last_name}
            </h2>
            <p className="profile-role">
                {data.frontmatter.role}
            </p>
        </div>
    </div>
)

const ProfilesMaker = ({ data }) => (
    //Code for the overall structure
    <div className="profiles-grid">
        {data}
    </div>
)

export default function ProfileCards() {
    return (
        <StaticQuery 
            query = {graphql`
                query{
                    allMarkdownRemark(
                        sort: { order: ASC, fields: [frontmatter___date] }
                        filter: { frontmatter: { template: { eq: "member" } } }
                    ) {
                        edges {
                          node {
                            id
                            excerpt(pruneLength: 250)
                            frontmatter {
                              date(formatString: "MMMM DD, YYYY")
                              first_name
                              last_name
                              role
                              profileImage {
                                childImageSharp {
                                  fluid(maxWidth: 450, maxHeight: 300, quality: 80) {
                                    ...GatsbyImageSharpFluid
                                    ...GatsbyImageSharpFluidLimitPresentationSize
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                }`
            }

            render = { data => {
                const posts = data.allMarkdownRemark.edges
                    .filter(edge => !!edge.node.frontmatter.date)
                    .map(edge =>
                        <ProfileCard key={edge.node.id} data={edge.node} />
                    )
                return <ProfilesMaker data={posts} />
            }}
        />
    )
}