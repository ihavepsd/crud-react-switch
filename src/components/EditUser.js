import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function EditUser() {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="button">EditName</Button>
      <Link to="/" style={{ margin: "5px" }}>
        Cancel
      </Link>
    </Form>
  );
}

export default EditUser;
