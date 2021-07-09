import "./Home.css";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";
import Posts from "../../component/posts/Posts";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
