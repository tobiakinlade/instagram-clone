import React from 'react';
import Post from './Post';

const posts = [
  {
    id: 1,
    username: 'tobi',
    userImage:
      'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    img: 'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    caption: 'subscribe to my youtube channel',
  },
  {
    id: 2,
    username: 'tobi',
    userImage:
      'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    img: 'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    caption: 'subscribe to my youtube channel',
  },
  {
    id: 3,
    username: 'tobi',
    userImage:
      'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    img: 'https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo',
    caption: 'subscribe to my youtube channel',
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
