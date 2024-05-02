const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    publishedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
    // testAttempted: Number
  });

const creditSchema = new mongoose.Schema({
    username: String,
    cardNumber: String,
    expiryDate: String,
    cvv : String,


  });

// const userAttemptSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   courses: [{
//     course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
//     attempts: { type: Number, default: 0 },
//     lastAttemptDate: { type: Date, default: Date.now },
//     score : {type: Number, default: 0},
//   }]
// });

const TestQuestionsSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  questions : [{
    // _id:{ type : mongoose.Schema.Types.ObjectId},
    // _id: { type: mongoose.Schema.Types.ObjectId, default: () => mongoose.Types.ObjectId() },
    question : String,
    options : [String],
    correctAnswer :  String
  }]
})
//New userAttempt schema for recording the responses for each question
const userAttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courses: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    attempts: { type: Number, default: 0 },
    lastAttemptDate: { type: Date, default: Date.now },
    score: { type: Number, default: 0 },
    responses: [{
      // questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course.questions._id' },
      isCorrect: Boolean,
      question: String,
      selectedOption: String,
      correctAnswer: String
    }]
  }]
});

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);
const Credit = mongoose.model('CreditCards', creditSchema);
const UserAttempt = mongoose.model('userAttempt', userAttemptSchema);
const TestQuestions = mongoose.model('TestQuestionns', TestQuestionsSchema);
  
  module.exports = {
    User,
    Admin,
    Course,
    Credit,
    UserAttempt,
    TestQuestions,
  }