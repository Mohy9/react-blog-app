import { Link } from 'react-router-dom';

function BlogList({ blogs, title, handleClick, handleDelete, showButton }) {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((item) => (
        <div className='blog-preview' key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </Link>
          {showButton && <button onClick={() => handleClick()}>Console</button>}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
