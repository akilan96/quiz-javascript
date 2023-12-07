
const correctAnswers = ["A","B","C","D","E"];
const form_quiz = document.querySelector(".form-quiz");
const questions = document.querySelectorAll(".questions");
const result = document.querySelector(".result");

form_quiz.addEventListener("submit",event =>{

    event.preventDefault();
    let score = 0;

    const userAnswers = [form_quiz.q1.value,form_quiz.q2.value,form_quiz.q3.value,form_quiz.q4.value,form_quiz.q5.value];

    userAnswers.forEach((answer,index)=> {

        if(answer === correctAnswers[index])
        {  
            console.log("Correct Ans",index);
              score = score + 1;
              questions[index].classList.add("correct");
        }
        else{
            questions[index].classList.add("wrong");
            console.log("Wrong Ans",index);
        }

    });
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `you scored ${score}/5`;

});