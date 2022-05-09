import React from 'react';
import BlogList from './Blog-list';
import useFetch from './useFetch';

function Home() {
  const {data: blogs, isPending, error, setData} = useFetch('http://localhost:8000/blogs');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setData(newBlogs);
  };

  const handleClick = () => {
    console.log(blogs.map(item => (item.author)));
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && 
        <>
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
          <BlogList blogs={blogs.filter((item) => item.author === 'mario')} title="Mario's blog" handleDelete={handleDelete}/>
          <BlogList blogs={blogs} title="Another blog"  handleDelete={handleDelete} handleClick={handleClick} showButton/>
        </>
      }
    </div>
  );
};

export default Home;
