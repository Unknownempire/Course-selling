const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { User, Course, Admin, Credit } = require("../db");
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
  // console.log(req.user.username);
  // const credit = await Credit.findOne({username:name,...req.body});
  const credit = await Credit.findOne(req.body);
  if (!credit) {
    res.json({ message: "No credit Card found" });
  } else {
    // console.log(name);
    // res.json({message : "credit card found"});
    console.log(credit.cardNumber);
    const course = await Course.findById(req.params.courseId);
    if (course) {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        // checking whether course already purchased or not?
        console.log("user id = " +  user._id);
        // const purchased = await User.findOne({ purchasedCourses: req.params.courseId });
        const purchased = await User.findOne({
          _id: user._id,
          purchasedCourses: { $in: [req.params.courseId] }
        });
        // const purchased = await User.findById({purchasedCourses: req.params.courseId});

        if (purchased) {
          // res.json({ message: 'Course already purchased' });
          console.log('already purchased');
        } else {
          user.purchasedCourses.push(course);
          await user.save();
          res.json({ message: 'Course purchased successfully' });
        }
        // console.log("code done");
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
});

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

module.exports = router