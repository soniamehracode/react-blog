import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F02%2F18%2F286992-nature-colorful-photography.jpg&f=1&nofb=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsom dolar sit amot</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
      </p>
    </div>
  );
}
