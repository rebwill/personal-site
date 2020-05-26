import React from "react"

const HomeCard = ({ cardTitle }) => (
  <div
    style={{
      padding: `1rem 1rem 0 1rem`,
      boxShadow: `1px 2px 18px rgba(0,0,0,.1  )`,
      borderRadius: `15px`,
      margin: `.5rem 1rem`,
      width: `10rem`,
    }}
  >
    <h3>{cardTitle}</h3>
    {/* <p>Here is some content about the blog post.</p> */}
  </div>
)

export default HomeCard
