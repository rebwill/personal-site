import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeCard from "../components/home_card"
import RebeccaScuba from "../images/rebecca-scuba.jpg"

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const Home = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div style={{ padding: `2rem 0`, display: `flex` }}>
        <div style={{ flex: `auto` }}>
          <h1>Hello, and welcome! I'm Rebecca.</h1>
          <p>
            I'm a software developer, among many other things.
            <br />
            <br />
            I'm passionate about the environment and making the tech industry
            more diverse, equitable, and inclusive.
          </p>
        </div>
        <div>
          <img
            src={RebeccaScuba}
            style={{
              borderRadius: `15px`,
              boxShadow: `1px 2px 18px rgba(0,0,0,.3 )`,
            }}
          ></img>
        </div>
      </div>
      {/* <div style={{ display: `flex`, flexWrap: `wrap` }}>
        <HomeCard cardTitle="👋  About Me"></HomeCard>
        <HomeCard cardTitle="✍️  Blog"></HomeCard>
        <HomeCard cardTitle="💻 Projects"></HomeCard>
      </div> */}

      {/* 
      <h1>Hi people</h1>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  </Layout>
)

export default Home
