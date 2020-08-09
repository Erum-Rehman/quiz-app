var questionArray = [
    {
        question: "1-Inside which HTML element do we put the JavaScript?",
        answer: "< script >",
        options: [
            "< script >",
            "< js >",
            "< scripting >",
            "< javascript >"
        ]
    },
    {
        question: "2-What does HTML  stands for?",
        answer: "Hyper Text Markup Language",
        options:[
            "HyperLinks & Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyberlink markup Language"
        ]  
    },
    {
        question: "3-C.P.U stands for",
        answer: 'Central Processing Unit',
        options: [
            'Central Display Unit',
            'Central Processing Unit',
            'Computer Display Unit',
            'Central Disc Unit'
        ]   
    },
    {
        question: "4-Select the option to make a list that lists the items with numbers?",
        answer: "ol",
        options: [
            "ol",
            "ul",
            "dl",
            "None of the above"
        ]
    },
    {
        question: "5-Select the appropriate HTML tag for inserting a line break?",
        answer: "br",
        options: [
            "break",
            "brbr",
            "br",
            "None"
        ]
    }
]
function showQuestion(e){
    //show question
    var questions = document.getElementById("start")
    questions.innerHTML = questionArray[e].question;

    //show options
    var optionElement = document.getElementsByClassName("btn-1")
    for(var i= 0; i< optionElement.length; i++){
        optionElement[i].innerHTML = questionArray[e].options[i];
    }
}
var questionCount = 0;
var score = 0;

function nextQuestion(){
    questionCount++;
    validDate(questionCount);
    showQuestion(questionCount)
    removeActive()
}
// var countQ = 1;
// var count = document.getElementById("paper")
// for (var i=0;i<question.lenght;i++){
//     countQ++;
//     count.innerHTML= paper;
// }

function active(e){
    removeActive()
    e.classList.add("active")
    // console.log(e)
}
function removeActive(){
    var active = document.getElementsByClassName("active")
    for(var i=0;i<active.length;i++){
        active[i].classList.remove("active")
    }
}
function validDate(e){
    console.log(e, "event")
    var active = document.getElementsByClassName("active")
    console.log(active, "active");
    if(active.innerHTML == questionArray[e].answer){
        score += 10
        console.log("ri8 ans")
    }else{
        console.log("wrng ans")
    }
}
