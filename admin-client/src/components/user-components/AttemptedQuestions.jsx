import { useState } from "react"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from "@mui/material";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const AttemptedQuestions = ({ responses }) => {
    // const [alignment, setAlignment] = useState(true); // Initial alignment based on "Correct" category
    const [alignment, setAlignment] = useState('All'); // Initial alignment based on "Correct" category

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const correct = responses.filter(element => element.isCorrect);
    const incorrect = responses.filter(element => !element.isCorrect);

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '2px solid lightblue',
            padding: '2rem',
        }}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Category"
            >
                <ToggleButton value={'All'} color="primary">All</ToggleButton>
                <ToggleButton value={'correct'} color="success">Correct</ToggleButton>
                <ToggleButton value={'incorrect'} color="error">Incorrect</ToggleButton>
            </ToggleButtonGroup>

            <Toggles responses={responses} alignment={alignment}></Toggles>
        </div>
    );
};

// const card = ({index,isCorrect,question,selected,correct}) => {
//     return (
//         <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             border: '2px solid gray',
//             borderRadius: '10px',
//             marginBottom: '0.2rem',
//         }}>
//             <Typography >Q{index + 1} {question}</Typography>
//             <br />
//             <Typography color={(isCorrect === true) ? 'green' : 'error'}>Your Answer : {selected}</Typography>
//             <br />
//             {/* <Typography >{item}</Typography> */}
//             <Typography color="green">Correct Answer : {correct}</Typography>
//         </div>

//     );
// }


const Toggles = ({ responses, alignment }) => {
    const correct = responses.filter(element => element.isCorrect);
    const incorrect = responses.filter(element => !element.isCorrect);
    if (alignment === "All") {
        return (
            <div style={{
                marginBottom: '1rem',
                marginTop: '1rem',
            }}>
                {responses.map((item, index) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '2px solid gray',
                        borderRadius: '10px',
                        marginBottom: '0.4rem',
                        padding: '1rem',
                        backgroundColor: '#f2f2f2'
                    }}>
                        <Typography >Q{index + 1} {item.question}</Typography>
                        <br />
                        {item.isCorrect ? (
                            <>
                                <Typography >Your Answer : <Typography color="green">{item.selectedOption} <AssignmentTurnedInIcon sx={{ fontSize: 15 }}></AssignmentTurnedInIcon></Typography> </Typography><br />
                            </>

                        ) : (
                            <>
                                <Typography >Your Answer : <Typography color="error">{item.selectedOption} <ErrorOutlineIcon sx={{ fontSize: 15 }}></ErrorOutlineIcon> </Typography> </Typography><br />
                            </>

                        )}
                        <Typography >Correct Answer : <Typography color="green">{item.correctAnswer} </Typography> </Typography><br />

                    </div>
                ))}
            </div>
        )

    } else if (alignment === 'correct') {
        return (
            <div style={{
                marginBottom: '1rem',
                marginTop: '1rem',
            }}>
                {correct.map((item, index) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '2px solid green',
                        borderRadius: '10px',
                        marginBottom: '0.2rem',
                        padding: '1rem',
                        backgroundColor: '#f2f2f2'
                    }}>
                        <Typography >Q{index + 1} {item.question}</Typography>
                        <br />
                        <Typography >Your Answer : <Typography color="green">{item.selectedOption} <AssignmentTurnedInIcon sx={{ fontSize: 15 }}></AssignmentTurnedInIcon></Typography> </Typography><br />
                        <br />
                        <Typography >Correct Answer : <Typography color="green">{item.correctAnswer} </Typography> </Typography><br />

                    </div>
                ))}
            </div>

        )
    } else {
        return (
            <div style={{
                marginBottom: '1rem',
                marginTop: '1rem',
            }}>
                {incorrect.map((item, index) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '2px solid red',
                        borderRadius: '10px',
                        marginBottom: '0.2rem',
                        padding: '1rem',
                        backgroundColor: '#f2f2f2'
                    }}>
                        <Typography >Q{index + 1} {item.question}</Typography>
                        <br />
                        <Typography >Your Answer : <Typography color="error">{item.selectedOption} <ErrorOutlineIcon sx={{ fontSize: 15 }}></ErrorOutlineIcon> </Typography> </Typography><br />
                        <br />
                        <Typography >Correct Answer : <Typography color="green">{item.correctAnswer} </Typography> </Typography><br />

                    </div>
                    // <card index={item.index} isCorrect={item.isCorrect} question={item.questionw} selected={item.selectedOption} correct={item.correctAnswer}></card>
                ))}
            </div>

        )
    }
}

export default AttemptedQuestions;
