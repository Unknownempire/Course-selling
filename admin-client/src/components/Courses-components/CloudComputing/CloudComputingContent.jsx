import React, { useState } from 'react';
import { Box, Container, Divider, Typography, Stack, Pagination, Card, Tab, Grid, Paper,List,ListItem,ListItemText,CardContent } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../config';


export default function CloudComputingContent() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    }

    const renderComponent = () => {
        switch (currentPage) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            case 3:
                return <Page3 />;
            case 4:
                return <Page4 />;

            default:
                return null;
        }
    };

    return (
        <div style={{
            margin: '0',
            padding: '0',
            // border:'2px solid green',
            maxWidth: '100vw',
            display: 'flex'
        }}>
            <Container fixed maxWidth='xl' sx={{
                // border:"2px solid purple",
                width: '70%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    padding: "1rem",
                    width: '70%',
                    // border:'2px solid red',
                    // display:'flex',
                    // flexDirection:'column',
                    // justifyContent:'center',
                }}>
                    {renderComponent()}
                </Box>
                {/* <Stack spacing={2} sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: '1rem',
                marginTop:'2rem',
                border:'2px solid yellow'

            }}> */}
                <Pagination count={4} color='primary' shape="rounded" page={currentPage} onChange={handleChange} style={{
                    position: 'fixed',
                    bottom: '0.5rem',
                    backdropFilter: 'blur(2px)',
                    padding: '3px',
                    // border: '2px solid yellow',
                }} />
                {/* </Stack> */}

            </Container>
            <div style={{
                position: 'fixed',
                right: '1rem',
            }}>
                <ContentTable setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

function Page1() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Box mt={3}>
                    <Typography variant="h4" gutterBottom>
                        Introduction to Cloud Computing
                    </Typography>
                    <Typography paragraph>
                        Cloud computing is a transformative technology that has revolutionized the way businesses and individuals access, store, and manage data and applications. By leveraging the power of remote servers and networks, cloud computing enables users to access computing resources over the internet, without the need for physical hardware or infrastructure.
                    </Typography>
                    <Typography paragraph>
                        In today's fast-paced and digitally-driven world, cloud computing has become essential for organizations of all sizes and across various industries. It offers scalability, flexibility, cost savings, and agility, allowing businesses to adapt quickly to changing market conditions and scale their operations as needed.
                    </Typography>
                    <Typography paragraph>
                        With cloud computing, users can access a wide range of services, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS), all delivered over the internet on a pay-as-you-go basis. This flexibility and on-demand access to computing resources have transformed the way businesses operate and innovate.
                    </Typography>
                    <Typography paragraph>
                        In this course, we will explore the fundamentals of cloud computing, including its underlying principles, key concepts, types of cloud services, deployment models, and best practices for leveraging cloud technologies effectively. Whether you are an aspiring IT professional, business owner, or technology enthusiast, this course will provide you with the knowledge and skills needed to harness the power of cloud computing and drive innovation in your organization.
                    </Typography>
                </Box>


                    <Box mt={3}>
                        <Typography variant="h5" gutterBottom>
                            Types of Cloud Services
                        </Typography>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{
                                p: 2,
                                boxShadow: '0 0px 5px #1565c0', // Adjust shadow properties as needed
                                padding: '1rem', // Add padding to create space around the content

                            }}>
                                    <Typography variant="subtitle1">Infrastructure as a Service (IaaS)</Typography>
                                    <Typography paragraph>
                                        IaaS provides virtualized computing resources over the internet, allowing users to rent servers, storage, and networking infrastructure on a pay-as-you-go basis.
                                    </Typography>
                                    <Typography variant="subtitle1">Platform as a Service (PaaS)</Typography>
                                    <Typography paragraph>
                                        PaaS offers a development platform that allows developers to build, deploy, and manage applications without worrying about underlying infrastructure.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <Paper sx={{
                                p: 2,
                                boxShadow: '0 0px 5px #1565c0', // Adjust shadow properties as needed
                                padding: '1rem', // Add padding to create space around the content

                            }}>
                                    <Typography variant="subtitle1">Software as a Service (SaaS)</Typography>
                                    <Typography paragraph>
                                        SaaS delivers software applications over the internet on a subscription basis. Users can access these applications through a web browser without the need for installation or maintenance.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box mt={3}>
                        <Typography variant="h5" gutterBottom>
                            Benefits of Cloud Computing
                        </Typography>
                        <Typography paragraph>
                            Cloud computing offers several benefits to businesses and individuals, including scalability, flexibility, cost savings, and reliability.
                        </Typography>
                    </Box>

                    <Box mt={3}>
                        <Typography variant="h4" gutterBottom>
                            Cloud Deployment Models
                        </Typography>
                        <Typography paragraph>
                            There are several deployment models for cloud computing, each offering unique advantages and use cases:
                        </Typography>
                        <Typography variant="subtitle1">1. Public Cloud</Typography>
                        <Typography paragraph>
                            Public cloud services are provided by third-party vendors and accessible to multiple users over the internet.
                        </Typography>
                        <Typography variant="subtitle1">2. Private Cloud</Typography>
                        <Typography paragraph>
                            Private cloud environments are dedicated to a single organization and offer enhanced security and control over resources.
                        </Typography>
                        <Typography variant="subtitle1">3. Hybrid Cloud</Typography>
                        <Typography paragraph>
                            Hybrid cloud combines public and private cloud resources, allowing organizations to leverage the benefits of both deployment models.
                        </Typography>
                    </Box>
            </Card>
        </>
    )

}

function Page2() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            Exploring Cloud Computing Services
                        </Typography>
                        <Paper sx={{ p: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', background: '#f5f5f5' }}>
                            <Typography paragraph sx={{ marginBottom: '1rem' }}>
                                Cloud computing offers a wide range of services to meet the diverse needs of businesses and organizations.
                                Let's explore some of the popular cloud computing services available today:
                            </Typography>
                            <List>
                                <ListItem disablePadding sx={{ marginBottom: '1rem', background: '#ffffff', borderRadius: '0.5rem' }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                Infrastructure as a Service (IaaS)
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography paragraph>
                                                IaaS provides virtualized computing resources over the internet. It offers scalable and flexible
                                                infrastructure components such as virtual machines, storage, and networking, allowing users to
                                                deploy and manage their own applications and services.
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ marginBottom: '1rem', background: '#ffffff', borderRadius: '0.5rem' }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                Platform as a Service (PaaS)
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography paragraph>
                                                PaaS offers a complete development and deployment environment in the cloud. It provides tools,
                                                frameworks, and services to streamline the development, testing, and deployment of applications,
                                                allowing developers to focus on coding without worrying about infrastructure management.
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ marginBottom: '1rem', background: '#ffffff', borderRadius: '0.5rem' }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                Software as a Service (SaaS)
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography paragraph>
                                                SaaS delivers software applications over the internet on a subscription basis. Users can access
                                                and use the software through web browsers without the need for installation or maintenance.
                                                Popular examples include email services, office productivity suites, and customer relationship
                                                management (CRM) software.
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding sx={{ marginBottom: '1rem', background: '#ffffff', borderRadius: '0.5rem' }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                Function as a Service (FaaS)
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography paragraph>
                                                FaaS, also known as serverless computing, enables developers to execute code in response to
                                                events without managing server infrastructure. It abstracts away the underlying infrastructure
                                                and allows developers to focus on writing code for specific functions or tasks, making it ideal
                                                for event-driven applications and microservices architectures.
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
        </>
    )

}
function Page3() {
    return (
        <div>
            <Card sx={{
                padding: '1rem'
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            Cloud Security Best Practices
                        </Typography>
                        <Paper sx={{ p: 3, borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f5f5f5' }}>
                            <Typography paragraph>
                                Ensuring the security of your cloud computing environment is essential for protecting sensitive data
                                and maintaining compliance with industry regulations. Here are some best practices for cloud security:
                            </Typography>
                            <ul>
                                <li>Implement strong access controls and authentication mechanisms to prevent unauthorized access to your cloud resources.</li>
                                <li>Encrypt data both at rest and in transit to protect it from unauthorized access or interception.</li>
                                <li>Regularly monitor and audit your cloud environment for security threats and vulnerabilities.</li>
                                <li>Use multi-factor authentication (MFA) to add an extra layer of security for user logins.</li>
                                <li>Keep your cloud infrastructure and applications up to date with the latest security patches and updates.</li>
                                <li>Backup your data regularly and test your disaster recovery plan to ensure business continuity in case of a security incident.</li>
                                <li>Train your employees on cloud security best practices and raise awareness about the importance of cybersecurity.</li>
                            </ul>
                            <Typography paragraph>
                                Additionally, it's crucial to consider the shared responsibility model when it comes to cloud security.
                                While cloud service providers (CSPs) are responsible for securing the underlying infrastructure, customers are
                                responsible for securing their data and applications in the cloud. By following these best practices and
                                understanding your role in the shared responsibility model, you can enhance the security of your cloud environment
                                and mitigate the risk of data breaches and cyber attacks.
                            </Typography>
                            <Typography paragraph>
                                Remember, cloud security is an ongoing process, and it requires constant vigilance and adaptation to new
                                threats and vulnerabilities. By staying informed about the latest security trends and leveraging the
                                capabilities of your cloud provider, you can effectively protect your organization's assets and maintain
                                the integrity of your cloud infrastructure.
                            </Typography>
                            <Divider></Divider>
                            <br />
                            <Typography variant="h5" gutterBottom>
                                Cloud Cost Management Best Practices
                            </Typography>
                            <Typography paragraph>
                                In addition to security, effective cost management is crucial for optimizing your cloud computing
                                resources and controlling expenses. Here are some best practices for managing cloud costs:
                            </Typography>
                            <ul>
                                <li>Monitor resource usage and identify opportunities for optimization, such as rightsizing instances or eliminating unused resources.</li>
                                <li>Set up budget alerts to notify you when spending exceeds predefined thresholds, allowing you to take corrective action.</li>
                                <li>Leverage reserved instances or savings plans to benefit from discounts on long-term commitments for compute capacity.</li>
                                <li>Implement tagging strategies to categorize resources and track costs by project, department, or application.</li>
                                <li>Use cost allocation reports to allocate expenses accurately and identify areas where costs can be optimized.</li>
                                <li>Regularly review and adjust your cloud usage based on business requirements and changing workload demands.</li>
                            </ul>
                            <Typography paragraph>
                                By following these cloud cost management best practices, you can optimize your cloud spending and ensure
                                that you're getting the most value out of your cloud investment.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );

}
function Page4() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Container maxWidth="md" >
                    <Typography variant="h4" paragraph>
                        Case Studies and Real-World Examples
                    </Typography>
                    <Card sx={{
                        marginBottom: '2rem',
                        p: 2,
                        boxShadow: '0 0px 5px #1565c0', // Adjust shadow properties as needed
                        padding: '1rem', // Add padding to create space around the content
                    }}>
                        <CardContent>
                            <Typography variant="h6" paragraph>
                                Case Study 1: Netflix
                            </Typography>
                            <Typography paragraph>
                                Overview: Netflix, the world's leading streaming entertainment service, has embraced cloud computing as a core component of its infrastructure strategy. By migrating its entire video streaming platform to the cloud, Netflix has achieved unprecedented scalability, flexibility, and cost-efficiency.
                            </Typography>
                            <Typography paragraph>
                                Details: Netflix utilizes a combination of cloud services such as Amazon Web Services (AWS) and Google Cloud Platform (GCP) to deliver its content globally. By leveraging cloud infrastructure, Netflix can dynamically scale its resources to handle fluctuations in demand, ensuring a seamless streaming experience for millions of users worldwide.
                            </Typography>
                            <Typography paragraph>
                                Key Benefits:
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Scalability: Netflix can scale its infrastructure up or down based on demand, allowing it to handle peak traffic without interruptions." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Flexibility: Cloud computing enables Netflix to experiment with new features and services quickly, driving innovation in the streaming industry." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Cost-Efficiency: By paying only for the resources they use, Netflix can optimize its infrastructure costs and allocate resources more effectively." />
                                    </ListItem>
                                </List>
                            </Typography>
                            <Divider />
                        </CardContent>
                    </Card>

                    <Card sx={{
                        marginBottom: '2rem',
                        p: 2,
                        boxShadow: '0 0px 5px #1565c0', // Adjust shadow properties as needed
                        padding: '1rem', // Add padding to create space around the content
                    }}>
                        <CardContent>
                            <Typography variant="h6" paragraph>
                                Case Study 2: Airbnb
                            </Typography>
                            <Typography paragraph>
                                Overview: Airbnb, the world's largest online marketplace for lodging and hospitality services, relies heavily on cloud computing to power its platform and support its global community of hosts and guests.
                            </Typography>
                            <Typography paragraph>
                                Details: Airbnb leverages cloud infrastructure to handle the massive amounts of data generated by its platform, including listings, bookings, and user interactions. By using cloud services like AWS and Azure, Airbnb can scale its platform globally while maintaining high availability and reliability.
                            </Typography>
                            <Typography paragraph>
                                Key Benefits:
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Global Scalability: Airbnb can expand its operations into new markets quickly, thanks to the scalability of cloud computing." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="High Availability: Cloud services ensure that Airbnb's platform remains available to users around the clock, minimizing downtime and disruptions." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Data Security: Cloud providers offer robust security measures to protect Airbnb's data against cyber threats and unauthorized access." />
                                    </ListItem>
                                </List>
                            </Typography>
                            <Divider />
                        </CardContent>
                    </Card>

                    {/* Add more case studies as needed */}
                    <Card sx={{
                        marginBottom: '2rem',
                        p: 2,
                        boxShadow: '0 0px 5px #1565c0', // Adjust shadow properties as needed
                        padding: '1rem', // Add padding to create space around the content
                    }}>
                        <CardContent>
                            <Typography variant="h6" paragraph>
                                Case Study 3: Spotify
                            </Typography>
                            <Typography paragraph>
                                Overview: Spotify, the world's leading music streaming service, relies on cloud computing to deliver personalized music experiences to millions of users worldwide.
                            </Typography>
                            <Typography paragraph>
                                Details: Spotify uses cloud infrastructure to store and stream a vast library of music content to its users. By leveraging cloud services like AWS and Google Cloud Platform, Spotify can handle the complexities of music licensing, content delivery, and user data management at scale.
                            </Typography>
                            <Typography paragraph>
                                Key Benefits:
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Personalization: Spotify's recommendation algorithms analyze user preferences and behavior to deliver personalized playlists and recommendations." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Scalability: Cloud computing allows Spotify to scale its infrastructure dynamically to accommodate spikes in user activity and demand." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Global Reach: Spotify's cloud-based platform enables it to reach users in over 90 countries, providing a seamless music streaming experience worldwide." />
                                    </ListItem>
                                </List>
                            </Typography>
                            <Divider />
                        </CardContent>
                    </Card>

                </Container>
            </Card>
        </>
    )

}

function ContentTable({ setCurrentPage }) {
    const navigate = useNavigate();
    return (
        <div>
            <aside>
                <Container fixed maxWidth="md">
                    <Card sx={{
                        padding: '1rem',
                    }}>
                        <Typography variant='h5' sx={{
                            marginBottom: '1rem',
                            textDecoration: 'underline'
                        }} >Table of Content</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(1)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Definition</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(2)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Examples</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(3)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Code</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(4)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Future</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={async () => {
                            const result = window.confirm('Do you want to attempt the test');
                            const courseId = localStorage.getItem('courseid')
                            if (result === true) {
                                const response = await axios.get(`${BASE_URL}/user/learn/Test/` + String(courseId),
                                    {
                                        headers: {
                                            "Content-type": "application/json",
                                            "Authorization": "Bearer " + localStorage.getItem("token")
                                        }

                                    })
                                if (response.data.attempts === 0) {
                                    navigate("Test");
                                } else {
                                    alert("Test already Attempted");
                                }
                            }
                            // if (result === true) {
                            //     const courseId = localStorage.getItem('courseid');
                            //     const resAttempt = await axios.get(`${BASE_URL}/user/learn/${courseId}/attempt`, {
                            //         headers: {
                            //             Authorization: `Bearer ${localStorage.getItem('token')}`
                            //         }
                            //     });

                            //     if (resAttempt.data.attemptNumber > 0) {
                            //         alert("Test already attempted..Pay to attempt again");
                            //     } else {
                            //         navigate("Test");
                            //     }
                            // }
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Test</Typography>
                    </Card>
                </Container>
            </aside>
        </div>
    );
}