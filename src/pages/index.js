import * as React from "react"


import * as styles from "./index.css"



const IndexPage = () => {
  return (
    <main className={styles.pageStyles}>
      <h1 >
        Million On Mars
        <br />
        <span>— Just to simplify search</span>
      </h1>
      <p >
        Lets see how far I get on this app
      </p>
      <ul>
        <li><a href="/buildings">Building List</a></li>
        <li><a href="/tasks">Tasks List</a></li>
        <li><a href="/resources">Resources List</a></li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
