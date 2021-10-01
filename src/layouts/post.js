import React from "react";
import _ from "lodash";
import moment from "moment-strftime";
import { Layout } from "../components/index";

import { htmlToReact, withPrefix } from "../utils";
// import DisqusComments from "../components/DisqusComments";
import Subscribe from "../components/Subscribe";
import Markdown from "markdown-to-jsx";
import FeedbackForm from "../components/FeedbackForm";

export default class Post extends React.Component {
  render() {
    const postTitle = _.get(this.props, "page.frontmatter.title", null);
    const postPath = this.props.path;

    return (
      <Layout {...this.props}>
        <div className="inner outer">
          <article className="post post-full">
            <header className="post-header inner-sm">
              <h1 className="post-title line-top">{postTitle}</h1>
              {_.get(this.props, "page.frontmatter.subtitle", null) && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, "page.frontmatter.subtitle", null)
                  )}
                </div>
              )}
            </header>
            {_.get(this.props, "page.frontmatter.image", null) && (
              <div className="post-image">
                <img
                  // width={500}
                  // height={400}
                  src={withPrefix(
                    _.get(this.props, "page.frontmatter.image", null)
                  )}
                  alt={_.get(this.props, "page.frontmatter.image_alt", null)}
                />
              </div>
            )}
            <div className="post-content inner-sm">
              <Markdown
                options={{
                  overrides: {
                    Subscribe: {
                      component: Subscribe,
                    },
                  },
                }}
              >
                {_.get(this.props, "page.markdown", null)}
              </Markdown>

              <Subscribe />
            </div>

            <footer className="post-meta inner-sm">
              <time
                className="published"
                dateTime={moment(
                  _.get(this.props, "page.frontmatter.date", null)
                ).strftime("%Y-%m-%d %H:%M")}
              >
                {moment(
                  _.get(this.props, "page.frontmatter.date", null)
                ).strftime("%B %d, %Y")}
              </time>

              {/* <FeedbackForm /> */}

              {/* <DisqusComments
                post={{
                  title: postTitle,
                  id: postTitle.toLowerCase().replace(/\s+/gi, "_"),
                  url: postPath,
                }}
              /> */}
            </footer>
          </article>
        </div>
      </Layout>
    );
  }
}
