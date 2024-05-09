import { Button, Card, Typography, Box, Paper } from "@mui/material";
// import "@fontsource/nunito";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useState, useEffect } from "react";
import { Loading } from "./Loading.jsx"
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import DangerousIcon from '@mui/icons-material/Dangerous';
import QuizIcon from '@mui/icons-material/Quiz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttemptedQuestions from "./AttemptedQuestions.jsx";
// import { TestQuestions } from "../../../../server/db/index.js";

const Results = () => {
    const [score, SetScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [alignment, setAlignment] = useState(true);
    const [open, setOpen] = useState(false);
    const [responses, setResponses] = useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        console.log(newAlignment);
    };
    const navigate = useNavigate();

    const init = async () => {
        const courseId = localStorage.getItem('courseid');
        const response = await axios.post(`${BASE_URL}/user/learn/Test/result`, {
            courseId: courseId
        }, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        const data = response.data;
        SetScore(data.score * 10);
        await setResponses(data.responses);
        console.log(data);
        console.log(data.responses)
        // console.log('response = ', responses);
        setLoading(false);
    }

    useEffect(() => {
        init();
    }, []);
    let remarks;

    if (score >= 90) {
        remarks = 'Outstanding performance! You have demonstrated an exceptional understanding of the material, consistently excelling in your assessments. Your dedication and hard work are truly commendable. Keep pushing yourself to new heights!';
    } else if (score >= 80) {
        remarks = 'Congratulations on your excellent performance! You have shown a strong command of the subject matter, consistently achieving high scores. Your commitment to learning is evident, and it will undoubtedly lead to continued success!';
    } else if (score >= 70) {
        remarks = 'Great job! Your performance reflects a solid understanding of the concepts covered in the course. By consistently scoring well, you have demonstrated your commitment to excellence. Keep up the good work!';
    } else if (score >= 60) {
        remarks = 'Well done! You have performed above average, showcasing a good grasp of the material. With continued effort and focus, you can further enhance your understanding and achieve even better results!';
    } else if (score >= 50) {
        remarks = 'Not bad! While there is room for improvement, you have demonstrated a satisfactory understanding of the course material. Stay determined and use this as an opportunity to identify areas for growth.';
    } else if (score >= 40) {
        remarks = 'Keep pushing yourself! While your performance may not be where you want it to be yet, you are making progress. Take the time to review your weaker areas and continue practicing to improve your scores.';
    } else {
        remarks = 'Don\'t be discouraged! Everyone faces challenges on their learning journey, and setbacks are a natural part of the process. Use this as an opportunity to learn from your mistakes and grow stronger.';
    }
    if (loading) {
        return <Loading></Loading>
    } else {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                // border: '2px solid red'
            }}>
                <Typography variant="h4" gutterBottom sx={{
                    marginTop: '3%',
                }}>
                    Test Results
                </Typography>
                <div style={{
                    backgroundColor: 'rgb(106 255 255 / 30%)',
                    border: '1px solid #00bbff',
                    borderRadius: '10px',
                    marginTop: '3%',
                    height: '40vh',
                    width: '70vw',
                    padding: '2%',
                    boxShadow: '#848484 0 0 4px 0px ',

                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>
                        <div style={{
                            border: '1px solid #00bbff',
                            backgroundColor: '#eeeeee',
                            borderRadius: '25px',
                            padding: '5px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                {/* <img width="32" height="32" src="https://img.icons8.com/windows/32/assessments.png" alt="assessments" /> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
                                </svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                                    <path d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z"></path>
                                </svg> */}
                                <CheckIcon></CheckIcon>
                                {/* <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/in-progress.png" alt="in-progress"/> */}
                                <Typography sx={{ marginLeft: '2px' }}>  Correct Answers : {score / 10}</Typography>
                            </div>
                        </div>
                        <div style={{
                            border: '1px solid #00bbff',
                            backgroundColor: '#eeeeee',
                            borderRadius: '25px',
                            padding: '6px'
                        }}>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                                </svg> */}
                                <DangerousIcon></DangerousIcon>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                                    <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                                </svg> */}
                                <Typography sx={{ marginLeft: '2px' }}>Incorrect Answers: {10 - score / 10}</Typography>
                            </div>
                        </div>
                        <div style={{
                            border: '1px solid #00bbff',
                            backgroundColor: '#eeeeee',
                            borderRadius: '25px',
                            padding: '5px',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                {/* <img width="23" height="23" src="https://img.icons8.com/ios/50/questions.png" alt="questions" /> */}
                                {/* <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/questions.png" alt="questions"/> */}
                                <QuizIcon></QuizIcon>
                                <Typography>Total Questions : 10</Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        // height: '40vh',
                        // width: '70vw',
                        // backgroundColor: 'transparent',
                    }}>

                        <Typography variant="h4" gutterBottom sx={{
                            marginTop: '3%',
                            fontWeight: '600',
                            color: '#2b476d',
                            // fontFamily: 'Nunito',
                        }}>
                            Score: {score}%
                        </Typography>
                        {score > 50 ? (
                            <img width="48" height="48" src="https://img.icons8.com/color/48/prize.png" alt="prize" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 100 100">
                                <path fill="#fb7369" d="m68.77,50c5.01-5.33,9.92-10.79,14.74-16.45,2-2.36,1.98-5.82-.01-8.19-2.69-3.2-5.65-6.17-8.86-8.86-2.37-1.99-5.84-2.02-8.19-.01-5.66,4.82-11.12,9.73-16.45,14.74-5.33-5.01-10.79-9.92-16.45-14.74-2.36-2-5.82-1.98-8.19.01-3.2,2.69-6.17,5.65-8.86,8.86-1.99,2.37-2.02,5.84-.01,8.19,4.82,5.66,9.73,11.12,14.74,16.45-5.01,5.33-9.92,10.79-14.74,16.45-2,2.36-1.98,5.82.01,8.19,2.69,3.2,5.65,6.17,8.86,8.86,2.37,1.99,5.84,2.02,8.19.01,5.66-4.82,11.12-9.73,16.45-14.74,5.33,5.01,10.79,9.92,16.45,14.74,2.36,2,5.82,1.98,8.19-.01,3.2-2.69,6.17-5.65,8.86-8.86,1.99-2.37,2.02-5.84.01-8.19-4.82-5.66-9.73-11.12-14.74-16.45Z"></path><path fill="#4a254b" d="m43.83,58.06c-.28,0-.56-.12-.75-.34-.36-.42-.32-1.05.09-1.41,1.59-1.39,4.15-2.22,6.86-2.22s5.17.79,6.78,2.15c.42.36.47.99.12,1.41-.36.42-.99.47-1.41.12-1.24-1.05-3.29-1.68-5.49-1.68s-4.31.64-5.54,1.72c-.19.17-.42.25-.66.25Z"></path><path fill="#4a254b" d="m44.09,58.65c-.42,0-.8-.26-.95-.67-.13-.38-.49-.72-.8-.89-.48-.27-.65-.88-.38-1.36.27-.48.88-.65,1.36-.38.79.45,1.43,1.19,1.7,1.98.18.52-.1,1.09-.62,1.27-.11.04-.22.06-.33.06Z"></path><path fill="#4a254b" d="m55.91,58.65c-.11,0-.22-.02-.33-.06-.52-.18-.8-.75-.62-1.27.27-.79.91-1.53,1.7-1.98.48-.27,1.09-.1,1.36.38.27.48.1,1.09-.38,1.36-.3.17-.67.51-.8.89-.14.41-.53.67-.95.67Z"></path><g><circle cx="42" cy="47" r="5" fill="#fff"></circle><circle cx="42" cy="47" r="2.5" fill="#4a254b"></circle><circle cx="58" cy="47" r="5" fill="#fff"></circle><circle cx="58" cy="47" r="2.5" fill="#4a254b"></circle></g>
                            </svg>
                        )}
                        <Typography variant="body1" gutterBottom>
                            {remarks}
                        </Typography>
                        <div style={{
                            display: 'flex',
                            width: '70%',
                            justifyContent: "space-evenly",
                            marginTop: '3%',
                        }}>
                            {score > 50 ? (
                                <>
                                {/* <Button variant="contained" color="primary" sx={{
                                    textAlign: 'center',
                                }} onClick={handleClick}>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert
                                            onClose={handleClose}
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Downloading
                                        </Alert>
                                    </Snackbar>
                                    <DownloadIcon></DownloadIcon> */}
                                    {/* <Button variant="contained" color="primary" onClick={handleReturnHome}> */}
                                    {/* <img width="20" height="18" src="https://img.icons8.com/fluency-systems-filled/48/download.png" alt="download" style={{
                                        marginRight: '8px',
                                        marginBottom: '3px'
                                    }}/> */}
                                    {/* Download Certificate
                                </Button> */}
                                <Button variant="contained" color="primary" sx={{
                                    textAlign: 'center',
                                }} 
                                onClick={() => {
                                    navigate("/course/learn/certificate")
                                }}
                                >
                                    {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert
                                            onClose={handleClose}
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Downloading
                                        </Alert>
                                    </Snackbar> */}
                                    <VisibilityIcon></VisibilityIcon>  
                                    Preview Certificate
                                </Button>
                                </>
                            ) : (
                                <Button variant="contained" color="primary" sx={{ textAlign: 'center' }} onClick={async () => {

                                    let courseId = localStorage.getItem('courseid');
                                    const response = await axios.get(`${BASE_URL}/user/learn/` + String(courseId), {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem('token')}`
                                        }
                                    })
                                    const route = response.data.message

                                    // console.log(resAttempt);

                                    navigate("/course/" + route);
                                }}>
                                    Back to Course
                                </Button>

                            )
                            }
                            {/* <Button variant="contained" color="primary"> */}
                            {/* <Button variant="contained" color="primary" onClick={handleReturnHome}> */}
                            {/* Preview Certificate */}
                            {/* </Button> */}
                        </div>

                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '5rem',
                    // border: '2px solid red',
                    marginRight: 'auto',
                    marginLeft: '12.5rem',
                }}>
                    {/* <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value={true} color="success">Correct</ToggleButton>
                        <ToggleButton value={false} color="error">Incorrect</ToggleButton>
                    </ToggleButtonGroup> */}
                    <AttemptedQuestions responses={responses}></AttemptedQuestions>
                </div>
            </div>
        )

    }
}

export default Results;