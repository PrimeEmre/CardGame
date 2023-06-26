let questions = [];
let question = {};
let quid = -1;
let soruSayisi = 1;
//soru1 left (0) -- WINTER
question = {};
question.id = 1;
question.header = 'Winter';
question.text = 'Now is the time to conserve enegery and reduces.<br><br><b> A project fails but gain an Abundance.</b>'
question.picture = 'images/1.jpg'
questions.push(question);

//soru1 right (1)
question = {};
question.id = 1;
question.header = 'Winter';
question.text = 'Now is the time for hurried labour and final efforts.<br><br><b>A project finishes early, but gain a Scarcity.</b>'
question.picture = 'images/1.jpg'
questions.push(question);

//soru2 left
question = {};
question.id = 2;
question.header = 'Winter';
question.text = 'A headstrong community member takes charge of the community`s work efforts.<br><br><b> A project fails, and then a different project finishes after.</b>'
question.picture = 'images/2.jpg'
questions.push(question);

//soru2 right
question = {};
question.id = 2;
question.header = 'Winter';
question.text = ' A headstrong community member tires to take contorol of the community.<br><br><b> How are they prevented from doing this? Due to the conflict, project dice are not reduced this week.</b> '
question.picture = 'images/2.jpg'
questions.push(question);

//soru3 left
question = {};
question.id = 3;
question.header = 'Winter';
question.text = ' Someone comes up with an ingenious solution to a big problem, so a project finishes early.<br><br><b> What were their ideas?</b>  '
question.picture = 'images/3.jpg'
questions.push(question);

//soru 3 right
question = {};
question.id = 3;
question.header = 'Winter';
question.text = 'Someone develops a plan to ensure safety and comfort during the coldest months.<br><br><b> Start a project related to this.</b>    '
question.picture = 'images/3.jpg'
questions.push(question);

//soru 4 left
question = {};
question.id = 4;
question.header = 'Winter';
question.text = '7 All the children and young children are crying and won`t stop. Discuss this in addition to your regular activities for the week.'
question.picture = 'images/4.jpg'
questions.push(question);

//soru4 right
question = {};
question.id = 4
question.header = "Winter"
question.text = "  A great atotcity is revaled Waht is it?<br><br><b> Who uncover it?</b>"
question.picture = "images/4.jpg"
questions.push(question);

//soru5 left
question = {};
question.id = 5
question.header = "Winter"
question.text = "  A great atotcity is revaled Waht is it?<br><br><b> Who uncover it?</b>"
question.picture = "images/5.jpg"
questions.push(question)








//SPRING
//soru1 left-- SPRING
question = {};
question.id = 1;
question.header = 'Spring';
question.text = 'Spring1.'
question.picture = 'images/1.jpg'
questions.push(question);

//hide the question card
document.querySelector(".card-q").style.display = 'none';
function start() {
    //hide the question card
    document.querySelector(".card-q").style.display = 'flex';
    document.querySelector(".card-start").style.display = 'none';
    //show the first Question
    loadContent(1);
}
function previous() {

    console.log(questions)

    //quid ssayisini rastgele bir sayi ile degistir
    quid--;// Math.floor(Math.random() * soruSayisi);  
    loadContent(quid);
}

function next() {
    console.log(questions)
    //quid ssayisini rastgele bir sayi ile degistir
    quid++;//= Math.floor(Math.random() * soruSayisi);  
    loadContent(quid);

}

function loadContent(quid) {
    console.log(quid);
    let header = document.getElementById('ddCardType').value;
    //find the questions for the line number
    let selectedQuestions= questions.filter(p => p.id === quid && p.header==header );
    //determine which one you want to show (left one or right one, left =0 right =1)
    //0 mi 1 mi sevgili bilgisayarim sen sec
    let leftorright =Math.floor(Math.random() * 2); 
    console.log(selectedQuestions);
    //bring the question
    let selectedQuestion =selectedQuestions[leftorright];

    //show the selected question on the page
    document.getElementById('card-img').src = selectedQuestion.picture;
    document.getElementById('p-question').innerHTML = selectedQuestion.text;
    document.getElementById('h-header').innerHTML = selectedQuestion.header;
}

