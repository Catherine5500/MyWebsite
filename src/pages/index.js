import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


export default function Home({data, location }) {

 const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title="About Me"
        description="Catherine's blog and portfolio"
        keywords={[`blog`, `portfolio`, `Catherine Yang`]}
        pathname={location.pathname}
      />
      <main>
        <article>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
    </Layout>
  )
//   return (
//   	<Layout>
// 	 <h1>{data.site.siteMetadata.title}</h1>
// 	 <p>{data.site.siteMetadata.author}</p>
// 	 <Link to="/page-2">Page 2 </Link>
// 	</Layout> 

// )
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