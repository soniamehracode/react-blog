import "./Single.css";
import Sidebar from "../../component/sidebar/Sidebar";
import SinglePost from "../../component/singlePost/SinglePost";
export default function Single() {
  return (
    <div className="single">
      {/* <Post/> */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}
