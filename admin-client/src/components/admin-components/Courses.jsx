import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { BASE_URL } from "../../config.js";
import { isadminState } from "../../store/atoms/isadmin.js";
import {Loading} from "./Loading.jsx";
import axios from "axios";
import { courseState } from "../../store/atoms/course.js";
import { courseTitle } from "../../store/selectors/course.js";

function Courses() {
    const [courses, setCourses] = useState([]);
    const isAdmin = useRecoilValue(isadminState);
    const [purchased,setPurchased] = useState([]);
    const [loading, setLoading] = useState(true); // till the time page is loading

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/admin/courses/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setCourses(response.data.courses)

        if(!isAdmin) {
            const purchased_response = await axios.get(`${BASE_URL}/user/purchasedCourses/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setPurchased(purchased_response.data.purchasedCourses);
        }
        setLoading(false);
    }

    let purchased_courses_set = new Set();
    for(let i = 0; i < purchased.length; ++i) {
        purchased_courses_set.add(purchased[i]._id);
    }

    useEffect(() => {
        init();
    }, []);
    if(loading) {
        return <Loading></Loading>
    } else {

    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {courses.map(course => {
            let purchased = 0;
            if(purchased_courses_set.has(course._id)) {
                purchased = 1;
            } else {
                purchased = 0;
            }
            return <Course course={course} purchased={purchased}/>
        }
        )}
    </div>
    }
}

export function Course({ course, purchased }) {
    const navigate = useNavigate();
    const isAdmin = useRecoilValue(isadminState);
    // const [courses, setCourse]= useRecoilState(courseState);
    // const title = useRecoilValue(courseTitle);
    



    // console.log(title)
    // const [purchasedCourses, setPurchasedCourses] = useState([])

    // if (!isAdmin) {
    //     const init = async () => {
    //         const response = await axios.get(`${BASE_URL}/user/purchasedCourses/`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         // console.log(response.data.purchasedCourses);

    //         setPurchasedCourses(response.data.purchasedCourses);
    //     }
    //     for (let i = 0; i < purchasedCourses.length; ++i) {
    //         if (purchasedCourses[i]._id === course._id) {
    //             purchased = 1;
    //         }
    //     }

    //     useEffect(() => {
    //         init();
    //     }, []);

    // }

    return <Card style={{
        margin: 10,
        width: 300,
        // minHeight: 200,
        height: 400,
        padding: 20,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border:'2px solid red',
            // padding: 20,
        }}>
            <img src={course.imageLink} style={{
                minWidth: 200,
                height: 200,
                // marginBottom: '20px',
            }} ></img>
        </div>
        <div style={{
            // position: 'absolute',
            // bottom: 10, // Adjust as needed
            // left: 0,
            // right: 0,
            // textAlign: 'center'
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
            }}>
                {isAdmin ? (
                    <Button variant="contained" size="large" onClick={async() => {
                        // navigate("/course/" + course._id);
                            const response = await axios.get(`${BASE_URL}/user/learn/` + String(course._id), {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('token')}`
                                }
                            })
                                    const route = response.data.message
                                    localStorage.setItem('courseid', course._id);
                                    // const courseId = localStorage.getItem('courseid');
                                    // const resAttempt = await axios.get(`${BASE_URL}/user/learn/${courseId}/attempt`, {
                                    //     headers: {
                                    //         Authorization: `Bearer ${localStorage.getItem('token')}`
                                    //     }
                                    // });

                                    // console.log(resAttempt);

                                //    await setCourse({
                                //         isLoading: false,
                                //         course: {'title': course.title},
                                //     })
                                //     console.log(courses);
                                //     console.log('title = ',courses.title);

                                    navigate("/course/" + route);
                                    // alert('route ' + route);
                                    // navigate("/course/" + route);
                            // console.log(course._id);
                        // alert("Contents Coming Soon..")
                    }}>View</Button>
                ) : (
                    purchased === 0 ? (
                        <Button variant="contained" size="large" onClick={async () => {
                            const courseId = course._id;
                            navigate("/payment/" + courseId);
                        }}>₹ {course.price}</Button>
                    ) : (
                        <Button variant="contained" color="success" size="large" onClick={async () => {
                            const response = await axios.get(`${BASE_URL}/user/learn/` + String(course._id), {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem('token')}`
                                }
                            })
                                    const route = response.data.message
                                    localStorage.setItem('courseid', course._id);
                                    // const courseId = localStorage.getItem('courseid');
                                    // const resAttempt = await axios.get(`${BASE_URL}/user/learn/${courseId}/attempt`, {
                                    //     headers: {
                                    //         Authorization: `Bearer ${localStorage.getItem('token')}`
                                    //     }
                                    // });

                                    // console.log(resAttempt);

                                //    await setCourse({
                                //         isLoading: false,
                                //         course: {'title': course.title},
                                //     })
                                //     console.log(courses);
                                //     console.log('title = ',courses.title);

                                    navigate("/course/" + route);
                                    // alert('route ' + route);
                                    // navigate("/course/" + route);
                            // console.log(course._id);
                        }}>View</Button>
                    )
                )}
            </div>
        </div>
    </Card>

}

export default Courses;