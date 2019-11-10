import React from "react"
import { Link, graphql } from "gatsby"

import IndexLayout from "../components/index-layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import { Card, List, SubTitle, Title, Wrapper } from "pages/index-styles"

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata

    return (
      <IndexLayout>
        <SEO title="Home" />

        <h1>{ title }</h1>
        <p>{ description } </p>

        {data.allMdx.edges.map(({ node }) => {
          return (
            <Link to={node.frontmatter.path}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          )
        })}

        {/*<Wrapper>*/}
          {/*<Card>*/}
            {/*<Image />*/}
            {/*<Title>{title}</Title>*/}
            {/*<SubTitle>{description}</SubTitle>*/}
            {/*<h2>Tracks</h2>*/}
            {/*<List>*/}
              {/*<li>no-useless-escape</li>*/}
              {/*<li>’success’ is not defined</li>*/}
              {/*<li>sentMessage</li>*/}
              {/*<li>bad request</li>*/}
              {/*<li>PromiseRejectionEvent</li>*/}
              {/*<li>failed to process</li>*/}
            {/*</List>*/}
          {/*</Card>*/}
        {/*</Wrapper>*/}
      </IndexLayout>
    )
}

export const siteQuery = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
