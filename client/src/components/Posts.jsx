import React, { useState } from 'react'
import Thumbnaill from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
      id: '1',
      thumbnail: Thumbnaill,
      category: 'education',
      title: 'This is the title blog.',
      desc: 'Lorem consectetur culpa, officia tempora doloribus ipsam eligendi deserunt perferendis. Animi quod, quibusdam modi molestiae perspiciatis placeat, incidunt porro doloremque sint, sequi excepturi enim.',
      authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very first post on this blog. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 13 
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very last post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 11
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        <div className="container posts_container">
            {
                posts.map(({id,thumbnail,category,title,desc,authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div>
    </section>
  )
}

export default Posts