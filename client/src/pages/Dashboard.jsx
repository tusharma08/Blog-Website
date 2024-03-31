import React, { useState, useEffect } from 'react';
import { DUMMY_POSTS } from '../data';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 const [posts, setPosts] = useState(DUMMY_POSTS);
 const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

 // Function to truncate the title if it's longer than 20 characters
 const truncateTitle = (title) => {
    return isMobile && title.length > 20 ? title.substring(0, 20) + '...' : title;
 };

 // Effect to update isMobile state when window is resized
 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
 }, []);

 return (
    <section className='dashboard'>
      {
        posts.length ? (
          <div className="container dashboard_container">
            {
              posts.map(post => {
                return (
                 <article key={post.id} className='dashboard_post'>
                    <div className="dashboard_post_info">
                      <div className="dashboard_post_thumbnail">
                        <img src={post.thumbnail} alt="" />
                      </div>
                      <h4>{truncateTitle(post.title)}</h4>
                    </div>
                    <div className="dashboard_post_actions">
                      <Link to={`/post/${post.id}`} className='btn sm'>View</Link>
                      <Link to={`/post/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                      <Link to={`/post/${post.id}/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                 </article>
                );
              })
            }
          </div>
        ) : (
          <h2 className='center'>You have No Post Yet!</h2>
        )
      }
    </section>
 );
};

export default Dashboard;
