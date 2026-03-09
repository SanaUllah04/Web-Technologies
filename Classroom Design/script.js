const speechBubble = document.getElementById("speechBubble");
const teacherImg = document.getElementById("teacherImg");

function changeTeacher(position, subject) {
    if (position === "up") teacherImg.src = "./media/up.png";
    if (position === "middle") teacherImg.src = "./media/middle.png";
    if (position === "down") teacherImg.src = "./media/down.png";

    // Update and show speech bubble
    speechBubble.innerText = "Let's study " + subject + "!";
    speechBubble.classList.add("active");
}

function resetTeacher() {
    teacherImg.src = "./media/middle.png";
    speechBubble.classList.remove("active");
    speechBubble.innerText = "Hello! Let's learn together!";
}
