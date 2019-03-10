import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remark from "remark";
import reactRenderer from "remark-react";
const posts = require("../src/posts.json");
import Document, { Html, Head, Main, NextScript } from 'next/document'
import ReactPlayer from "react-player"
export default class MyDocument extends Document {

  static async getInitialProps ({ query }) {
    return { slug: query.slug }
  }
  render () {

    if (this.props.slug) {
      const post = posts.filter(p => this.props.slug === p.attributes.title).pop()

      if (post) return <div className="post">

        <style jsx global>{`

code {
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  background: #faf8f0;
}

            p {
              font-family: 'Open Sans', sans-serif;

            }

            .post, code {
              max-width: 400px;
              margin: 0 auto;
            }

            h1 {
              margin-top: 2em;
            }

            h2 {
              color:#8B8989
            }

            h3 {
              color: #ADACAC
            }

            h4 {
              color: #D0CFCF
            }

            h5 {
              color: #92EDF1
            }

            h6 {
              color: #BDF4F7
            }

            h1,h2,h3,h4,h5,h6 {
              text-transform: uppercase;
            }

            `}</style>

        {remark()
          .data({
            settings: {
              commonmark: false,
              emphasis: "*",
              strong: "*",
              footnotes: true,
              gfm: true,
              position: false, sanitize: false
            }
          })
          .use(reactRenderer)
          // .use(embed)
          .processSync(post.body).contents}

        {post.attributes.type === "video" ||
          post.attributes.type === "sound" ? (
            <div>
              <ReactPlayer url={post.attributes.url} width="100%" />
            </div>
          ) : null}

      </div>
    }

    return <div>No</div>
  }
}
