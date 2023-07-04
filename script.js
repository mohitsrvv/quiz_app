const quizData = [
    {
        question: 'Javascript is an _______ language?',
        a: 'Object-oriented',
        b: 'Object-Based',
        c: 'Procedual',
        d: 'None of the above',
        correct: 'a'
    }, {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        a: 'var',
        b: 'let',
        c: 'both a and b',
        d: "None of the above",
        correct: 'c'
    }, {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        a: 'getElementById()',
        b: 'getElementByClassName()',
        c: 'both a and b',
        d: 'None of the above',
        correct: 'c'
    }, {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        a: 'Throws an error',
        b: 'Ignores the statements',
        c: 'Gives a warning',
        d: 'None of the above',
        correct: 'b'
    }, {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        a: 'document.write', 
        b: 'console.log',
        c: 'window.alert',
        d: 'All of the above',
        correct: 'd'
    }
]

// const quiz = document.querySelectorAll("quiz");
// const answerEls = document.querySelectorAll(".answer");
// const questionE1 = document.getElementById('question');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submitBtn = document.getElementById('submit');

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz(){
//     deselectAnswers();
//     const currentQuizData = quizData[currentQuiz];

//     questionE1.innerText = currentQuizData.question;
//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;
// }

// function getSeleted(){
//     let answer = undefined;

//     answerEls.forEach((answerEl) => {
//         if(answerEl.checked){
//             answer = answerEl.id;
//         }
//     });
//     return answer;
// }

// function deselectAnswers(){
//     answerEls.forEach((answerEl) => {
//         answerEl.checked = false;
//     });
// }

// submitBtn.addEventListener("click", () => {
//     const answer = getSeleted();

//     if(answer){
//         if(answer === quizData[currentQuiz].correct){
//             score++; 
//         }
//         currentQuiz++;
//         if(currentQuiz < quizData.length){
//             loadQuiz();
//         } else {
//             quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
//         }
//     }
// });


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});