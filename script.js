let count = 0;

const countDisplay = document.getElementById("count");
const tasbeehBtn = document.getElementById("tasbeehbtn");
const resetBtn = document.getElementById("resetBtn");

tasbeehBtn.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});
    

    
