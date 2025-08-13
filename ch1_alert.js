let addingAllButtons = document.getElementsByClassName("write");
let addingAllNumbers = document.querySelectorAll(".number");
let addingAllActions = document.getElementsByClassName("action");
let input = document.getElementById("inp");
let info = document.getElementById("info");
document.getElementById("clr").addEventListener("click", clearTheForm);
document.getElementById("equals").addEventListener("click", calculate);


for(let i = 0; i < addingAllButtons.length; i++){
    addingAllButtons[i].addEventListener("click", addToForm);
    addingAllButtons[i].addEventListener("click", writeInfo);
}

function addToForm(){
    if(this.textContent === "+" || this.textContent === "-" || this.textContent === "*" || this.textContent === "/"){
        input.value = "";
    }
    else{
        input.value += this.textContent; 
    }
}

function writeInfo(){

    if(this.textContent === "+" || this.textContent === "-" || this.textContent === "*" || this.textContent === "/"){
        if(info.textContent == "Навигация по вычислению"){
            info.textContent = "";
            info.textContent += " "; 
        }
        info.textContent += " ";
    }

    if(info.textContent == "Навигация по вычислению"){
        info.textContent = this.textContent;
    }
    else{
        info.textContent += this.textContent;
    }
}

function calculate(){
    let str = info.textContent;
    let arr = eval(str);
    input.value = arr;

}
function clearTheForm(){
    input.value = "";
    if(info.textContent != "Навигация по вычислению"){
        info.textContent = "Навигация по вычислению";
    }
}
