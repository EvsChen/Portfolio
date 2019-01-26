import Layout from './layout';
import React from 'react';

const Post = ({children}) => (
  <Layout>
    <div className="post">
      {children}
    </div>
  </Layout>
);

export default Post;