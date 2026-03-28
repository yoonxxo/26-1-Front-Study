const number = document.getElementById("counting-num"); //숫자 0을 코드로 표현
const incButton = document.getElementById("increase"); 
const resetButton = document.getElementById("reset");
const decButton = document.getElementById("decrease"); 
const incTenButton = document.getElementById("increase_ten");
const decTenButton = document.getElementById("decrease_ten");


let count = 0;
number.textContent = count;

function increaseCount() {
 count++; // count = count + 1
 number.textContent = count; // 숫자 변화 반영
}

function resetCount(){
    count=0;
    number.textContent = count; 
}

function decreaseCount(){
    count--;
    number.textContent = count; 
}   

function increaseTenCount(){
    count+=10;
    number.textContent = count;
}

function decreaseTenCount(){
    count-=10;
    number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
resetButton.addEventListener("click", resetCount);
decButton.addEventListener("click", decreaseCount); //"click" 이벤트 발생시 함수 실행
incTenButton.addEventListener("click", increaseTenCount);
decTenButton.addEventListener("click", decreaseTenCount);