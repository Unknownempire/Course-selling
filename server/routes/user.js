const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { User, Course, Admin, Credit, UserAttempt } = require("../db");
const router = express.Router();

//not tested yet
// router.get("/me", authenticateJwt, async (req, res) => {
//     const user = await User.findOne({ username: req.user.username });
//     if (!user) {
//       res.status(403).json({msg: "Admin doesnt exist"})
//       return
//     }
//     res.json({
//         username: user.username
//     })
// });

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

router.get('/courses', authenticateJwt, async (req, res) => {
  const courses = await Course.find({ published: true });
  res.json({ courses });
});

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
  const name = req.body.username;
  const credit = await Credit.findOne(req.body);
  if (!credit) {
    res.json({ message: "No credit Card found" });
  } else {
    console.log(credit.cardNumber);
    const course = await Course.findById(req.params.courseId);
    if (course) {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        // checking whether course already purchased or not?
        console.log("user id = " +  user._id);

        const purchased = await User.findOne({
          _id: user._id,
          purchasedCourses: { $in: [req.params.courseId] }
        });

        if (purchased) {
          // res.json({ message: 'Course already purchased' });
          console.log('already purchased');
        } else {
          user.purchasedCourses.push(course);
          await user.save();
          res.json({ message: 'Course purchased successfully' });
        }
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
});

//Payment for reAttempt
router.post('/courses/Test/:courseId' , authenticateJwt, async(req,res) => {
  const credit = await Credit.findOne(req.body);
  if(!credit) {
    console.log('payment not done');
    res.json({payment : 0});
    return;
  } else {
    console.log('payment done');
    res.json({payment : 1});
  }
});


//Test submit --- Need to correct it 
router.post('/submit/:courseId', authenticateJwt, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const courseId = req.params.courseId;
    let userAttempt = await UserAttempt.findOne({ user: user._id });
    
    if (!userAttempt) {
      // Create a new user attempt if it doesn't exist
      userAttempt = new UserAttempt({
        user: user._id,
        courses: [{ course: courseId, attempts: 1, lastAttemptDate: Date.now(), score: req.body.score }]
      });
    } else {
      // User attempt exists, check if the course is already attempted
      const courseIndex = userAttempt.courses.findIndex(course => course.course.equals(courseId));
      if (courseIndex === -1) {
        // Course not attempted, add it to the courses array
        userAttempt.courses.push({ course: courseId, attempts: 1, lastAttemptDate: Date.now(), score: req.body.score });
      } else {
        // Course already attempted, update attempts count and last attempt date
        userAttempt.courses[courseIndex].attempts++;
        userAttempt.courses[courseIndex].lastAttemptDate = Date.now();
        userAttempt.courses[courseIndex].score = req.body.score;
      }
    }
    
    await userAttempt.save();

    res.json({ message: 'User attempt updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//--------------


//Test attempt
router.get('/learn/Test/:courseId', authenticateJwt, async(req,res) => {
  //check if attempt number in the userAttempt schema for the courseId 
  // attempt number should be equal to 0 
  try {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const courseId = req.params.courseId;
    let userAttempt = await UserAttempt.findOne({ user: user._id });

    if (!userAttempt) {
      // Create a new user attempt if it doesn't exist
      console.log('New User');
      userAttempt = new UserAttempt({
        user: user._id,
        courses: [{ course: courseId, attempts: 1, lastAttemptDate: Date.now()}]
      });
      res.json({'attempts' : 0});
    } else {
      // User attempt exists, check if the course is already attempted
      const courseIndex = userAttempt.courses.findIndex(course => course.course.equals(courseId));
      if (courseIndex === -1) {
        // Course not attempted, add it to the courses array
        userAttempt.courses.push({ course: courseId, attempts: 1, lastAttemptDate: Date.now()});
        res.json({'attempts' : 0});
      } else {
        // Course already attempted, update attempts count and last attempt date
        // userAttempt.courses[courseIndex].attempts++;
        // userAttempt.courses[courseIndex].lastAttemptDate = Date.now();
        // userAttempt.courses[courseIndex].score = req.body.score;
        console.log('Course Already attempted');
        res.json({'attempts' : 1});
      }
    }
    
    await userAttempt.save();

    // res.json({ message: 'User attempt updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

//Fetching the score
router.post('/learn/Test/result', authenticateJwt, async(req,res) => {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } 

    let userAttempt = await UserAttempt.findOne({ user: user._id });
    let data = req.body;
    let courseId = data.courseId;

    console.log(courseId);

    if(userAttempt) {
      const courseIndex = userAttempt.courses.findIndex(course => course.course.equals(courseId));
      if(courseIndex === -1) {
        res.status(404).json({message: "Test not attempted"});
        return;
      } else {
        let score = userAttempt.courses[courseIndex].score;
        res.json({score : score});
        return;
      }
    } else {
      res.status(500).json({message: "Internal Server Error"});
    }

})
router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: 'User not found' });
  }
});

router.post('/payment',authenticateJwt, async(req,res) => {
  // const {username,card,expD,CVV } = req.body;
  const newcard = new Credit(req.body);
  await newcard.save();
  res.json({ message: 'User created successfully' });

})

router.get('/learn/:courseId',authenticateJwt, async(req,res) => {
  const course = await Course.findOne({_id: req.params.courseId});
  const temp_route = course.title;
  // console.log(temp_route);
  let route = '';
  for(let i = 0; i < temp_route.length; ++i) {
    if(temp_route[i] !== ' ') {
      route += temp_route[i];
    }
  }
  console.log(route);
  if(!course) {
    res.status(404).json({message: 'course not found'})
  }
  res.json({ message: route });
})


module.exports = router