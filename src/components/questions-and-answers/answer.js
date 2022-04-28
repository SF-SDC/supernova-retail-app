import React, { useState, useEffect } from "react";
import apiMaster from "../../apiMaster";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import Helpful from ".././ratings-and-reviews/helpful.js";
import Report from ".././ratings-and-reviews/report.js";

const Answer = (props) => {
  const [answers, setAnswer] = useState([]);
  const [answerLen, setanswerLen] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const [showCollapse, setshowCollapse] = useState(false);

  useEffect(() => {
    apiMaster
      .getSpecificAnswers(props.id)
      .then(({ data }) => {
        setAnswer(data.results);

        if (data.results.length > 2) setShowMore(true);
      })
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <>
        {answers.slice(0, answerLen).map((answer) => {
          let date = moment(answer.date).format("MMMM D, YYYY");
          let by;
          answer.answerer_name === "Seller"
            ? (by = <b>{answer.answerer_name}</b>)
            : (by = answer.answerer_name);

          return (
            <Card.Body key={answer.answer_id}>
              <Card.Title>A: {answer.body}</Card.Title>
              {answer.photos !== null
                ? answer.photos.map((image) => {
                    return (
                      <img
                        key={image}
                        src={image}
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                      />
                    );
                  })
                : null}
              <Card.Text>
                <div className="helpful-wrapper">
                  By: {by}, {date} |
                  <Helpful
                    id={answer.answer_id}
                    widget="answer"
                    helpfulCount={answer.helpfulness}
                  />
                  |<Report id={answer.answer_id} widget="answer" />
                </div>
              </Card.Text>
            </Card.Body>
          );
        })}
      </>
      {showMore ? (
        <Card.Body className="text-center">
          <Button
            variant="primary"
            className="qa-button"
            size="sm"
            onClick={() => {
              setShowMore(false);
              setshowCollapse(true);
              setanswerLen(answers.length);
            }}
          >
            Show More Answers
          </Button>
        </Card.Body>
      ) : (
        ""
      )}

      {showCollapse ? (
        <Card.Body className="text-center">
          <Button
            variant="primary"
            className="qa-button"
            size="sm"
            onClick={() => {
              setShowMore(true);
              setshowCollapse(false);
              setanswerLen(2);
            }}
          >
            Collapse Answer
          </Button>
        </Card.Body>
      ) : (
        ""
      )}
    </>
  );
};

export default Answer;
