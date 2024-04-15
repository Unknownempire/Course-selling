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
    const navigate = useNavigate()
    const setUser = useSetRecoilState(userState);

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
                    onClick={async() => {
                        try {
                            const response = await axios.post(`${BASE_URL}/user/signup`, {
                                username: email,
                                password: password
                            });
                            const data = response.data;
                            localStorage.setItem("token", data.token);
                            setUser({ userEmail: email, isLoading: false })
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
                                    if(element.code === 'too_small' || "too_big") {
                                        // alert(problem + " is " + element.code + " minimum length should be " + element.minimum + " and maximum length can be " + element.maximum );
                                        alert(problem + " : " + element.message );
                                    } else {
                                        // alert(problem + " should be of type " + element.type);
                                        alert(problem + " : " + element.message );
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
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default UserSignup;