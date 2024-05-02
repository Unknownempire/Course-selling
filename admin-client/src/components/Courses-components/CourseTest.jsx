import React, { useEffect, useState } from 'react';
import { Typography, Container, FormControl, RadioGroup, FormControlLabel, Radio, Button, Card, Divider } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
// import { use } from '../../../../../server/routes/user';

const CourseTest = () => {
  const [questions,setQuestions] = useState([]);

  const init = async() => {
    const courseId = localStorage.getItem('courseid');
    const response = await axios.get(`${BASE_URL}/user/learn/questions/` + String(courseId), {
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })

    const data = response.data;
    setQuestions(data.Test);
    console.log(data.Test)
  }
  // console.log(question);
  // for(let i = 0; i < 10; ++i) {
  //   console.log(question[i].question)
  // }

  useEffect(() => {
    init();
  },[])

  const navigate = useNavigate();

  // Initialize state for storing selected answers
  const [answers, setAnswers] = useState(new Array(questions.length).fill("Nothing"));
  const [userResponses,setuserResponses] = useState([]);

  // Handle answer selection
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = (respo) => {
    let score = 0;
    answers.forEach((answer, index) => {
      let resp = {};
      resp.correctAnswer = questions[index].correctAnswer;
      resp.question = questions[index].question;
      resp.selectedOption = answer;
      //Not showing ?
      // console.log(index + " = " + answer);
      if (answer && answer === questions[index].correctAnswer) {
        score++;
        resp.isCorrect = true;
      } else {
        resp.isCorrect = false;
      }
      respo.push(resp)
    });
    // console.log('respo array')
    // console.log(respo)
    // setuserResponses(respo);
    return score;
  };
  // useEffect(() => {
    // console.log("responses ");
    // console.log("hello", userResponses);
  // }, [userResponses]);


  // Handle test submission
  const handleSubmit = async () => {
    const respo = [];
    const score = calculateScore(respo);
    console.log(respo);
    // setuserResponses(respo);
    // console.log("userResponses")
    // console.log(userResponses);
  // alert(`Your score: ${score}/${questions.length}`);
    return [score,respo];
  };

  return (
    <div style={{
      margin: '0',
      padding: '0',
      // border:'2px solid green',
      maxWidth: '100vw',
      display: 'flex'
    }}>
      <Container fixed maxWidth='xl' sx={{
        // border:"2px solid purple",
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          padding: "1rem",
          width: '70%',
          // border:'2px solid red',
          // display:'flex',
          // flexDirection:'column',
          // justifyContent:'center',
        }}>
          <Card sx={{
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <Container>
              <Typography variant="h4" gutterBottom>Test Your Knowledge</Typography>
              <form>
              {/* <form onSubmit={handleSubmit}> */}
                {questions.map((question, index) => (
                  <FormControl key={index} component="fieldset" margin="normal">
                    <Typography variant="h6" gutterBottom>{question.question}</Typography>
                    <RadioGroup
                      value={answers[index] || "Nothing"}
                      onChange={(e) => handleAnswerChange(index, e.target.value || "Nothing")}
                    >
                      {question.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                    <Divider />
                  </FormControl>
                ))}
              </form>
            </Container>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              {/* <Button type="submit" variant="contained" color="primary" onClick={() => {
                                alert("Do you want to submit");
                                //if yes then handleSubmit else user can review their answers
                            }}>Submit</Button> */}
              <Button type="submit" variant="contained" color="primary" onClick={async () => {
                alert("Do you want to submit");
                const [score,respo ]= await handleSubmit();
                console.log('user response is ', respo)
                //--- userResponse is not being updated immediately
                // setuserResponses(respo);
                // console.log(userResponses);
                //---
                console.log('your score is ' + score);
                // await setuserResponses(userResponses);
                const courseId = localStorage.getItem('courseid');
                const response = await axios.post(`${BASE_URL}/user/submit/` + String(courseId), {
                  score: score,
                  responses : respo,
                }, {
                  headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                  }

                })

                // redirect to a page screen which will show the result.
                navigate("/course/learn/result") //temporary
              }}>Submit</Button>
            </div>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default CourseTest;
