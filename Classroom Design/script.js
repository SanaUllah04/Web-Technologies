function pointHand(subject){

let hand = document.getElementById("hand");

if(subject === "english"){
hand.style.transform = "rotate(-20deg)";
}

if(subject === "urdu"){
hand.style.transform = "rotate(0deg)";
}

if(subject === "maths"){
hand.style.transform = "rotate(25deg)";
}

}

function resetHand(){
let hand = document.getElementById("hand");
hand.style.transform = "rotate(0deg)";
}





function changeTeacher(position){

let teacher = document.getElementById("teacherImg");

if(position === "up"){
teacher.src = "./media/up.png";
}

if(position === "middle"){
teacher.src = "./media/middle.png";
}

if(position === "down"){
teacher.src = "./media/down.png";
}

}

function resetTeacher(){
document.getElementById("teacherImg").src = "./media/middle.png";
}