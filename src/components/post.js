import React from "react";
import { Card, Button } from "react-bootstrap";
import classes from './post.module.css'

const Post = (props) => {
  return (
    <div className="p-3">
      <Card className={classes.post_card}>
        <Card.Img className={classes.featured} variant="top" src={props.image} width="720px" alt="gatsby" />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{__html: props.title}}/>
          <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}}/>
          <Button variant="primary" href={props.readMore}>READ MORE</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
