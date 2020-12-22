import React from "react";
import { graphql } from "gatsby";
import innerText from 'innertext';

import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

const blogPostLayout = ({ data }) => {
  const post = data.wordpressPost;
  return (
    <div>
      <SEO 
      title={innerText(post.title)}
      description={innerText(post.excerpt)}
      image={post.featured_media.source_url}
      keywords={post.categories.map(res => res).join(', ')}
      />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default blogPostLayout;
export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      categories
      excerpt
    }
  }
`;
