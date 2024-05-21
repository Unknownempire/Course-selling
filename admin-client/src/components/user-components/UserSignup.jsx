import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../config.js";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userState} from "../../store/atoms/user.js";

function UserSignup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate()
    const setUser = useSetRecoilState(userState);

    // email validation
    const validateEmail = (email) => {
        // Check if email contains "@" and ends with ".com"
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email) && email.includes('@') && email.endsWith('.com');
    };

    // password validation
    const validatePassword = (password) => {
        // Password must be at least 8 characters, contain at least one uppercase letter,
        // one lowercase letter, one numeric digit, and one alphanumeric symbol
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return re.test(password);
    };

    const handleSubmit = (event,em,pass) => {
        event.preventDefault();
    // const newErrors = {};
        if(!validateEmail(em)) {
            alert('Email must contain @ and end with .com');
            return false;
        }
        if(!validatePassword(pass)) {
            alert('Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one alphanumeric symbol')
            return false;
        // Password must be at least 8 characters, contain at least one uppercase letter,
        // one lowercase letter, one numeric digit, and one alphanumeric symbol
        }
        return true;

    }
    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(event) => {
                        setFullName(event.target.value);
                    }}
                    fullWidth={true}
                    label="FullName"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async(event) => {
                        const valid = handleSubmit(event, email, password);
                        if (valid) {
                            try {
                                const response = await axios.post(`${BASE_URL}/user/signup`, {
                                    username: email,
                                    password: password,
                                    fullName: fullName
                                });
                                const data = response.data;
                                console.log('data = ', data);
                                localStorage.setItem("token", data.token);
                                setUser({ userEmail: email, isLoading: false, userFullName: fullName })
                                navigate("/courses")
                            } catch (error) {
                                if (error.response && error.response.status === 411) {
                                    // Handle validation errors
                                    // const validationErrors = error.response.data.errors;
                                    const validationErrors = error.response.data.error.issues;
                                    // console.log(validationErrors[0].path[0]);
                                    validationErrors.forEach(element => {
                                        // console.log(element.path[0])
                                        const problem = element.path[0];
                                        if (element.code === 'too_small' || "too_big") {
                                            // alert(problem + " is " + element.code + " minimum length should be " + element.minimum + " and maximum length can be " + element.maximum );
                                            alert(problem + " : " + element.message);
                                        } else {
                                            // alert(problem + " should be of type " + element.type);
                                            alert(problem + " : " + element.message);
                                        }
                                    });
                                    // Display validation errors to the user
                                    console.log("Validation errors:", validationErrors);
                                    // Update your UI to show the validation errors to the user
                                } else {
                                    // Handle other types of errors (e.g., server errors)
                                    console.error("An error occurred:", error.message);
                                    // Display a generic error message to the user
                                    // Update your UI to inform the user about the error
                                }
                            }
                        }
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default UserSignup;