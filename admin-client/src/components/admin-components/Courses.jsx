import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { BASE_URL } from "../../config.js";
import { isadminState } from "../../store/atoms/isadmin.js";
import axios from "axios";

function Courses() {
    const [courses, setCourses] = useState([]);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/admin/courses/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setCourses(response.data.courses)
    }

    useEffect(() => {
        init();
    }, []);

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

export function Course({course}) {
    const navigate = useNavigate();
    const isAdmin = useRecoilValue(isadminState);

    // if(isAdmin) {
    //     console.log('We are the Admin');
    // } else {
    //     console.log('We are the user');
    // }

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            {/* <Button variant="contained" size="large" onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button> */}

            {isAdmin ? (
                <Button variant="contained" size="large" onClick={() => {
                    // navigate("/course/" + course._id);
                    alert("Contents Coming Soon..")
                }}>View</Button>
             ) : (
                <Button variant="contained" size="large" onClick={async() => {
                    const courseId = course._id;
                    // console.log(courseId);
                    // try {
                    //     // console.log('Sending Request')
                    //     await axios.post(`${BASE_URL}/user/courses/` + courseId, {}, {
                    //         headers: {
                    //             "Content-type": "application/json",
                    //             "Authorization": "Bearer " + localStorage.getItem("token")
                    //         }
                    //     });
                    //     alert("Course Purchased!");
                    // } catch (error) {
                    //     console.error("Error occurred while purchasing course:", error);
                    // }
                    navigate("/payment/" + courseId);
                }}>Purchase</Button>
            )}
        </div>
    </Card>

}

export default Courses;