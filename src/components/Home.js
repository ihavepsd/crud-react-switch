import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((dat) => {
        //console.log(dat);
        setPosts(dat.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteHandle = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((dat) => {
        console.log(dat);
        //setPosts(dat.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search text..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <Link to="/addpost" className="btn btn-primary" style={{ margin: "5px" }}>
        AddPost
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((post) => {
              if (search == "") {
                return post;
              } else if (post.title.includes(search)) {
                return post;
              }
            })
            .map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link
                    exact
                    to={`/addpost/${post.id}`}
                    className="btn btn-primary"
                  >
                    {" "}
                    Edit
                  </Link>
                  <Link
                    style={{ margin: "5px" }}
                    className="btn btn-danger"
                    onClick={() => {
                      deleteHandle(post.id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
