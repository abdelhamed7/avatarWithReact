import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import AprrovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AprrovalCard>
        <CommentDetail
          author="sam"
          time="5:50 PM"
          comment="this is incredible post"
          avatar={faker.image.avatar()}
        />
      </AprrovalCard>
      <AprrovalCard>
      <CommentDetail
        author="alex"
        time="9:50 AM"
        comment="for the god sake"
        avatar={faker.image.avatar()}
      />
      </AprrovalCard>
      <AprrovalCard>
      <CommentDetail
        author="da34y"
        time="6:30 PM"
        comment="How on earth"
        avatar={faker.image.avatar()}
      />
      </AprrovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
