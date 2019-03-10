import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remark from "remark";
import reactRenderer from "remark-react";
import Link from 'next/link'
import "../src/style.css"


const posts = require("../src/posts.json");
function Home () {
  return <div>

    <style jsx global>{`
p {
  font-family: 'Open Sans', sans-serif;
}
ul {
  list-style: none;
  text-transform: uppercase
}

ul li a, ul li a:active, ul li a:visited{
  text-decoration: none;
  color: grey;
}
ul li a:hover {
  cursor: pointer;
  opacity: 1;
  color: #BDF4F7;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}

ul li a:hover:before,
ul li a:focus:before,
ul li a:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
`}</style>
    <ul>
      {posts.length &&
        posts.map(post =>
          <li><a href={"/post?slug=" + post.attributes.title}>{post.attributes.title}</a></li>)}
    </ul>
  </div >
}

export default Home