import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../../config.js";
import axios from "axios";

function UserCourses() {
    const [courses, setCourses] = useState([]);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/user/purchasedCourses/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(response.data.purchasedCourses);

        setCourses(response.data.purchasedCourses);
    }

    useEffect(() => {
        init();
    }, []);

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses && courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

export function Course({course}) {
    const navigate = useNavigate();

    return <Card style={{
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
    </Card>

}

export default UserCourses;