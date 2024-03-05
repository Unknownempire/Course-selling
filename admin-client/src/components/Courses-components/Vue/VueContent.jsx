import React, { useState } from 'react';
import { Box, Container, Divider, Typography, Stack, Pagination, Card, Tab} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function VueContent() {
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
            margin:'0',
            padding:'0',
            // border:'2px solid green',
            maxWidth:'100vw',
            display: 'flex'
        }}>
        <Container fixed maxWidth='xl' sx={{
            // border:"2px solid purple",
            width:'75%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Box sx={{
            padding: "1rem",
            width:'70%',
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
                    position:'fixed',
                    bottom:'0.5rem',
                    backdropFilter: 'blur(2px)',
                    padding: '3px',
                    // border: '2px solid yellow',
                }}/>
            {/* </Stack> */}

            </Container>
            <div style={{
                position:'fixed',
                right:'1rem',
            }}>
                <ContentTable setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};

function Page1() {
    return (
        <>
            <Card sx={{
                padding:'1rem',
                marginBottom:'1rem',
            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Typography variant="h4" paragraph="true">A Complete Beginner's Guide to Vue</Typography>
                    <img src='https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg' />
                </div>
            <Typography variant="h5" paragraph="true" sx={{
                fontStyle:'italic',
                // color:'#1565c0',
                color:'#1b86ff',
                color: '#40b27f'
                }}>Vue.js is a frontend framework that is optimized for progressive integration. That means you can have a large app with only a couple Vue components integrated -- or you could start from scratch and work completely within the Vue ecosystem.
                    Another thing that sets Vue apart is the lower learning curve compared to a lot of frameworks. Instead of having to understand complex topics, if you know HTML, CSS, and JavaScript, you're already pretty close!
                    Like any framework, it adds a structure and utilities to your frontend so that your app is easier to extend as it grows, is more organized, and you don't have to "reinvent the wheel" as often.
                    Vue is also really cool because it's ecosystem is really well integrated -- a lot of the utilities that would normally be 3rd party libraries are built by the Vue core maintainers, like Vue Router and Vuex.
                </Typography>
            <Divider />
            <Typography variant="h5" paragraph="true">Virtual Dom</Typography>
            <Typography paragraph="true">VueJS makes the use of virtual DOM, which is also used by other frameworks such as React, Ember, etc. The changes are not made to the DOM, instead a replica of the DOM is created which is present in the form of JavaScript data structures. Whenever any changes are to be made, they are made to the JavaScript data structures and the latter is compared with the original data structure. The final changes are then updated to the real DOM, which the user will see changing. This is good in terms of optimization, it is less expensive and the changes can be made at a faster rate.
            </Typography>
            <Typography variant='h5' paragraph="true">Data Binding</Typography>
            <Typography paragraph='true'>The data binding feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of binding directive called v-bind available with VueJS.
            </Typography>
            <Typography variant='h5' paragraph="true">Components</Typography>
            <Typography paragraph='true'>Components are one of the important features of VueJS that helps create custom elements, which can be reused in HTML.
            </Typography>
            <Typography variant='h5' paragraph="true">Event Handling</Typography>
            <Typography paragraph='true'>v-on is the attribute added to the DOM elements to listen to the events in VueJS.</Typography>
            <Typography variant='h5' paragraph="true">Animation/Transition</Typography>
            <Typography paragraph='true'>VueJS provides various ways to apply transition to HTML elements when they are added/updated or removed from the DOM. VueJS has a built-in transition component that needs to be wrapped around the element for transition effect. We can easily add third party animation libraries and also add more interactivity to the interface.</Typography>
            <Typography variant='h5' paragraph="true">Computed Properties</Typography>
            <Typography paragraph='true'>This is one of the important features of VueJS. It helps to listen to the changes made to the UI elements and performs the necessary calculations. There is no need of additional coding for this.</Typography>
            <Typography variant='h5' paragraph="true">Templates</Typography>
            <Typography paragraph='true'>VueJS provides HTML-based templates that bind the DOM with the Vue instance data. Vue compiles the templates into virtual DOM Render functions. We can make use of the template of the render functions and to do so we have to replace the template with the render function.
            </Typography>
            <Typography variant='h5' paragraph="true">Directives</Typography>
            <Typography paragraph='true'>VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, which are used to perform various actions on the frontend.
            </Typography>
            <Typography variant='h5' paragraph="true">Watchers</Typography>
            <Typography paragraph='true'>Watchers are applied to data that changes. For example, form input elements. Here, we don’t have to add any additional events. Watcher takes care of handling any data changes making the code simple and fast.
            </Typography>
                <Typography variant='h5' paragraph={true}>Routing</Typography>
                <Typography paragraph={true}>Navigation between pages is performed with the help of vue-router.
                </Typography>
                <Typography variant='h5' paragraph={true}>Lightweight</Typography>
                <Typography paragraph={true}>VueJS script is very lightweight and the performance is also very fast.
                </Typography>
                <Typography variant='h5' paragraph={true}>Vue-CLI</Typography>
                <Typography paragraph={true}>VueJS can be installed at the command line using the vue-cli command line interface. It helps to build and compile the project easily using vue-cli.
                </Typography>
                <Typography variant='h5' paragraph={true}>Comparison with Other Frameworks</Typography>
                <Typography paragraph={true}>Now let us compare VueJS with other frameworks such as React, Angular, Ember, Knockout, and Polymer.
                </Typography>
            </Card>
        </>
    )

}

function Page2() {
    return (
        <>
            <Card sx={{
                padding:'1rem',
                marginBottom:'1rem',
            }}>
            <Typography variant="h5" paragraph="true">
                    <img src='https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg' height={20} />
                    VueJs
                    &nbsp;
                    V/S
                    &nbsp;
                    <img src='https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg' height={20} />
                     React
            </Typography>
            <Box sx={{
                marginTop:"1rem",
                marginBottom:"1rem",
                // border: '2px solid blue',
                // borderRadius:'7px',
            }}>
                    <Accordion sx={{
                        marginBottom: '4px',
                        // border: '1px solid blue',
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                    }}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Virtual DOM</Typography>
                    </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Virtual DOM is a virtual representation of the DOM tree. With virtual DOM, a JavaScript object is created which is the same as the real DOM. Any time a change needs to be made to the DOM, a new JavaScript object is created and the changes are made. Later, both the JavaScript objects are compared and the final changes are updated in the real DOM.</Typography>
                            <br></br>
                            <Typography>VueJS and React both use virtual DOM, which makes it faster.</Typography>
                        </AccordionDetails>
                </Accordion >
                <Accordion sx={{
                        marginBottom: '4px',
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                }}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                    <Typography>Template v/s JSX</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>VueJS uses html, js and css separately. It is very easy for a beginner to understand and adopt the VueJS style. The template based approach for VueJS is very easy.</Typography>
                        <br></br>
                        <Typography>React uses jsx approach. Everything is JavaScript for ReactJS. HTML and CSS are all part of JavaScript.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                        border: '1px solid #1565c0',
                        marginBottom: '4px',
                        borderRadius: '6px',
                }}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                    <Typography>Installation Tools</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>React uses create react app and VueJS uses vue-cli /CDN/npm. Both are very easy to use and the project is set up with all the basic requirements. React needs webpack for the build, whereas VueJS does not. We can start with VueJS coding anywhere in jsfiddle or codepen using the cdn library.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                }}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                    <Typography>Popularity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>React is popular than VueJS. The job opportunity with React is more than VueJS. There is a big name behind React i.e. Facebook which makes it more popular. Since, React uses the core concept of JavaScript, it uses the best practice of JavaScript. One who works with React will definitely be a very good with all the JavaScript concepts.</Typography>
                        <br/>
                        <Typography>VueJS is a developing framework. Presently, the job opportunities with VueJS are less in comparison to React. According to a survey, many people are adapting to VueJS, which can make it more popular in comparison to React and Angular. There is a good community working on the different features of VueJS. The vue-router is maintained by this community with regular updates.</Typography>
                        <br/>
                        <Typography>VueJS has taken the good parts from Angular and React and has built a powerful library. VueJS is much faster in comparison to React/Angular because of its lightweight library.</Typography>
                        <br/>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Divider />
            <br />
            <Typography variant="h4" paragraph="true" sx={{
                fontWeight:'630'
            }}> VueJs V/S Angular
            </Typography>
                <Typography variant='h5' paragraph={true}>Similarities</Typography>
                <Typography paragraph={true}>VueJS has a lot of similarities with Angular. Directives such as v-if, v-for are almost similar to ngIf, ngFor of Angular. They both have a command line interface for project installation and to build it. VueJS uses Vue-cli and Angular uses angular-cli. Both offer two-way data binding, server side rendering, etc.
                </Typography>
                <Typography variant='h5' paragraph={true}>Complexity</Typography>
                <Typography  paragraph={true}>Vuejs is very easy to learn and start with. As discussed earlier, a beginner can take the CDN library of VueJS and get started in codepen and jsfiddle.
                    For Angular, we need to go through a series of steps for installation and it is little difficult for beginners to get started with Angular. It uses TypeScript for coding which is difficult for people coming from core JavaScript background. However, it is easier to learn for users belonging to Java and C# background.
                </Typography>
                <Typography variant='h5' paragraph={true}>Performance</Typography>
                <Typography paragraph={true}>To decide the performance, it is up to the users. VueJS file size is much lighter than Angular. A comparison of the framework performance is provided in the following link http://stefankrause.net/js-frameworks-benchmark4/webdriver-ts/table.html
                </Typography>
                <Typography variant='h5' paragraph={true}>Popularity</Typography>
                <Typography paragraph={true}>At present, Angular is more popular than VueJS. A lot of organizations use Angular, making it very popular. Job opportunities are also more for candidates experienced in Angular. However, VueJS is taking up the place in the market and can be considered as a good competitor for Angular and React.
                </Typography>
                <Typography  variant='h5' paragraph={true}>Dependencies</Typography>
                <Typography paragraph={true}>Angular provides a lot of built-in features. We have to import the required modules and get started with it, for example, @angular/animations, @angular/form.
                    VueJS does not have all the built-in features as Angular and needs to depend on third party libraries to work on it.
                </Typography>
                <Typography variant='h5'  paragraph={true}>Flexibility</Typography>
                <Typography paragraph={true}>VueJS can be easily merged with any other big project without any issues. Angular will not be that easy to start working with any other existing project.
                </Typography>
                <Typography  variant='h5' paragraph={true}>Backward Compatibility</Typography>
                <Typography paragraph={true}>We had AngularJS, Angular2 and now Angular4. AngularJS and Angular2 have vast difference. Project application developed in AngularJS cannot be converted to Angular2 because of the core differences.
                    The recent version of VueJS is 2.0 and it is good with backward compatibility. It provides good documentation, which is very easy to understand.
                </Typography>
                <Typography variant='h5'  paragraph={true}>Typescript</Typography>
                <Typography paragraph={true}>Angular uses TypeScript for its coding. Users need to have knowledge of Typescript to get started with Angular. However, we can start with VueJS coding anywhere in jsfiddle or codepen using the cdn library. We can work with standard JavaScript, which is very easy to start with.
                </Typography>
            </Card>
        </>
    )

}
function Page3() {
    return (
        <div>
            <Card sx={{
                padding:'1rem',
                marginBottom:'1rem',
            }}>
            <Typography variant='h5' paragraph="true">There are many ways to install VueJS. Some of the ways on how to carry out the installation are discussed ahead.
            <br />
                </Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'

                }}>
                    <code>
                        {`<html>
    <head>
        <script type="text/javascript" src="vue.min.js"></script>
    </head>
    <body></body>
</html>`}
                    </code>
                </pre>
                <br />
                <Typography paragraph="true">Go to the home site <a href="https://vuejs.org/v2/guide/installation.html">https://vuejs.org/v2/guide/installation.html</a> of VueJS and download the vue.js as per need. There are two versions for use - production version and development version. The development version is not minimized, whereas the production version is minimized as shown in the following screenshot. Development version will help with the warnings and debug mode during the development of the project.
            </Typography>
            <Typography variant='h5' paragraph='true'>Using NPM</Typography>
            <Typography paragraph='true'>For large scale applications with VueJS, it is recommended to install using the npm package. It comes with Browserify and Webpack along with other necessary tools, which help with the development. Following is the command to install using npm.</Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        npm  install vue
                    </code>
                </pre>
                <Typography variant="h5" paragraph={true}>Using CLI Command Line</Typography>
                <Typography paragraph={true}>VueJS also provides CLI to install the vue and get started with the server activation. To install using CLI, we need to have CLI installed which is done using the following command.</Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        npm install --global vue-cli
                    </code>
                </pre>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/cli_command_line.jpg" />
                </div>
                <br />
                {/* <Typography variant="h5" paragraph={true}>Using CLI Command Line</Typography> */}
                <Typography paragraph={true}>Once done, it shows the CLI version for VueJS. It takes a few minutes for the installation.</Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        + vue-cli@2.8.2{"\n"}
                        added 965 packages in 355.414s
                    </code>
                </pre>
                <Typography paragraph={true}>Following is the command to create the project using Webpack.</Typography>

                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        vue init webpack myproject
                    </code>
                </pre>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/select_command_prompt.jpg" />
                </div>
                <br />
                <Typography paragraph={true}>Following is the command to create the project using Webpack.</Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        cd myproject{"\n"}
                        npm install{"\n"}
                        npm run dev{"\n"}
                    </code>
                </pre>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/command_prompt.jpg" />
                </div>
                <br />
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/npm.jpg" />
                </div>
                <br />
                <Typography paragraph={true}>Once we execute npm run dev, it starts the server and provides the url for display to be seen in the browser which is as shown in the following screenshot.</Typography>

                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/welcome_to_vuejs.jpg" />
                </div>
                <br />
                <Typography paragraph={true}>The project structure using CLI looks like the following.</Typography>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/cli.jpg" />
                </div>
                <br />


            </Card>
        </div>
    );

}
function Page4() {
    return (
        <>
        <Card sx={{
            padding:'1rem',
            marginBottom:'1rem',
        }}>
                <div>
                    <Typography variant="h4" paragraph="true">VueJs - Introduction
                    </Typography>
                </div>
                <Typography paragraph="true"><strong>Vue</strong> is a JavaScript framework for building user interfaces. Its core part is focused mainly on the view layer and it is very easy to understand. The version of Vue that we are going to use in this tutorial is 2.0.
                </Typography>
                <Typography paragraph="true">As Vue is basically built for frontend development, we are going to deal with lot of HTML, JavaScript and CSS files in the upcoming chapters. To understand the details, let us start with a simple example.
                </Typography>
                <Typography paragraph="true">
                    In this example, we are going to use the development verison of vuejs.
                </Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'

                }}>
                    <code>
                        {`<html>
   <head>
      <title>VueJs Introduction</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
   </head>
   <body>
      <div id = "intro" style = "text-align:center;">
         <h1>{{ message }}</h1>
      </div>
      <script type = "text/javascript">
         var vue_det = new Vue({
            el: '#intro',
            data: {
               message: 'My first VueJS Task'
            }
         });
      </script>
   </body>
</html>`}
                    </code>
                </pre>
                <Typography variant='h4' paragraph='true'>Output</Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/first_vuejs.jpg" />
                </div>
                <br />
            <Typography paragraph="true">This is the first app we have created using VueJS. As seen in the above code, we have included vue.js at the start of the .html file.</Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                        {`<script type = "text/javascript" src = "js/vue.js"></script>`}
                    </code>
                </pre>
            <Typography paragraph="true">There is a div which is added in the body that prints “My first VueJS Task” in the browser.
            </Typography>
                <pre className="code-block" style={{
                    padding: '1rem',
                    border: '0.5px solid #42b883',
                    borderRadius: '0.5rem',
                    background: '#eeeeee'
                }}>
                    <code>
                    {`<div id = "intro" style = "text-align:center;">
        <h1>{{ message }}</h1>
</div>`}
                    </code>
                </pre>
                <Typography>
    In the above code snippet, we are calling Vue instance, which takes the id of the DOM element i.e. e1:’#intro’, it is the id of the div. There is data with the message which is assigned the value ‘My first VueJS Task’. VueJS interacts with DOM and changes the value in the DOM {`{{message}}`} with ’My first VueJS Task’.
    <br/>
    If we happen to change the value of the message in the console, the same will be reflected in the browser. For example −
</Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/vuejs_interesting.jpg" />
                </div>
                <br />
                <Typography variant='h4' paragraph='true'>Console Details</Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src="https://www.tutorialspoint.com/vuejs/images/vuejs_is_interesting.jpg" />
                </div>
                <br />
                <Typography  paragraph='true'>In the above console, we have printed the vue_det object, which is an instance of Vue. We are updating the message with “VueJs is interesting” and the same is changed in the browser immediately as seen in the above screenshot.
                <br />
This is just a basic example showing the linking of VueJS with DOM, and how we can manipulate it. In the next few chapters, we will learn about directives, components, conditional loops, etc.</Typography>
            </Card>
        </>
    )
}

function ContentTable({setCurrentPage}) {
    return (
        <div>
            <aside>
                <Container fixed maxWidth="md">
                <Card sx={{
                    padding:'1rem',
                }}>
                    <Typography variant='h5' sx={{
                        marginBottom:'1rem',
                        textDecoration:'underline'
                    }} >Table of Content</Typography>
                    <Typography paragraph='true' sx={{
                        cursor:'pointer',
                        textDecoration:'underline'
                    }} onClick={() => setCurrentPage(1)}>About Vuejs</Typography>
                    <Typography paragraph='true' sx={{
                        cursor:'pointer',
                        textDecoration:'underline'
                    }} onClick={() => setCurrentPage(2)}>React vs Vue</Typography>
                    <Typography paragraph='true' sx={{
                        cursor:'pointer',
                        textDecoration:'underline'
                    }} onClick={() => setCurrentPage(3)}>VueJs Environment Setup</Typography>
                    <Typography paragraph='true' sx={{
                        cursor:'pointer',
                        textDecoration:'underline'
                    }} onClick={() => setCurrentPage(4)}>VueJs-Introduction</Typography>
                </Card>
                </Container>
            </aside>
        </div>
    );
}