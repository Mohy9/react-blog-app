import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Not sorry</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}
 
export default NotFound;
