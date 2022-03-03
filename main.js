const quizData = [
    {
        questions: 'Who has won the Champions League final in season 2020/2021',
        a: 'Chelsea',
        b: 'Manchester City',
        c: 'Manchester United',
        d: 'Real Madrid',
        correct: 'a'
    }, {
        questions: 'Who won the first Ballon dOr',
        a: 'Cristiano Ronaldo',
        b: 'Leo Messi',
        c: 'Diego Maradona',
        d: 'Stanley Matthews',
        correct: 'd'
    }, {
        questions: 'Who has the most European Cup/Champions League victories?',
        a: 'Chelsea',
        b: 'FC Barcelona',
        c: 'Manchester United',
        d: 'Real Madrid',
        correct: 'd'
    }, {
        questions: 'How many clubs did David Beckham play for during his career?',
        a: '3',
        b: '4',
        c: '6',
        d: '7',
        correct: 'c'
    }, {
        questions: 'In what year did Arsenal leave Highbury?',
        a: '2010',
        b: '2006',
        c: '2016',
        d: '2002',
        correct: 'b'
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('text-a');
const b_text = document.getElementById('text-b');
const c_text = document.getElementById('text-c');
const d_text = document.getElementById('text-d');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.questions;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }        
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++;
            }
            
            currentQuiz++;

            if(currentQuiz < quizData.length) {
                loadQuiz();
            }
            else {
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2>`
            }
        } 

});