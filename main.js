const counterScreen = document.getElementById("counter-screen");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");
let count = 0;

increaseBtn.addEventListener("click", function(){
    count++;
    counterScreen.innerHTML = count;
})

resetBtn.addEventListener("click", function(){
    count = 0;
    counterScreen.innerHTML = count;
})

decreaseBtn.addEventListener("click", function(){
    if(count > 0){
        count--;
        counterScreen.innerHTML = count;
    }
})