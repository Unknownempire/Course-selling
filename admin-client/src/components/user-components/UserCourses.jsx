import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../../config.js";
import  Loading  from "./Loading.jsx";
import axios from "axios";

function UserCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);


    const init = async () => {
        const response = await axios.get(`${BASE_URL}/user/purchasedCourses/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(response.data.purchasedCourses);

        setCourses(response.data.purchasedCourses);
        setLoading(false);
    }

    useEffect(() => {
        init();
    }, []);
    
    if(loading) {
        return <Loading></Loading>
    } else {

        if (courses.length !== 0) {

            return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {courses && courses.map(course => {
                    return <Course course={course} />
                }
                )}
            </div>
        } else {
            return (
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height: '100%',
            }}>
                {/* <Typography variant="h4">¯_(ツ)_/¯</Typography> */}
                <Typography variant="h4">😢💔</Typography>
                <Typography variant="h4"></Typography>
                <Typography variant="h6">Emptiness</Typography>
                <image src=""></image>
            </div>
        )

        }
    }
}

export function Course({ course }) {
    const navigate = useNavigate();


    return (<Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            // border:'2px solid red',
            padding:20,
        }}>
        {/* <img src={course.imageLink} style={{width: 300}} ></img> */}
        <img src={course.imageLink} style={{
            width: 300,
            height: 200,
            marginBottom: '20px',
        }} ></img>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" color="success" onClick={async() => {
                // navigate("/course/" + 'BlockChainBeginner');
                console.log(course._id);
                const response = await axios.get(`${BASE_URL}/user/learn/` + String(course._id), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                // console.log(localStorage.getItem('token'));
                const route = response.data.message
                // alert('route ' + route);
                localStorage.setItem('courseid', course._id);
                // const courseId = localStorage.getItem('courseid');
                // const resAttempt = await axios.get(`${BASE_URL}/user/learn/${courseId}/attempt`, {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem('token')}`
                //     }
                // });

                // console.log(resAttempt);
                
                navigate("/course/" + route);
            }}>Learn</Button>
        </div>
    </Card>)

}

export default UserCourses;