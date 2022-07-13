const quiz =[
    {
        question: "Q1: Javascript is an _______ language?",
        A:"Object-Oriented",
        B:"Object-based",
        C:"procedural",
        D:"Network Protocol",
        ans:"ans1"
    },
    {
        question: "Q2: Which of the following keywords is used to define a variable in Javascript?",
        A:"var",
        B:"let",
        C:"both A and B",
        D:"None",
        ans:"ans3"
    },
    {
        question:"Q3: Which of the following methods is used to access HTML elements using Javascript",
        A:"getElementbyid()",
        B:"getElementbyClassName()",
        C:"Both A and B",
        D:"None",
        ans:"ans3"
    },
    {
        question:"Q4: How can a datatype be declared to be a constant type",
        A:"const",
        B:"var",
        C:"let",
        D:"constant",
        ans:"ans1"
    },
    {
        question:"Q5: Which of the following methods can be used to display data in some form using Javascript",
        A:"document.write()",
        B:"console.log()",
        C:"window.alert()",
        D:"All",
        ans:"ans4"
    },
];

const question=document.querySelector('.que');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const score=document.querySelector('#score');

let queCount=0;
let count=0;


const loadquestion =() => {
    question.innerHTML = quiz[queCount].question;
    option1.innerHTML = quiz[queCount].A;
    option2.innerHTML = quiz[queCount].B;
    option3.innerHTML = quiz[queCount].C;
    option4.innerHTML = quiz[queCount].D;
}

loadquestion();

const getcheckanswer = () => {
    let answer;
    answers.forEach((Ans) => {
        if(Ans.checked){
            answer = Ans.id;
        }
    });
    return answer;
};

const removeoption = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedanswer =getcheckanswer();
    if(checkedanswer === quiz[queCount].ans){
        count++;
    };
    queCount++;

    removeoption();

    if(queCount<quiz.length){
        loadquestion();
    }else{
            score.innerHTML = `
            <h4> You Scored ${count}/${quiz.length}</h4>
            <input type=button class="btn" onClick="parent.location='sol.php'"
 value='Solution'>
            `;

            score.classList.remove('scoredisplay');
    }
});