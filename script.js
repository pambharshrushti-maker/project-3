
const questions = [

  {
    question: "What is JavaScript?",
    options: [
      "Programming Language",
      "Database",
      "Browser",
      "Operating System"
    ],
    answer: "Programming Language"
  },


  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "int",
      "string",
      "define"
    ],
    answer: "var"
  },


  {
    question: "Which method is used to print output in the console?",
    options: [
      "console.log()",
      "print()",
      "display()",
      "write()"
    ],
    answer: "console.log()"
  },


  {
    question: "Which symbol is used for single line comments in JavaScript?",
    options: [
      "//",
      "/* */",
      "#",
      "<!-- -->"
    ],
    answer: "//"
  },


  {
    question: "Which data type is used to store true or false values?",
    options: [
      "String",
      "Boolean",
      "Number",
      "Object"
    ],
    answer: "Boolean"
  },


  {
    question: "Which method adds a new element at the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "push()"
  },


  {
    question: "Which operator is used to compare both value and type?",
    options: [
      "==",
      "=",
      "===",
      "!="
    ],
    answer: "==="
  },


  {
    question: "Which function is used to convert JSON string into object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },


  {
    question: "Which loop is used to execute a block of code a specific number of times?",
    options: [
      "for loop",
      "if statement",
      "switch",
      "function"
    ],
    answer: "for loop"
  },


  {
    question: "Which keyword is used to create a function in JavaScript?",
    options: [
      "function",
      "method",
      "create",
      "def"
    ],
    answer: "function"
  },


  {
    question: "Which method removes the last element from an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "slice()"
    ],
    answer: "pop()"
  },


  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "const",
      "let",
      "var",
      "constant"
    ],
    answer: "const"
  },


  {
    question: "Which method is used to display a popup message?",
    options: [
      "alert()",
      "console.log()",
      "print()",
      "document.write()"
    ],
    answer: "alert()"
  },


  {
    question: "Which loop executes at least one time?",
    options: [
      "while loop",
      "for loop",
      "do...while loop",
      "foreach loop"
    ],
    answer: "do...while loop"
  },


  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.stringify()"
  }

];



let index = 0;

let id;

let score = 0;

let selectedAnswers = [];

let timeUpQuestions = [];


let minutes = 1;

let seconds = 0;




function getData(index) {


  clearInterval(id);

  minutes = 1;

  seconds = 0;




  document.querySelectorAll(".timer span")[0].innerText = "01";

  document.querySelectorAll(".timer span")[1].innerText = "00";




  if (index == questions.length - 1) {

    document.querySelector(".next").disabled = true;

    document.querySelector(".next").classList.add("no-cursor");

  }

  else {

    document.querySelector(".next").disabled = false;

    document.querySelector(".next").classList.remove("no-cursor");

  }


  if (index == 0) {

    document.querySelector(".previous").disabled = true;

    document.querySelector(".previous").classList.add("no-cursor");

  }

  else {

    document.querySelector(".previous").disabled = false;

    document.querySelector(".previous").classList.remove("no-cursor");

  }




  document.querySelector(".quizQuestion").innerHTML = `

        <article>

            <h2>
                ${questions[index].question}
            </h2>


            <main>


                <!-- OPTION 1 -->

                <aside>

                    <input

                        type="radio"

                        name="mcq"

                        form="form"

                        value="${questions[index].options[0]}"

                        id="id1"

                        ${selectedAnswers[index] ===
      questions[index].options[0]

      ? "checked"

      : ""
    }

                    >


                    <label for="id1">

                        ${questions[index].options[0]}

                    </label>

                </aside>



                <!-- OPTION 2 -->

                <aside>

                    <input

                        type="radio"

                        name="mcq"

                        form="form"

                        value="${questions[index].options[1]}"

                        id="id2"

                        ${selectedAnswers[index] ===
      questions[index].options[1]

      ? "checked"

      : ""
    }

                    >


                    <label for="id2">

                        ${questions[index].options[1]}

                    </label>

                </aside>



                <!-- OPTION 3 -->

                <aside>

                    <input

                        type="radio"

                        name="mcq"

                        form="form"

                        value="${questions[index].options[2]}"

                        id="id3"

                        ${selectedAnswers[index] ===
      questions[index].options[2]

      ? "checked"

      : ""
    }

<label for="id3">

${questions[index].options[2]}

</label>

  </aside>

    <!-- OPTION 4 -->

      <aside>

      <input

      type="radio"

      name="mcq"

      form="form"

      value="${questions[index].options[3]}"

      id="id4"

                        ${selectedAnswers[index] ===
      questions[index].options[3]

      ? "checked"

      : ""
    }

                    >


                    <label for="id4">

                        ${questions[index].options[3]}

                    </label>

                </aside>


            </main>

        </article>

    `;


  id = setInterval(function () {


    // Check Seconds

    if (seconds === 0) {


      // Check Minutes

      if (minutes === 0) {


        // Stop Timer

        clearInterval(id);


        // Store Time Up Question

        timeUpQuestions.push(index);


        if (index < questions.length - 1) {

          index++;

          getData(index);

        }

        else {

          document
            .querySelector("form")
            .requestSubmit();

        }


        return;

      }


      minutes--;



      seconds = 59;

    }

    else {

      // Decrease Seconds

      seconds--;

    }



    document.querySelectorAll(".timer span")[0].innerText =

      String(minutes).padStart(2, "0");



    document.querySelectorAll(".timer span")[1].innerText =

      String(seconds).padStart(2, "0");


  }, 1000);

}



document.querySelector(".start-btn").onclick = function () {


  // Hide Start Screen

  document.querySelector(".start-screen").style.display = "none";


  // Show Quiz

  document.querySelector(".wrapper").style.display = "flex";


  // Start Question

  getData(index);

};


document.querySelector(".next").onclick = function (event) {


  event.preventDefault();


  document
    .querySelector("form")
    .requestSubmit();

};




document.querySelector(".previous").onclick = function (event) {


  event.preventDefault();


  if (index > 0) {


    index--;


    getData(index);

  }

};


document.querySelector("form").onsubmit = function (event) {


  event.preventDefault();



  clearInterval(id);




  let options =

    document.querySelectorAll(
      "input[name='mcq']"
    );



  for (

    let i = 0;

    i < options.length;

    i++

  ) {


    if (options[i].checked) {


      selectedAnswers[index] =

        options[i].value;



      if (

        options[i].value ==

        questions[index].answer

      ) {


        score++;

      }


      break;

    }

  }



  if (

    index ==

    questions.length - 1

  ) {


    document.querySelector(
      ".wrapper"
    ).style.display = "none";



    document.body.classList.add(
      "final"
    );



    let attempt =

      questions.length;



    let wrong =

      attempt - score;



    let percentage =

      (score / questions.length) * 100;



    let result;

    if (percentage >= 40) {

      result = "Pass";

    }

    else {

      result = "Fail";

    }

    document.querySelector(
      ".finalans"
    ).innerHTML = `


            Total Questions :
            ${questions.length}

            <br>


            Attempted :
            ${attempt}

            <br>


            Correct :
            ${score}

            <br>


            Wrong :
            ${wrong}

            <br>


            Final Score :
            ${score} / ${questions.length}

            <br>


            Percentage :
            ${percentage.toFixed(2)}%

            <br>


            Result :
            ${result}


            <br>


            <button
                type="button"
                class="restart-btn">

                Restart Quiz

            </button>


        `;

    document.querySelector(
      ".restart-btn"
    ).onclick = function () {

      clearInterval(id);

      index = 0;

      score = 0;

      selectedAnswers = [];

      timeUpQuestions = [];

      minutes = 1;

      seconds = 0;

      document.body.classList.remove(
        "final"
      );

      document.querySelector(
        ".finalans"
      ).innerHTML = "";

      document.querySelector(
        ".wrapper"
      ).style.display = "flex";

      getData(index);

    };


    return;

  }

  index++;


  getData(index);

};