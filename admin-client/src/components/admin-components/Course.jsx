import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import {Loading} from "./Loading.jsx";
import { BASE_URL } from "../../config.js";
import { courseState } from "../../store/atoms/course.js";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { courseTitle, coursePrice, isCourseLoading, courseImage, courseDetails } from "../../store/selectors/course.js";

function Course() {
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
    }, []);

    if (courseLoading) {
        return <Loading />
    } else {
        return <div>
            <GrayTopper />
            <Grid container>
                <Grid item lg={8} md={12} sm={12}>
                    <UpdateCard />
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

function UpdateCard() {
    const [courseDetail, setCourse] = useRecoilState(courseState);
    const [title, setTitle] = useState(courseDetail.course.title);
    const [description, setDescription] = useState(courseDetail.course.description);
    const [image, setImage] = useState(courseDetail.course.imageLink);
    const [price, setPrice] = useState(courseDetail.course.price);

    useEffect(() => {
        setTitle(courseDetail.course.title);
        setDescription(courseDetail.course.description);
        setImage(courseDetail.course.imageLink);
        setPrice(courseDetail.course.price);
    },[courseDetail])

    const course_detail = useRecoilValue(courseDetails)

    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{maxWidth: 600, marginTop: 200}}>
        <div style={{padding: 20}}>
            <Typography style={{marginBottom: 10}}>Update course details</Typography>
            <TextField
                value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label="Title"
                variant="outlined"
            />

            <TextField
                value={description}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label="Description"
                variant="outlined"
            />

            <TextField
                value={image}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                fullWidth={true}
                label="Image link"
                variant="outlined"
            />
            <TextField
                value={price}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                fullWidth={true}
                label="Price"
                variant="outlined"
            />

            <Button
                variant="contained"
                onClick={async () => {
                    axios.put(`${BASE_URL}/admin/courses/` + course_detail._id, {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true,
                        price
                    }, {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    });
                    let updatedCourse = {
                        _id: course_detail._id,
                        title: title,
                        description: description,
                        imageLink: image,
                        price
                    };
                    setCourse({course: updatedCourse, isLoading: false});
                }}
            > Update course</Button>
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
            <b>Rs {price} </b>
        </Typography>
    </>
}

export default Course;