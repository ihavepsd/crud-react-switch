import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

function AddPost() {
  const { id } = useParams();
  //alert(id);
  const [posts, setPosts] = useState({
    UserId: "",
    title: "",
    body: ""
  });

  const { UserId, title, body } = posts;
  const ChangeHandler = (event) => {
    //console.log(event);
    setPosts({ ...posts, [event.target.name]: event.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (id === undefined) {
      //console.log("test")
      axios
        .post("https://jsonplaceholder.typicode.com/posts/", posts)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const loadPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        //console.log(res)
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadPost();
  }, [id]);
  return (
    <Form onSubmit={(e) => SubmitHandler(e)}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter UserID"
          name="UserId"
          value={UserId}
          onChange={(event) => {
            ChangeHandler(event);
          }}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={title}
          onChange={(e) => {
            ChangeHandler(e);
          }}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter Body"
          name="body"
          value={body}
          onChange={(e) => {
            ChangeHandler(e);
          }}
        ></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
      <Link to="/" className="btn btn-warning" style={{ margin: "5px" }}>
        Cancel
      </Link>
    </Form>
  );
}

export default AddPost;
