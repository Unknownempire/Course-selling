import React, { useState } from 'react';
import { Typography, Container, FormControl, RadioGroup, FormControlLabel, Radio, Button, Card, Divider } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../../config';

const FrontendTestPage = () => {
    const questions = [
  {
    question: "What are the basic languages required for creating a website?",
    options: ["HTML", "CSS", "JavaScript", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Where should one start to become a Front-End Developer?",
    options: ["HTML", "CSS", "JavaScript", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the purpose of HTML in web development?",
    options: ["Defines the structure of a web page", "Styles the content of a web page", "Adds interactivity to a web page", "None of the above"],
    correctAnswer: "Defines the structure of a web page"
  },
  {
    question: "Which CSS property is used to change the font size of text?",
    options: ["font-weight", "font-style", "font-size", "text-align"],
    correctAnswer: "font-size"
  },
  {
    question: "What is the role of JavaScript in web development?",
    options: ["Defines the structure of a web page", "Styles the content of a web page", "Adds interactivity to a web page", "None of the above"],
    correctAnswer: "Adds interactivity to a web page"
  },
  {
    question: "Which of the following is a correct way to comment in HTML?",
    options: ["<!-- This is a comment -->", "/* This is a comment */", "// This is a comment", "// This is a comment //"],
    correctAnswer: "<!-- This is a comment -->"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which of the following is NOT a valid CSS selector?",
    options: [".class-name", "#id-name", "<div>", "element-name"],
    correctAnswer: "<div>"
  },
  {
    question: "What is the purpose of the justify-content property in CSS Flexbox?",
    options: ["Aligns items along the main axis", "Aligns items along the cross axis", "Adds space between flex items", "Centers flex items horizontally"],
    correctAnswer: "Adds space between flex items"
  },
  {
    question: "What is the purpose of the align-items property in CSS Flexbox?",
    options: ["Aligns items along the main axis", "Aligns items along the cross axis", "Adds space between flex items", "Centers flex items vertically"],
    correctAnswer: "Aligns items along the cross axis"
  }
];


    // Initialize state for storing selected answers
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    // Handle answer selection
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    // Calculate the score based on selected answers
    const calculateScore = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    // Handle test submission
    const handleSubmit = async() => {
        const score = calculateScore();
        // alert(`Your score: ${score}/${questions.length}`);
        return score;
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
                            <form onSubmit={handleSubmit}>
                                {questions.map((question, index) => (
                                    <FormControl key={index} component="fieldset" margin="normal">
                                        <Typography variant="h6" gutterBottom>{question.question}</Typography>
                                        <RadioGroup
                                            value={answers[index]}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
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
                            <Button type="submit" variant="contained" color="primary" onClick={async () => {
                                alert("Do you want to submit");
                                const score = await handleSubmit();
                                // console.log('your score is ' + score);
                                const courseId = localStorage.getItem('courseid');
                                const response = await axios.post(`${BASE_URL}/user/submit/` + String(courseId), {
                                    score: score,
                                }, {
                                    headers: {
                                        "Content-type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }

                                })

                                // redirect to a page screen which will show the result.
                            }}>Submit</Button>

                        </div>
                    </Card>
                </Box>
            </Container>
        </div>
    );
};

export default FrontendTestPage;
