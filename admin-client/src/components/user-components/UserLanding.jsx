import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useRecoilValue,useSetRecoilState} from "recoil";
import { userEmailState } from "../../store/selectors/userEmail.js"
import {isUserLoading} from "../../store/selectors/isUserLoading.js";
import {isadminState} from "../../store/atoms/isadmin.js"

export const UserLanding = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    const setIsAdmin = useSetRecoilState(isadminState)
    const isAdmin = useRecoilValue(isadminState)
    return <div>
        <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera User
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>
                    {!userLoading && !userEmail && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                color={"success"}
                                onClick={() => {
                                    setIsAdmin(true);
                                    navigate("/")
                                    // window.location = "/"
                                    if(isAdmin) {
                                        console.log('Admin');
                                    } else {
                                        console.log('User');
                                    }
                                }}
                            >Switch to Admin</Button>
                        </div>
                        {/* <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Signin</Button>
                        </div> */}
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                {/* <img src={"/class.jpeg"} width={"100%"} /> */}
                <img src={"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/e80434394ca08796a7fb9303a331720a.png?auto=format%2Ccompress&dpr=1&w=383&h=345.1827731092437"} width={"80%"} />
            </Grid>
        </Grid>
    </div>
}