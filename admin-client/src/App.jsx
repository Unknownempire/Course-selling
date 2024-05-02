import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/admin-components/Signin.jsx";
import Signup from "./components/admin-components/Signup.jsx";
import Appbar from "./components/admin-components/Appbar.jsx";
import AddCourse from "./components/admin-components/AddCourse.jsx";
import Courses from "./components/admin-components/Courses.jsx";
import Course from "./components/admin-components/Course.jsx";
import {Landing}from "./components/admin-components/Landing.jsx";
import PublishedCourses from './components/admin-components/PublishedCourses.jsx';
import Payment from './components/user-components/Payment.jsx';
import TestPayment from './components/user-components/TestPayment.jsx';
// import BlockChainRoutes from './components/Routes/BlockChainRoutes/BlockChainRoutes.jsx';
// import UserLanding from "./components/user-components/UserLanding.jsx";
import UserSignup from "./components/user-components/UserSignup.jsx";
import UserSignin from "./components/user-components/UserSignin.jsx";
import UserCourses from "./components/user-components/UserCourses.jsx";
import {UserLanding} from "./components/user-components/UserLanding.jsx";
import { userState } from "./store/atoms/user.js";
//Content
import BlockChainContent from './components/Courses-components/BlockChain/BlockChainContent.jsx';
import VueContent from './components/Courses-components/Vue/VueContent.jsx'
import FrontendEndDevContent from './components/Courses-components/FrontendDev/FrontendDevContent.jsx';
import CloudComputingContent from './components/Courses-components/CloudComputing/CloudComputingContent.jsx'

//Test
import FrontendTestPage from './components/Courses-components/FrontendDev/FrontendTest.jsx';
import VueTestPage from './components/Courses-components/Vue/VueTest.jsx';
import BlockChainTestPage from './components/Courses-components/BlockChain/BlockchainTest.jsx';
import CourseTest from './components/Courses-components/CourseTest.jsx';

//Result
import Results from './components/user-components/Results.jsx';

import {
    RecoilRoot,
    useSetRecoilState
} from 'recoil';
import axios from "axios";
import {BASE_URL} from "./config.js";
import {useEffect} from "react";
function App() {
    return (
        <RecoilRoot>
            <div style={{width: "100%",
                height: "100vh",
                backgroundColor: "#eeeeee"}}
            >
                    <Router>
                        <Appbar />
                        <InitUser />
                        <Routes>
                            <Route path={"/addcourse"} element={<AddCourse />} />
                            <Route path={"/course/:courseId"} element={<Course />} />
                            <Route path={"/courses"} element={<Courses />} />
                            <Route path={"/publishedcourses"} element={<PublishedCourses />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                            {/* <Route path={"/addcourse"} element={<AddCourse />} /> */}
                            {/* <Route path={"/course/:courseId"} element={<Course />} /> */}
                            <Route path={"/purchasedcourses"} element={<UserCourses />} />
                            <Route path={"/usersignin"} element={<UserSignin />} />
                            <Route path={"/usersignup"} element={<UserSignup />} />
                            <Route path={"/user"} element={<UserLanding />} />
                            <Route path={"/payment/:courseId"} element={<Payment />} />
                            {/* Test Repayment */}
                            <Route path={"/repayment/:courseId"} element={<TestPayment />} />

                            {/* <BlockChainRoutes/> */}
                            {/* <Route path={"/course/BlockChain%20for%20Beginner"} element={<BlockChainContent />} /> */}
                            <Route path={"/course/BlockChainforBeginner"} element={<BlockChainContent />} />
                            <Route path={"/course/Vue"} element={<VueContent />} />
                            <Route path={"/course/FrontendDev"} element={<FrontendEndDevContent />} />
                            <Route path={"/course/CloudComputing"} element={<CloudComputingContent />} />
                            {/* Test */}
                            <Route path={"/course/FrontendDev/Test"} element={<CourseTest />} />
                            <Route path={"/course/CloudComputing"} element={<CourseTest />} />
                            <Route path={"/course/BlockChainforBeginner/Test"} element={<CourseTest />} />
                            <Route path={"/course/Vue/Test"} element={<CourseTest />} />
                            {/* <Route path={"/course/CloudComputing"} element={<CourseTest />} /> */}
                            {/* <Route path={"/course/FrontendDev/Test"} element={<FrontendTestPage />} /> */}
                            {/* <Route path={"/course/Vue/Test"} element={<VueTestPage />} /> */}
                            {/* <Route path={"/course/BlockChainforBeginner/Test"} element={<BlockChainTestPage />} /> */}
                            {/* Results */}
                            <Route path={"/course/learn/result"} element={<Results></Results>} />

                        </Routes>
                    </Router>
            </div>
        </RecoilRoot>
    );
}


function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {

            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <></>
}

export default App;