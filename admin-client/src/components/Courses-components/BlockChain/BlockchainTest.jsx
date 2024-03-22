import React, { useState } from 'react';
import { Typography, Container, FormControl, RadioGroup, FormControlLabel, Radio, Button, Card, Divider } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../../config';

const BlockChainTestPage = () => {
  const questions = [
    {
      question: "What is a blockchain?",
      options: [
        "A distributed ledger technology that records transactions across multiple computers in a way that is secure, transparent, and tamper-proof",
        "A type of encryption algorithm used to secure data on the internet",
        "A digital wallet used to store cryptocurrencies",
        "A group of transactions bundled together and added to the blockchain"
      ],
      correctAnswer: "A distributed ledger technology that records transactions across multiple computers in a way that is secure, transparent, and tamper-proof"
    },
    {
      question: "What is a block in a blockchain?",
      options: [
        "A group of transactions bundled together and added to the blockchain",
        "A cryptographic hash function used to secure the blockchain",
        "A digital signature used to verify transactions",
        "A type of encryption algorithm used to secure data on the internet"
      ],
      correctAnswer: "A group of transactions bundled together and added to the blockchain"
    },
    {
      question: "What is a decentralized network?",
      options: [
        "A network where power and control are distributed among multiple participants",
        "A network that is controlled by a single entity",
        "A network where all nodes are connected to a central server",
        "A network that does not use encryption"
      ],
      correctAnswer: "A network where power and control are distributed among multiple participants"
    },
    {
      question: "What is a smart contract?",
      options: [
        "A legally binding agreement between two parties written in computer code",
        "An intelligent computer program capable of making decisions on its own",
        "A type of cryptocurrency",
        "A digital signature used to verify transactions"
      ],
      correctAnswer: "A legally binding agreement between two parties written in computer code"
    },
    {
      question: "What is the role of miners in a blockchain network?",
      options: [
        "To validate and add transactions to the blockchain",
        "To regulate the supply of cryptocurrencies",
        "To create new cryptocurrencies",
        "To secure the network from cyber attacks"
      ],
      correctAnswer: "To validate and add transactions to the blockchain"
    },
    {
      question: "What is a cryptocurrency?",
      options: [
        "A digital asset designed to work as a medium of exchange",
        "A type of encryption algorithm used to secure data on the internet",
        "A decentralized network",
        "A legally binding agreement between two parties written in computer code"
      ],
      correctAnswer: "A digital asset designed to work as a medium of exchange"
    },
    {
      question: "What is the purpose of consensus algorithms in blockchain?",
      options: [
        "To agree on the validity of transactions and secure the network",
        "To regulate the supply of cryptocurrencies",
        "To create new cryptocurrencies",
        "To secure the network from cyber attacks"
      ],
      correctAnswer: "To agree on the validity of transactions and secure the network"
    },
    {
      question: "What is the difference between public and private blockchains?",
      options: [
        "Public blockchains are open to anyone, while private blockchains restrict access to authorized participants",
        "Public blockchains are controlled by a single entity, while private blockchains are decentralized",
        "Public blockchains use encryption algorithms, while private blockchains do not",
        "Public blockchains have slower transaction speeds compared to private blockchains"
      ],
      correctAnswer: "Public blockchains are open to anyone, while private blockchains restrict access to authorized participants"
    },
    {
      question: "What is a hash function in blockchain?",
      options: [
        "A mathematical function that converts input data into a fixed-size string of characters",
        "A digital signature used to verify transactions",
        "A type of encryption algorithm used to secure data on the internet",
        "An intelligent computer program capable of making decisions on its own"
      ],
      correctAnswer: "A mathematical function that converts input data into a fixed-size string of characters"
    },
    {
      question: "What is the role of miners in a blockchain network?",
      options: [
        "To validate and add transactions to the blockchain",
        "To regulate the supply of cryptocurrencies",
        "To create new cryptocurrencies",
        "To secure the network from cyber attacks"
      ],
      correctAnswer: "To validate and add transactions to the blockchain"
    },
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
  const handleSubmit = async () => {
    const score = calculateScore();
    // alert(`Your score: ${score}/${questions.length}`);
    // const courseId = localStorage.getItem('courseid');
    // const response = await axios.post(`${BASE_URL}/submit/${courseId}`, {
    //   score : score,
    // }, {
    //   headers: {
    //     "Content-type": "application/json",
    //     "Authorization": "Bearer " + localStorage.getItem("token")
    //   }

    // })
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
                const score = handleSubmit();
                console.log(score);
                const courseId = localStorage.getItem('courseid');
                console.log(courseId);
                const response = await axios.post(`${BASE_URL}/submit/` + String(courseId), {
                  score: score,
                }, {
                  headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                  }

                })
                //if yes then handleSubmit else user can review their answers
              }}>Submit</Button>
            </div>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default BlockChainTestPage;
