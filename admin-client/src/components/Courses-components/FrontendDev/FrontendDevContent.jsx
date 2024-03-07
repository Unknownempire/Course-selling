import React, { useState } from 'react';
import { Box, Container, Divider, Typography, Stack, Pagination, Card, Tab, List, ListItem, ListItemText } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function FrontendEndDevContent() {
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
                width: '75%',
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
                padding: '1rem',
                marginBottom: '1rem',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h4" paragraph="true">How To - Become Frontend Developer</Typography>
                    <img src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' />
                </div>
                <br />
                <div style={{ background: '#f0f0f0', padding: '20px' }}>
                    <Typography variant="body1" paragraph='true'>A Front-End Developer is someone who creates websites and web applications.</Typography>
                    <Typography variant="body1" paragraph='true'>The Front-End Developer creates things that the user sees.</Typography>
                    <Typography variant="body1" paragraph='true'>It is a popular job, and everyone can become a Front-End Developer.</Typography>
                </div>
                <br />
                <Divider />
                <br />
                <Typography variant="h4" paragraph='true'>Why become a Front-End Developer</Typography>
                <Typography variant="body1">It is fun and creative.</Typography>
                <Typography variant="body1">It is flexible - you can work from anywhere!</Typography>
                <Typography variant="body1">Many companies are looking for Front-End Developers.</Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h4" paragraph={true}>What does a Front-End Developer do</Typography>
                <Typography variant="body1">The main responsibility of a Front-End Developer is the User interface.</Typography>
                <Typography variant="body1">Simply put, create things that the user sees.</Typography>
                <br />
                <Typography variant="body1"><strong>Note:</strong> If you don't know what a Front-End Developer is, you can learn more about it in the What is a Front-End Developer tutorial.</Typography>
                <br />
                <Divider />
                <br />
                <div style={{ background: '#e6f7ff', padding: '1rem' }}>
                    <Typography variant="h5" paragraph={true}>Understanding Front-End and Back-End</Typography>
                    <Typography paragraph={true}>The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works.</Typography>
                    <Typography paragraph={true}>You can also think of Front-End as client-side and Back-End as server-side.</Typography>
                </div>
                <br />
                <Divider />
                <br />
                <Typography variant='h5' paragraph={true}>
                    Where do I start? HTML, CSS, and JavaScript are the basic languages you need to know to create a website.
                </Typography>
                <Typography paragraph={true}>
                    To become a Front-End Developer, start with the subjects below, in the following order:
                </Typography>
                <Typography paragraph={true}>
                    - HTML: Learn the structure and semantics of web pages.
                </Typography>
                <Typography paragraph={true}>
                    - CSS: Understand how to style and layout elements on a webpage.
                </Typography>
                <Typography paragraph={true}>
                    - JavaScript: Dive into programming and learn how to add interactivity to your website.
                </Typography>
                <Typography>
                    Remember, you have to code to learn how to code. Practice a lot!
                </Typography>
            </Card>
        </>
    )

}

function Page2() {
    return (
        <>
            <Card sx={{
                padding: '1rem',
                marginBottom: '1rem',
            }}>
                <Typography variant="h4" gutterBottom>Exploring Frontend Technologies</Typography>
                <Typography paragraph>
                    Congratulations on completing the basics of HTML, CSS, and JavaScript! Now, let's embark on an exciting journey to explore advanced frontend development concepts.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} style={{ padding: '2rem' }}
                            onMouseEnter={(e) => e.target.style.boxShadow = '0 0 5px #3895ff'}
                            onMouseLeave={(e) => e.target.style.boxShadow = ''}
                        >
                            <Typography variant="h5" gutterBottom>Frameworks and Libraries</Typography>
                            <Typography paragraph>
                                Discover popular frontend frameworks and libraries such as React, Vue.js, and Angular. Learn how to leverage these tools to build dynamic and interactive web applications with ease.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} style={{
                            padding: '2rem',
                            paddingBottom: '0.53rem',
                        }}
                            onMouseEnter={(e) => e.target.style.boxShadow = '0 0 5px #3895ff'}
                            onMouseLeave={(e) => e.target.style.boxShadow = ''}
                        >
                            <Typography variant="h5" gutterBottom>Responsive Design</Typography>
                            <Typography paragraph>
                                Dive into the principles of responsive web design and master the art of creating websites that seamlessly adapt to various screen sizes and devices. Enhance user experience across desktops, tablets, and smartphones.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} style={{
                            padding: '2rem',
                        }}
                            onMouseEnter={(e) => e.target.style.boxShadow = '0 0 5px #3895ff'}
                            onMouseLeave={(e) => e.target.style.boxShadow = ''}
                        >
                            <Typography variant="h5" gutterBottom>CSS Preprocessors</Typography>
                            <Typography paragraph>
                                Explore CSS preprocessors like Sass and Less to supercharge your styling workflow. Simplify complex stylesheets, manage variables, and create reusable components for efficient frontend development.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} style={{ padding: '2rem' }}
                            onMouseEnter={(e) => e.target.style.boxShadow = '0 0 5px #3895ff'}
                            onMouseLeave={(e) => e.target.style.boxShadow = ''}
                        >
                            <Typography variant="h5" gutterBottom>Version Control</Typography>
                            <Typography paragraph>
                                Learn the fundamentals of version control systems such as Git and GitHub. Collaborate seamlessly with other developers, track changes, and manage project versions effectively in a distributed development environment.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <br />
                <Divider />
                <br />
                <Typography variant="h4" gutterBottom>Basics of HTML</Typography>
                <Typography paragraph>
                    HTML (HyperText Markup Language) is the standard markup language for creating web pages.
                </Typography>
                <Typography paragraph>
                    In HTML, you use tags to define the structure and content of a webpage. Tags are enclosed in angle brackets, like <code>{`<tag>`}</code>. Each tag serves a specific purpose and can contain attributes that modify its behavior.
                </Typography>
                <Typography paragraph>
                    Here are some basic HTML tags and their functions:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="<html>: Defines the root of an HTML document." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<head>: Contains meta-information about the document, such as title, links to stylesheets, and scripts." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<body>: Contains the content of the document, including text, images, links, and other elements." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<h1> to <h6>: Heading tags for defining headings of different levels." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<p>: Defines a paragraph of text." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<a>: Defines a hyperlink, which links to another webpage or resource." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="<img>: Embeds an image in the document." />
                    </ListItem>
                </List>
                <Divider />
                <br />
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #e44d26',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'

                }}>
                    <code>
                        {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Frontend Development</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }
        main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #333;
        }
        p {
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <header>
        <h1>Introduction to Frontend Development</h1>
    </header>
    <main>
        <h2>HTML Basics</h2>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.
        It defines the structure and content of a webpage using tags.</p>
        <h3>Basic HTML Structure</h3>
        <p>A simple HTML document consists of the following elements:</p>
        <ul>
            <li><strong>DOCTYPE Declaration:</strong> Defines the document type and version of
             HTML.</li>
            <li><strong>HTML Element:</strong> The root element of the document.</li>
            <li><strong>Head Element:</strong> Contains meta-information about the document.</li>
            <li><strong>Body Element:</strong> Contains the visible content of the document.</li>
        </ul>
        <h3>HTML Tags</h3>
        <p>HTML tags are used to define the structure and content of a webpage. Here are some
         common HTML tags:</p>
        <ul>
            <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Heading tags</li>
            <li><code>&lt;p&gt;</code>: Paragraph tag</li>
            <li><code>&lt;a&gt;</code>: Anchor tag for links</li>
            <li><code>&lt;img&gt;</code>: Image tag</li>
            <!-- Add more tags as needed -->
        </ul>
    </main>
</body>
</html>`}
                    </code>
                </pre>
                <br />
            </Card>
        </>
    )

}
function Page3() {
    return (
        <div>
            <Card sx={{
                padding: '1rem',
                marginBottom: '1rem',
            }}>
                <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
                    <Typography variant="h4">Introduction to Frontend Development - CSS Fundamentals</Typography>
                </header>
                <Container style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
                    <Typography variant="h5" gutterBottom>CSS Fundamentals</Typography>
                    <Typography paragraph>
                        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML.
                        CSS allows you to control the layout, colors, fonts, and other visual aspects of your web pages.
                    </Typography>
                    <Typography variant="h6" gutterBottom>Basic Syntax</Typography>
                    <Typography paragraph>
                        CSS rules are composed of a selector and a declaration block. The selector identifies the HTML elements to which the styles will be applied,
                        while the declaration block contains one or more declarations separated by semicolons.
                    </Typography>
                    <pre>
                        <code>
                            {`
              selector {
                  property: value;
              }
            `}
                        </code>
                    </pre>
                    <Typography paragraph><strong>Selector:</strong> Specifies the HTML element(s) to which the style applies.</Typography>
                    <Typography paragraph><strong>Property:</strong> Specifies the style property to be modified (e.g., color, font-size, background-color).</Typography>
                    <Typography paragraph><strong>Value:</strong> Specifies the value of the property (e.g., blue, 16px, #fff).</Typography>
                    <Typography variant="h6" gutterBottom>CSS Units</Typography>
                    <Typography paragraph>
                        CSS supports various units of measurement for specifying sizes, including pixels (px), percentages (%), ems (em), and rems (rem).
                        Understanding these units is essential for creating responsive and scalable designs.
                    </Typography>
                    <Typography paragraph>
                        <strong>Pixel (px):</strong> A fixed unit of measurement, where 1px equals one device pixel.
                        Pixel values provide precise control over element sizes but may not scale well on different screen sizes.
                    </Typography>
                    <Typography paragraph>
                        <strong>Percentage (%):</strong> Represents a proportion of the parent element's size. For example, 50% width will occupy half the width of its parent.
                        Percentage values are useful for creating fluid layouts that adapt to different screen sizes.
                    </Typography>
                    <Typography paragraph>
                        <strong>Em (em):</strong> Relative unit based on the font-size of the parent element. One em is equal to the font size of the element.
                        Em values allow for more flexible and scalable designs, especially when working with text.
                    </Typography>
                    <Typography paragraph>
                        <strong>Rem (rem):</strong> Similar to em units but relative to the root element's font size (usually the <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).
                        Rem values provide consistent sizing across the entire document and are preferred for global layout settings.
                    </Typography>
                    <Typography variant="h6" gutterBottom>Box Model</Typography>
                    <Typography paragraph>
                        The CSS box model describes the layout of elements on a web page. It consists of content, padding, borders, and margins.
                        Understanding how these components interact with each other is crucial for designing consistent and visually appealing layouts.
                    </Typography>
                    <Typography paragraph>
                        <strong>Content:</strong> The actual content of the element, such as text, images, or other media.
                    </Typography>
                    <Typography paragraph>
                        <strong>Padding:</strong> The space between the content and the element's border. Padding helps to create space within the element and separates it from its surroundings.
                    </Typography>
                    <Typography paragraph>
                        <strong>Border:</strong> The border surrounding the element's padding. Borders can be styled with various properties, such as color, width, and style.
                    </Typography>
                    <Typography paragraph>
                        <strong>Margin:</strong> The space outside the element's border, which separates it from other elements on the page. Margins create spacing between elements.
                    </Typography>
                    <Typography variant="h6" gutterBottom>CSS Selectors</Typography>
                    <Typography paragraph>
                        CSS selectors are patterns used to select and style elements in an HTML document. There are various types of selectors,
                        including element selectors, class selectors, ID selectors, and pseudo-classes, each serving different purposes in styling.
                    </Typography>
                    <Typography paragraph>
                        <strong>Element Selector:</strong> Targets HTML elements by their tag name. For example, <code>p</code> selects all <code>&lt;p&gt;</code> elements.
                    </Typography>
                    <Typography paragraph>
                        <strong>Class Selector:</strong> Targets elements with a specific class attribute. For example, <code>.highlight</code> selects all elements with the class "highlight".
                    </Typography>
                    <Typography paragraph>
                        <strong>ID Selector:</strong> Targets a single element with a specific ID attribute. For example, <code>#header</code> selects the element with the ID "header".
                    </Typography>
                    <Typography paragraph>
                        <strong>Pseudo-classes:</strong> Targets elements based on their state or position. For example, <code>:hover</code> selects elements when they are hovered over by the mouse.
                    </Typography>
                    <Typography variant='h4' paragraph>Example for Hover animations:</Typography>
                    <div style={{
                        display: 'flex',
                    }}>
                        <div style={{ width: 200, height: 200, backgroundColor: '#007bff', color: '#fff', textAlign: 'center', lineHeight: '200px', marginBottom: '20px', transition: 'background-color 0.3s', margin: '1rem' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                            Hover over me
                        </div>
                        <div style={{
                            width: 200,
                            height: 200,
                            backgroundColor: '#007bff',
                            color: '#fff',
                            textAlign: 'center',
                            lineHeight: '200px',
                            marginBottom: '20px',
                            transition: 'box-shadow 0.3s',
                            margin: '1rem',
                        }}
                            onMouseEnter={(e) => e.target.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)'}
                            onMouseLeave={(e) => e.target.style.boxShadow = ''} >Hover over me</div>
                        <div style={{
                            width: 200,
                            height: 200,
                            backgroundColor: '#007bff',
                            color: '#fff',
                            textAlign: 'center',
                            lineHeight: '200px',
                            marginBottom: '20px',
                            transition: 'transform 0.3s', // Add transition for smooth animation
                            margin: '1rem',
                            // cursor: 'pointer' // Change cursor to indicate interactivity
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'rotate(20deg)'} // Rotate 45 degrees on hover
                            onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}> {/* Rotate back to 0 degrees on mouse leave */}
                            Hover over me
                        </div>
                        <div style={{ width: 200, height: 200, backgroundColor: '#007bff', color: '#fff', textAlign: 'center', lineHeight: '200px', marginBottom: '20px', transition: 'border-radius 0.3s', margin: '1rem' }}
                            onMouseEnter={(e) => e.target.style.borderRadius = '1rem'}
                            onMouseLeave={(e) => e.target.style.borderRadius = '0rem'}>
                            Hover over me
                        </div>
                    </div>
                </Container>
            </Card>
        </div>
    );

}
function Page4() {
    return (
        <>
            <Card sx={{
                padding: '1rem',
                marginBottom: '1rem',
            }}>
                <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
                    <Typography variant="h4">Introduction to Frontend Development - CSS Flexbox</Typography>
                </header>
                <Container style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
                    <Typography variant="h6" gutterBottom>CSS Flexbox</Typography>
                    <Typography paragraph>
                        CSS Flexbox (Flexible Box) is a layout model that provides a more efficient way to arrange and distribute space among items in a container, even when their size is unknown and/or dynamic. It allows you to create complex layouts with a single container element and its child elements, without relying on floats or positioning.
                    </Typography>
                    <Typography paragraph>
                        Flexbox introduces a new set of properties for controlling the layout of items within a flex container. Some of the key properties include:
                    </Typography>
                    <List>
                        <ListItem><strong>display</strong>: Specifies the type of container element as a flex container.</ListItem>
                        <ListItem><strong>flex-direction</strong>: Defines the direction of the flex container's main axis (row or column).</ListItem>
                        <ListItem><strong>justify-content</strong>: Aligns flex items along the main axis of the flex container.</ListItem>
                        <ListItem><strong>align-items</strong>: Aligns flex items along the cross axis of the flex container.</ListItem>
                        <ListItem><strong>flex-wrap</strong>: Controls whether flex items are forced into a single line or can wrap onto multiple lines.</ListItem>
                        <ListItem><strong>flex-grow</strong>, <strong>flex-shrink</strong>, <strong>flex-basis</strong>: Specifies how flex items should grow, shrink, and behave when there's extra space or not enough space.</ListItem>
                        <ListItem><strong>align-self</strong>: Overrides the align-items value for individual flex items.</ListItem>
                    </List>
                    <Typography paragraph>
                        With CSS Flexbox, you can create responsive and dynamic layouts with less code and more flexibility. It's widely supported by modern browsers and is commonly used in building modern web applications and user interfaces.
                    </Typography>
                    <Typography paragraph>
                        Here are examples demonstrating the use of <strong>justify-content</strong> and <strong>align-items</strong> properties:
                    </Typography>
                    <Box display="flex" justifyContent="space-between" bgcolor="#f0f0f0" p={2}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                        <Box bgcolor="#dc3545" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 2</Box>
                        <Box bgcolor="#ffc107" color="#000" width={100} height={100} textAlign="center" lineHeight="100px">Box 3</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the <code>justify-content: space-between;</code> property aligns the boxes with equal space between them along the main axis.
                    </Typography>
                    {/* Example 1: justify-content: flex-start */}
                    <Typography variant="h6" gutterBottom>Example 1: justify-content: flex-start</Typography>
                    <Box display="flex" justifyContent="flex-start" bgcolor="#f0f0f0" p={2} mb={2}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                        <Box bgcolor="#dc3545" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 2</Box>
                        <Box bgcolor="#ffc107" color="#000" width={100} height={100} textAlign="center" lineHeight="100px">Box 3</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the flex items are aligned to the start of the main axis (left edge) of the flex container.
                    </Typography>

                    {/* Example 2: justify-content: center */}
                    <Typography variant="h6" gutterBottom>Example 2: justify-content: center</Typography>
                    <Box display="flex" justifyContent="center" bgcolor="#f0f0f0" p={2} mb={2}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                        <Box bgcolor="#dc3545" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 2</Box>
                        <Box bgcolor="#ffc107" color="#000" width={100} height={100} textAlign="center" lineHeight="100px">Box 3</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the flex items are aligned to the center of the main axis (horizontally) of the flex container.
                    </Typography>

                    {/* Example 3: justify-content: flex-end */}
                    <Typography variant="h6" gutterBottom>Example 3: justify-content: flex-end</Typography>
                    <Box display="flex" justifyContent="flex-end" bgcolor="#f0f0f0" p={2} mb={2}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                        <Box bgcolor="#dc3545" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 2</Box>
                        <Box bgcolor="#ffc107" color="#000" width={100} height={100} textAlign="center" lineHeight="100px">Box 3</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the flex items are aligned to the end of the main axis (right edge) of the flex container.
                    </Typography>
                    {/* Example 1: align-items: flex-start */}
                    <Typography variant="h6" gutterBottom>Example 1: align-items: flex-start</Typography>
                    <Box display="flex" alignItems="flex-start" bgcolor="#f0f0f0" p={2} mb={2} height={200}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the flex item is aligned to the start of the cross axis (top edge) of the flex container.
                    </Typography>

                    {/* Example 2: align-items: center */}
                    <Typography variant="h6" gutterBottom>Example 2: align-items: center</Typography>
                    <Box display="flex" alignItems="center" bgcolor="#f0f0f0" p={2} mb={2} height={200}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the flex item is aligned to the center of the cross axis (vertically) of the flex container.
                    </Typography>

                    {/* Example 3: align-items: flex-end */}
                    <Typography variant="h6" gutterBottom>Example 3: align-items: flex-end</Typography>
                    <Box display="flex" alignItems="flex-end" bgcolor="#f0f0f0" p={2} mb={2} height={200}>
                        <Box bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px">Box 1</Box>
                    </Box>
                    {/* Example 3: flex-wrap */}
                    <Typography variant="h6" gutterBottom>Example: flex-wrap</Typography>
                    <Box display="flex" flexWrap="wrap" bgcolor="#f0f0f0" p={2} mb={2}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Box key={item} bgcolor="#007bff" color="#fff" width={100} height={100} textAlign="center" lineHeight="100px" m={1}>
                                Box {item}
                            </Box>
                        ))}
                    </Box>
                    <Typography paragraph>
                        In this example, the <code>flex-wrap: wrap;</code> property allows the flex items to wrap onto multiple lines if needed.
                    </Typography>

                    {/* Example 4: flex-grow */}
                    <Typography variant="h6" gutterBottom>Example: flex-grow</Typography>
                    <Box display="flex" bgcolor="#f0f0f0" p={2} mb={2}>
                        <Box flexGrow={1} bgcolor="#007bff" color="#fff" textAlign="center" lineHeight="100px" mr={1}>Box 1</Box>
                        <Box flexGrow={2} bgcolor="#dc3545" color="#fff" textAlign="center" lineHeight="100px">Box 2</Box>
                    </Box>
                    <Typography paragraph>
                        In this example, the <code>flex-grow</code> property specifies how much a flex item should grow relative to the rest of the flex items.
                    </Typography>
                </Container>
            </Card>
        </>
    )
}

function ContentTable({ setCurrentPage }) {
    return (
        <div style={{ marginTop: '1rem' }}>
            <aside>
                <Container fixed maxWidth="md">
                    <Card sx={{
                        padding: '1rem',
                    }}>
                        <Typography variant='h5' sx={{
                            marginBottom: '1rem',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} >Table of Content</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(1)}
                            // onMouseEnter={(e) => e.target.style.backgroundColor = '#ff984a'}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(86, 153, 219)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                        >How To</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(2)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(86, 153, 219)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                        >Frontend Technologies</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(3)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(86, 153, 219)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                        >CSS Fundamentals</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }}
                            onClick={() => setCurrentPage(4)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(86, 153, 219)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                        >CSS-FlexBox</Typography>
                    </Card>
                </Container>
            </aside>
        </div>
    );
}