# 🧠 JavaScript Quiz App

<div align="center">

# 🎯 JavaScript Quiz Application

A modern, interactive and responsive **Quiz Application** built using **HTML, CSS & JavaScript**.

<img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5">
<img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript">

</div>

---

## 📖 About Project

The **JavaScript Quiz App** is an interactive web application designed to test JavaScript knowledge through multiple-choice questions.

Users can start the quiz, select answers, navigate between questions, use the countdown timer, and submit the quiz to view their final performance.

The application also includes a **Restart Quiz** option that allows users to start the quiz again from the beginning.

---

## 🚀 Features

* ▶️ Start Quiz
* ❓ 15 JavaScript MCQ Questions
* ⏱️ 1 Minute Timer for Each Question
* ⬅️ Previous Question
* ➡️ Next Question
* 📝 Multiple Choice Questions
* 💾 Selected Answer Handling
* 🔄 Previously Selected Answers Remain Selected
* ⚡ Automatic Next Question After Time Up
* 🚫 Timer Does Not Go Into Negative Values
* ✅ Submit Quiz
* 📊 Automatic Score Calculation
* ✔️ Correct Answer Count
* ❌ Wrong Answer Count
* 📈 Percentage Calculation
* 🏆 Pass / Fail Result
* 🔄 Restart Quiz
* 🎨 Modern User Interface
* 📱 Responsive Design

---

## 🛠️ Technologies Used

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| HTML5      | Web Page Structure           |
| CSS3       | Styling and User Interface   |
| JavaScript | Quiz Logic and Functionality |

---

## 📂 Folder Structure

```text
JavaScript-Quiz-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1️⃣ Start Quiz

Click the **Start Quiz** button to begin the quiz.

The start screen disappears and the quiz interface is displayed.

The first question appears and the timer starts from `01:00`.

---

### 2️⃣ Answer Questions

Each question contains four multiple-choice options.

Select the answer you think is correct.

The selected answer is stored so that when you move between questions, your previously selected answer remains selected.

---

### 3️⃣ Navigate Questions

Use the following buttons to navigate:

* ⬅️ Previous
* ➡️ Next
* ✅ Submit

The **Previous** button is disabled on the first question.

The **Next** button is disabled on the last question.

---

### 4️⃣ Timer

Each question has a **1-minute countdown timer**.

```text
01:00
 ↓
00:59
 ↓
00:58
 ↓
...
00:01
 ↓
00:00
```

When the timer reaches `00:00`, the application automatically moves to the next question.

The timer does not continue into negative values.

---

### 5️⃣ Submit Quiz

After completing all questions, click the **Submit** button to view the final result.

The application calculates:

* Total Questions
* Attempted Questions
* Correct Answers
* Wrong Answers
* Final Score
* Percentage
* Pass / Fail Result

---

### 6️⃣ Restart Quiz

After viewing the result, click the **Restart Quiz** button to start the quiz again.

The following values are reset:

* Question Number
* Score
* Selected Answers
* Time-Up Questions
* Timer

The quiz then starts again from the first question.

---

## 📊 Result Includes

The final result displays:

* 📌 Total Questions
* 📝 Attempted Questions
* ✅ Correct Answers
* ❌ Wrong Answers
* 🎯 Final Score
* 📈 Percentage
* 🏆 Pass / Fail Status

---

## 🎯 Quiz Result Logic

The application calculates the final percentage using:

```javascript
let percentage =
    (score / questions.length) * 100;
```

The passing criteria is **40%**.

```javascript
if (percentage >= 40) {
    result = "Pass";
} else {
    result = "Fail";
}
```

---

## 🔄 Restart Quiz Logic

When the user clicks the **Restart Quiz** button, the application resets the quiz data.

```javascript
index = 0;

score = 0;

selectedAnswers = [];

timeUpQuestions = [];

minutes = 1;

seconds = 0;
```

After resetting the values, the quiz starts again from the first question with a fresh timer.

---

## 💻 JavaScript Concepts Used

* Variables
* Arrays
* Objects
* Arrays of Objects
* Functions
* Conditional Statements
* Loops
* DOM Manipulation
* Event Handling
* Form Handling
* Radio Buttons
* `querySelector()`
* `querySelectorAll()`
* `innerHTML`
* `innerText`
* `setInterval()`
* `clearInterval()`
* Template Literals
* Dynamic Content Rendering
* Score Calculation
* Timer Management

---

## 📚 Quiz Topics

The quiz contains 15 JavaScript MCQ questions covering:

* JavaScript Introduction
* Variables
* `console.log()`
* Comments
* Data Types
* Arrays
* `push()`
* `pop()`
* Comparison Operators
* JSON
* Loops
* Functions
* `const`
* `alert()`
* `do...while`
* `JSON.stringify()`

---

## 🎥 Project Video

Watch the complete project video:

👉 [Watch JavaScript Quiz App Project Video](https://drive.google.com/file/d/160dgfbdsl9jkyOtFkZCR-c1qTKzUHbav/view?usp=sharing)

---

## 🎯 Learning Outcomes

By creating this project, I practiced and improved my knowledge of:

* HTML Structure
* CSS Styling
* JavaScript Programming
* DOM Manipulation
* Event Handling
* Form Handling
* Radio Button Management
* Timer Functionality
* Dynamic HTML Rendering
* Array and Object Handling
* Score Calculation
* Conditional Logic
* JavaScript Functions

---

## ✨ Future Improvements

* 🔀 Random Questions
* 🔀 Shuffle Answer Options
* 📊 Progress Bar
* 🌙 Dark Mode
* 🔊 Sound Effects
* 💾 Local Storage
* 🏆 High Score System
* 📚 Multiple Quiz Categories
* 🎚️ Difficulty Levels
* 👤 User Login System
* 📱 Improved Mobile UI

---

## 👩‍💻 Author

### **Srushti Pambhar**

Frontend Web Development Learner passionate about building interactive web applications using **HTML, CSS and JavaScript**.

---

<div align="center">

### ⭐ If you like this project, don't forget to give it a star! ⭐

</div>
"# JavaScript-Quiz-App" 
"# project-Q" 
