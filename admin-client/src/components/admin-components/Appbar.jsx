import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { isUserLoading } from "../../store/selectors/isUserLoading.js";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../store/atoms/user.js";
import { userEmailState } from "../../store/selectors/userEmail.js"
import { isadminState } from "../../store/atoms/isadmin.js";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { useParams } from "react-router-dom";

function Appbar({ }) {
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);
    const [isAdmin,setIsAdmin] = useRecoilState(isadminState);
    
    const currentRoute = location.pathname;
    useEffect(() => {
        if(currentRoute === '/user') {
            setIsAdmin(false);
        }
    })

    if (userLoading) {
        return <></>
    }
    if (isAdmin) {

        if (userEmail) {
            return <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                    navigate("/")
                }}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                onClick={() => {
                                    navigate("/addcourse")
                                }}
                            >Add course</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button
                                onClick={() => {
                                    navigate("/publishedCourses")
                                }}
                            >Published Courses</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button
                                onClick={() => {
                                    navigate("/courses")
                                }}
                            >Courses</Button>
                        </div>

                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null);
                                setUser({
                                    isLoading: false,
                                    userEmail: null
                                })
                                navigate("/");
                            }}
                        >Logout</Button>
                    </div>
                </div>
            </div>
        } else {
            return <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                    navigate("/")
                }}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >Signup</Button>
                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signin")
                            }}
                        >Signin</Button>
                    </div>
                </div>
            </div>
        }
    } else {
        if (userEmail) {
            return <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                    navigate("/user")
                }}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                // onClick={() => {
                                //     navigate("/courses")
                                // }}
                            >{userEmail}</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button
                                onClick={() => {
                                    navigate("/purchasedcourses")
                                }}
                            >Purchased courses</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button
                                onClick={() => {
                                    navigate("/courses")
                                }}
                            >Courses</Button>
                        </div>

                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null);
                                setUser({
                                    isLoading: false,
                                    userEmail: null
                                })
                                navigate("/user")
                            }}
                        >Logout</Button>
                    </div>
                </div>
            </div>
        } else {
            return <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                    navigate("/user")
                }}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/usersignup")
                            }}
                        >Signup</Button>
                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/usersignin")
                            }}
                        >Signin</Button>
                    </div>
                </div>
            </div>
        }

    }
}

export default Appbar;