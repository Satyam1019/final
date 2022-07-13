const quiz =[
    {
        question:"Q1: Which of the following tag is used to insert a line-break in HTML?",
        A:"br",
        B:"hr",
        C:"a",
        D:"pre",
        ans:"ans1"
    },
    {
        question: "Q2: HTML uses",
        A:"User defined tags",
        B:"Pre-specified tags",
        C:"Fixed tags defined by the language",
        D:"Tags only for linking",
        ans:"ans3"
    },
    {
        question:"Q3: The year in which HTML was first proposed _______.",
        A:"1990",
        B:"1980",
        C:"2000",
        D:"1995",
        ans:"ans1"
    },
    {
        question: "Q4: HTML is what type of language ?",
        A:"Scripting Language",
        B:"Markup Language",
        C:"Programming Language",
        D:"Network Protocol",
        ans:"ans2"
    },
    {
        question:"Q5: Which character is used to represent the closing of a tag in HTML?",
        A:"/",
        B:"!",
        C:">" ,
        D:".",
        ans:"ans1"
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