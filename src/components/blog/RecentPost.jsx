import { Link } from "react-router-dom";
import blogData from "../../data/blog";

const RecentPost = () => {
  return (
    <>
      {blogData.slice(0, 3).map((post) => (
        <div
          className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
          key={post.id}
        >
          <div>
            <img src={post.imageSrc} alt={post.title} className="lazy-img" />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <Link to={`/blog/${post.id}`} className="title tran3s">
                {post.title}
              </Link>
            </h4>
            <div className="date">{post.date}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
