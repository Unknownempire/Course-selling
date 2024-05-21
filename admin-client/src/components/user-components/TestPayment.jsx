import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import {Loading} from "./Loading.jsx";
import { BASE_URL } from "../../config.js";
import {useNavigate} from "react-router-dom";
import { courseState } from "../../store/atoms/course.js";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { courseTitle, coursePrice, isCourseLoading, courseImage, courseDetails } from "../../store/selectors/course.js";
import InputMask from 'react-input-mask';
// import SimpleAlert from "./SimpleAlert.jsx";

function TestPayment() {
    let { courseId } = useParams();
    const setCourse = useSetRecoilState(courseState);
    const course = useRecoilValue(courseState)
    const courseLoading = useRecoilValue(isCourseLoading);

    useEffect(() => {
        axios.get(`${BASE_URL}/admin/course/${courseId}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            // setCourse({isLoading: false, course: res.data.course});
             setCourse(prevState => ({...prevState, isLoading: false, course: res.data.course}));
            // console.log(res.data.course);
        })
        .catch(e => {
             setCourse(prevState => ({...prevState, isLoading: false, course: res.data.course}));
            // setCourse({isLoading: false, course: null});
        })
        console.log({BASE_URL});
    }, []);
    // console.log('courseid = ' + courseId);

    if (courseLoading) {
        return <Loading />
    } else {
        return <div>
            <GrayTopper />
            <Grid container>
                <Grid item lg={8} md={12} sm={12}>
                    <CreditDetails courseId={courseId}/>
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <CourseCard />
                </Grid>
            </Grid>
        </div>
    }

}

function GrayTopper() {
    const title = useRecoilValue(courseTitle);
    return <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

function CreditDetails(courseId) {
    const [courseDetail, setCourse] = useRecoilState(courseState);
    const navigate = useNavigate();

    // const course_detail = useRecoilValue(courseDetails)
    const [name, setName] = useState('');
    const [creditNumber, setCreditNumber] = useState('');
    const [expirydate, setExpiryDate] = useState('');
    const [Cvv, setCvv] = useState('');
    // console.log("name : " + name );
    // console.log("cardNumber : " + creditNumber );
    // console.log("expiryDate : " + expirydate );
    // console.log("cvv : " + Cvv );
    console.log(courseId.courseId); // parsed as an object

    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{maxWidth: 600, marginTop: 200}}>
        <div style={{padding: 20}}>
            <Typography variant={'h5'} fontStyle={'italic'} style={{marginBottom: 10}} color={"#3d8de8"}> Credit Card Details 💸</Typography>
            <TextField
                // value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                fullWidth={true}
                label="Name on Card"
                variant="outlined"
            />

            <TextField
                // value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setCreditNumber(e.target.value)
                }}
                fullWidth={true}
                label="Credit Card Number"
                variant="outlined"
            />

            {/* <TextField
                // value={}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setExpiryDate(e.target.value)
                }}
                fullWidth={true}
                label="Expiry Date"
                variant="outlined"
            /> */}
                <InputMask
                    mask="99/99"
                    value={expirydate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maskChar={null}
                >
                    {(inputProps) => (
                        <TextField
                            {...inputProps}
                            style={{ marginBottom: 10 }}
                            fullWidth
                            label="Expiry Date"
                            variant="outlined"
                        />
                    )}
                </InputMask>

            <TextField
                // value={image}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setCvv(e.target.value)
                }}
                fullWidth={true}
                label="CVV"
                variant="outlined"
            />
                <Button
                    variant="contained"
                    onClick={async () => {
                        console.log("name : " + name);
                        console.log("cardNumber : " + creditNumber);
                        console.log("expiryDate : " + expirydate);
                        console.log("cvv : " + Cvv);
                        // this api not working instead simple payment one is invoked i don't know how?
                        const response = await axios.post(`${BASE_URL}/user/courses/Test/` + String(courseId.courseId), {
                                username: name,
                                cardNumber: creditNumber,
                                expiryDate: expirydate,
                                cvv: Cvv,
                            }, {
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            });

                        //api for changing the attemptNumber to 0;
                        const data = response.data;
                        const payment = data.payment;
                        if(payment) {
                            const courseId = localStorage.getItem('courseid');
                            const response = await axios.get(`${BASE_URL}/user/learn/` + String(courseId), {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('token')}`
                                }
                            })
                            const route = response.data.message
                            console.log(route);
                            navigate(`/course/${route}/Test`);
                        }
                        console.log(response.data);
                    }}
                > Pay For Test</Button>
        </div>
    </Card>
</div>
}

function CourseCard(props) {
    const title = useRecoilValue(courseTitle);
    const imageLink = useRecoilValue(courseImage);

    return <div style={{display: "flex",  marginTop: 50, justifyContent: "center", width: "100%"}}>
     <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2
    }}>
        <img src={imageLink} style={{width: 350}} ></img>
        <div style={{marginLeft: 10}}>
            <Typography variant="h5">{title}</Typography>
            <Price />
        </div>
    </Card>
    </div>
}

function Price() {

    const price = useRecoilValue(coursePrice);
    return <>
        <Typography variant="subtitle2" style={{color: "gray"}}>
            Price
        </Typography>
        <Typography variant="subtitle1">
            <b>Rs {400} </b>
        </Typography>
    </>
}

export default TestPayment;