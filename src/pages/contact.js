import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { css } from "@emotion/react"

export default function Contact({ location }) {
  return (
    <Layout>
      <SEO
        title="Social information"
        description="Catherine's social networks details"
        pathname={location.pathname}
      />
      <main
        css={css`
          text-align: center;
        `}
      >
        <p>
          <a
            href="mailto:catherineyang5200@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Catherine5500"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="http://www.linkedin.com/in/catherine-hyang"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/Caaaaatherinehy/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </main>
    </Layout>
  )
}
