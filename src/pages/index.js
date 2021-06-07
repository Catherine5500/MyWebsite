import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  return (
  	<Layout>
	 <h1>{data.site.siteMetadata.title}</h1>
	 <p>{data.site.siteMetadata.author}</p>
	 <Link to="/page-2">Page 2 </Link>
	</Layout> 

)
}

// export const query = graphql`
//   query FirstQuery {
//     site{
//     	siteMetadata {
//     		title
//     		author
//     	}
//     }
    
//   }
// `

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
      html
    }
  }
`