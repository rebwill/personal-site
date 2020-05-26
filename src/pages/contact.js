import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div>
        <h1>What can I help you with?</h1>
        <p>
          Feel free to shoot me an email at{" "}
          <a href="mailto:willett.rebecca@gmail.com">
            willett.rebecca@gmail.com
          </a>
          .
          <br />
          <br />
          You can also reach me on{" "}
          <a href="https://twitter.com/rebeccaAwillett">Twitter</a> or{" "}
          <a href="https://www.linkedin.com/in/willettrebecca/">LinkedIn</a>.
        </p>
        <img src="https://media.giphy.com/media/xTeVhRpCiQHTe9XGcU/giphy.gif"></img>
      </div>
    </Layout>
  )
}
