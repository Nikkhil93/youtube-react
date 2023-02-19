import React from 'react';
import Comment from "./Comment";

const CommentsList = ({ comments }) => {

    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} repliesLength = {(comment.replies.length).toString()} />
        <div className="pl-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
};

export default CommentsList;