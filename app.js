const question=[{
    "que":"Which of the following is a markup language ?",
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript",
    "d":"PHP",
    "correct":"a"

},

{
    "que":"What year was Javascript launched ?",
    "a":"1996",
    "b":"1995",
    "c":"1994",
    "d":"None of the above",
    "correct":"b"

},

{
    "que":"What does CSS stands for?",
    "a":"Hypertext Markup Language",
    "b":"Cascading Style Sheets",
    "c":"Jason Object Notation",
    "d":"PHP",
    "correct":"b"

}

]

let index=0;
let total=question.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if (index === total)
    {
        return endquiz();
    }
    reset();
    const data=question[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
    
}

const submitquiz=()=>{
    const data=question[index];

    const ans=getanswer()
    if(ans===data.correct)
    {
          right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getanswer=()=>{
    let selectedAns;
    optionInputs.forEach(
        (input)=>
        {
            if(input.checked){
                selectedAns=input.value;
                
            }
         
            
        }
    )
    return selectedAns;
}

const reset=()=>
{
    optionInputs.forEach(
        (input)=>
        {
            input.checked=false;
        }
    )
}

const endquiz=()=>
{
    document.getElementById("box").innerHTML =
    `<h3> Thank you for playing the quiz ! </h3>
    <h2> ${right} /  ${total} are correct </h2>`
}

loadQuestion();


