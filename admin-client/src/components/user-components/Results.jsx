import { Button, Card, Typography,Box,Paper } from "@mui/material";
// import "@fontsource/nunito";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useState,useEffect } from "react";
import {Loading} from "./Loading.jsx"
const Results = () => {
    const [score,SetScore] = useState(0);
    const [loading,setLoading] = useState(true);

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
        SetScore(data.score*10);
        setLoading(false);
    }

    useEffect(() => {
        init();
    },[]);
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
    if(loading) {
        return <Loading></Loading>
    } else {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
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
                    boxShadow:'#848484 0 0 4px 0px ',

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
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
                                </svg>
                                <Typography sx={{marginLeft: '2px'}}>  Correct Answers : {score/10}</Typography>
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
                                {/* <img width="23" height="23" src="https://img.icons8.com/ios/23/multiply.png" alt="multiply" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                                </svg>
                                <Typography sx={{marginLeft: '2px'}}>Incorrect Answers: {10 - score / 10}</Typography>
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
                                <img width="23" height="23" src="https://img.icons8.com/ios/50/questions.png" alt="questions" />
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
                        <Typography variant="body1" gutterBottom>
                            {remarks}
                        </Typography>
                    <div style={{
                        display: 'flex',
                        width: '70%',
                        justifyContent: "space-evenly",
                        marginTop: '3%',
                    }}>
                        <Button variant="contained" color="primary">
                            {/* <Button variant="contained" color="primary" onClick={handleReturnHome}> */}
                            Download Certificate
                        </Button>
                        {/* <Button variant="contained" color="primary"> */}
                            {/* <Button variant="contained" color="primary" onClick={handleReturnHome}> */}
                            {/* Preview Certificate */}
                        {/* </Button> */}
                    </div>
                </div>
                </div>
            </div>
        )

    }
}

export default Results;