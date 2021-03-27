//Array of correct answers: 
//"B" kommt aus value input type: <input type="radio" name="q3" value="B">
// alle richtigen Antworten sind Antwort B

// const correctAnswers = ["B", "B", "B", "B"];
// const form = document.querySelector(".quiz-form");

// form.addEventListener("submit", e=> {
//     //keine Standardaktion für Submit:
//     e.preventDefault();
//     // wir wollen einen Score für die Benutzereingabe:
//     let score = 0;
//     //wir erstellen wieder ein Array mit Benutzerantworten:
//     //  mit form, dann name of input form: q1, dann value der Benutzereingabe
//     const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
//     //1. Vergleich der Antworten mit correctAnswers, 
//     //2. verknüpft mit Index von correctAnswers, damit die alle durchlaufen werden, 
//     //3. dann Score anpassen
//     userAnswers.forEach((answer, index) => {
//         if (answer === correctAnswers[index]){
//             score += 25;
//         }
//     })
//     console.log(score);
// })











const correctAnwers = ["B", "B", "B", "B"] ;
const form = document.querySelector(".quiz-form");
//const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];
let score = 0;



form.addEventListener("submit", e => {

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];
    e.preventDefault();

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnwers[index]){
            score =+ 25;
        }
    });

    // for (let i = 0; i < correctAnwers.length; i++){
    //     if (userAnswers[i] === correctAnwers[i]){
    //         score += 25;
            
    //     }
        
    // }

    console.log(score);

//     // show score in page:
//     const result = document.querySelector(".result");
//     result.classList.remove("d-none");
//     result.querySelector("span").textContent = `${score} %`;
   
//    //textPrimary.textContent = `Your Score is ${score} %`;

//    //body > div.result.py-4.bg-light.text-center > div > p > span
scrollTo(0,0);

const result = document.querySelector(".result");
const hidden = document.querySelector(".d-none");
//result.querySelector("span").textContent = score + "%";

result.classList.remove("d-none");
//hidden.classList.remove("d-none");

let end = 0;
const timer = setInterval(() => {
    result.querySelector("span").textContent = end + "%";
    if (end === score){
        clearInterval(timer);
    }
    else {
        end++;
    }
}, 30)


})

document.createElement("hallo");

console.log("test");

// setTimeout(()=> {
//     alert("hello")
// }, 3000);


























