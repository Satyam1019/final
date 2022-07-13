const quiz =[
    {
        question: "Q1: CSS stands for -",
        A:"Cascade style sheets",
        B:"Color and style sheets",
        C:"Cascading style sheets",
        D:"Network Protocol",
        ans:"ans3"
    },
    {
        question: "Q2: The CSS property used to specify the transparency of an element is -",
        A:"opacity",
        B:"filter",
        C:"visibility",
        D:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q3: The property in CSS used to change the background color of an element is -",
        A:"bgcolor",
        B:"color",
        C:"background-color",
        D:"All",
        ans:"ans3"
    },
    {
        question:"Q4: The CSS property used to control the element's font-size is -",
        A:"text-style",
        B:"text-size",
        C:"font-size",
        D:"None",
        ans:"ans3"
    },
    {
        question:"Q5: The HTML attribute used to define the inline styles is -",
        A:"style",
        B:"styles",
        C:"class",
        D:"None",
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