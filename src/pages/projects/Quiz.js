import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import { useNavigate } from "react-router-dom";

const ques = [
  {
    question: "What is the output of `10 + '5'`?",
    options: ["5", "10", "15", "Error"],
    answer: "15",
  },
  {
    question: "What is the type of the variable `let x = 'hello';`?",
    options: ["String", "Number", "Boolean", "Object"],
    answer: "String",
  },
  {
    question: "Which loop iterates a fixed number of times?",
    options: ["for loop", "while loop", "do-while loop", "for...of loop"],
    answer: "for loop",
  },
  {
    question:
      "What is the value of `square(5)` if `function square(x) { return x * x; }`?",
    options: ["5", "25", "30", "undefined"],
    answer: "25",
  },
  {
    question:
      "How many arguments does the function `function sayHello(name, age) { console.log(name + ' is ' + age + ' years old.'); }` take?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
];

// const ques = [
//   {
//     question: "What is the output of `10 + '5'`?",
//     options: ["5", "10", "15", "Error"],
//     answer: "15",
//   },
//   {
//     question: "What is the type of the variable `let x = 'hello';`?",
//     options: ["String", "Number", "Boolean", "Object"],
//     answer: "String",
//   },
//   {
//     question: "Which loop iterates a fixed number of times?",
//     options: ["for loop", "while loop", "do-while loop", "for...of loop"],
//     answer: "for loop",
//   },
//   {
//     question:
//       "What is the value of `square(5)` if `function square(x) { return x * x; }`?",
//     options: ["5", "25", "30", "undefined"],
//     answer: "25",
//   },
//   {
//     question:
//       "How many arguments does the function `function sayHello(name, age) { console.log(name + ' is ' + age + ' years old.'); }` take?",
//     options: ["0", "1", "2", "3"],
//     answer: "2",
//   },
//   {
//     question:
//       "What is the correct way to call the function `function greet(message) { alert(message); }` with the message 'Welcome!'?",
//     options: [
//       "greet()",
//       "greet('Welcome!')",
//       "greet.message('Welcome!')",
//       "console.log(greet('Welcome!'));",
//     ],
//     answer: "greet('Welcome!')",
//   },
//   {
//     question: "What element does `document.getElementById('myDiv')` select?",
//     options: [
//       "All elements with the ID 'myDiv'",
//       "The first element with the ID 'myDiv'",
//       "The document itself",
//       "There is no such method",
//     ],
//     answer: "The first element with the ID 'myDiv'",
//   },
//   {
//     question:
//       "What is the effect of `document.querySelector('.myClass').style.color = 'red';`?",
//     options: [
//       "Sets the background color of all elements with the class 'myClass' to red",
//       "Sets the text color of the first element with the class 'myClass' to red",
//       "Adds a new 'color' property to all elements with the class 'myClass'",
//       "Throws an error",
//     ],
//     answer:
//       "Sets the text color of the first element with the class 'myClass' to red",
//   },
//   {
//     question: "Which event is triggered when a user clicks a button?",
//     options: ["click", "change", "submit", "focus"],
//     answer: "click",
//   },
//   {
//     question: "What is the data type of `null` in JavaScript?",
//     options: ["Object", "Undefined", "Null", "String"],
//     answer: "Object",
//   },
//   {
//     question: "What will be the output of `(2 + 3) * 4`?",
//     options: ["10", "20", "12", "4"],
//     answer: "20",
//   },
//   {
//     question: "Which statement is **false** about a for loop?",
//     options: [
//       "It iterates a fixed number of times",
//       "It requires an initialization, condition, and increment/decrement statement",
//       "It can be used to iterate over an array",
//       "It always executes its block at least once",
//     ],
//     answer: "It always executes its block at least once",
//   },
//   {
//     question: "How do you define a constant variable in JavaScript?",
//     options: ["const", "let", "var", "final"],
//     answer: "const",
//   },
//   {
//     question: "What element does `document.querySelector('h1')` select?",
//     options: [
//       "All h1 elements",
//       "The first h1 element",
//       "The document itself",
//       "There is no such method",
//     ],
//     answer: "The first h1 element",
//   },
//   {
//     question: "What will be the output of `'hello' + 5`?",
//     options: ["5hello", "hello5", "Error", "hello"],
//     answer: "hello5",
//   },
//   {
//     question: "What is the purpose of the `return` statement in a function?",
//     options: [
//       "To stop execution and send back a value",
//       "To declare a variable inside the function",
//       "To call another function",
//       "To define a loop",
//     ],
//     answer: "To stop execution and send back a value",
//   },
//   {
//     question: "Which operator has the highest precedence in JavaScript?",
//     options: ["=", "&&", "||", "!"],
//     answer: "!",
//   },
//   {
//     question: "How do you add an event listener to a button?",
//     options: [
//       ".addEventListener('click', function() {})",
//       ".onclick = function() {}",
//       "button.click(function() {})",
//       "None of the above",
//     ],
//     answer: ".addEventListener('click', function() {})",
//   },
//   {
//     question: "What is the difference between `=` and `===` operators?",
//     options: [
//       "They do the same thing",
//       "`===` checks for type equality as well as value equality",
//       "`=` assigns a value while `===` compares values",
//       "`===` is strict comparison while `=` is loose comparison",
//     ],
//     answer: "`===` checks for type equality as well as value equality",
//   },
//   {
//     question: "What built-in function converts a string to lowercase?",
//     options: [
//       ".toLowerCase()",
//       ".toLower()",
//       ".downCase()",
//       "str.toLowerCase()",
//     ],
//     answer: "str.toLowerCase()",
//   },
//   {
//     question: "Which statement is **true** about asynchronous JavaScript?",
//     options: [
//       "It blocks the main thread until the code finishes",
//       "It allows multiple tasks to run concurrently",
//       "It cannot be used with network requests",
//       "It is not supported in modern browsers",
//     ],
//     answer: "It allows multiple tasks to run concurrently",
//   },
//   {
//     question: "What is the purpose of the `try/catch` block in error handling?",
//     options: [
//       "To identify and handle errors",
//       "To define custom functions",
//       "To loop a certain number of times",
//       "To store data in a variable",
//     ],
//     answer: "To identify and handle errors",
//   },
//   {
//     question:
//       "What is the correct way to access the second element in an array called `myArray`?",
//     options: [
//       "myArray[1]",
//       "myArray.get(1)",
//       "myArray(1)",
//       "There is no way to access individual elements in an array",
//     ],
//     answer: "myArray[1]",
//   },
//   {
//     question:
//       "What is the difference between an array and an object in JavaScript?",
//     options: [
//       "They are the same thing",
//       "Arrays store ordered lists of values, while objects store key-value pairs",
//       "Arrays have fixed sizes, while objects have dynamic sizes",
//       "Objects have methods, while arrays do not",
//     ],
//     answer:
//       "Arrays store ordered lists of values, while objects store key-value pairs",
//   },
// ];
const QuizComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [quizStatus, setQuizStatus] = useState(0);
  const [quizSubmission, setQuizSubmission] = useState([]);
  // const ProductList = authState?.ProductList;
  // const updateUserProfile = (e) => {
  //   let temp = UserProfile;
  //   temp = { ...temp, [e.target.name]: e.target.value };
  //   dispatch(setUserProfile(temp));
  // };
  const submitQuiz = (optI) => {
    setQuizSubmission((prev) => {
      let temp = prev;
      temp[quizStatus] = optI;
      console.log(temp, "temp");
      return temp;
    });
  };
  useEffect(() => {
    console.log(quizSubmission);
  }, [quizSubmission]);

  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="curve-shape-container2" style={{ height: "100vh" }}>
      <div className="curve-shape-top2"></div>
      <div className="container" style={{ position: "relative" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card my-3 text-warning bg-dark ">
              <div className="card-body p-5">
                <h2 className="text-center mb-2">Take a Quiz</h2>
              </div>
              <div className="m-3 border rounded p-2">
                {quizStatus + 1}|{ques?.length}|
                {((quizStatus + 1) / ques?.length) * 100}
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: `${((quizStatus + 1) / ques?.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <p>{ques[quizStatus]?.question}</p>
                <ol className="ms-3">
                  {ques[quizStatus]?.options?.map((optI, optIndex) => {
                    return (
                      <li key={optIndex} className="my-2 ">
                        <button
                          className="btn btn-outline-light w-75"
                          onClick={() =>
                            submitQuiz(optI === ques[quizStatus]?.answer)
                          }
                        >
                          {optI}
                        </button>
                      </li>
                    );
                  })}
                </ol>
                {/* <div>Your answer: -{quizSubmission[quizStatus]}</div> */}
                <div className="mb-3 row p-3">
                  {quizStatus >= ques?.length - 1 ? (
                    <>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          // quizSubmission?.filter((item)=>{return item})?.length/ques?.length - 1
                          alert(
                            `Submission successful ${
                              (quizSubmission?.filter((item) => {
                                return item;
                              })?.length /
                                (ques?.length - 1)) *
                              100
                            }%`
                          );
                          navigate("/projects");
                        }}
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => {
                          setQuizStatus((prev) => prev + 1);
                        }}
                      >
                        Next
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default QuizComp;
