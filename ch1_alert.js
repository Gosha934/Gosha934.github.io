const rusAlphabet = [
    "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т",
    "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я" 
];



let randomWords = {
    Овощи: "перец",
    Лабинск: "артур геворкян",
    Васаби: "перекрёсток",
    Марк_Лутков: "конченный",
    Фрукты: "яблочко",
    Мелкий_пиздюк: "мефедроновый карлик",
    Хутор_кубанский: "площадка и кубаночка",
    Узбекистан: "женечка",
    Чипиздрик: "мефедрон"
};
let arrayOfRandomWords = Object.entries(randomWords);


let attempt = document.getElementById("attempts");
let theme = document.getElementById("newTheme");
let word = document.getElementById("word");
let myAlphabet = document.getElementById("alphabet");
let random = Math.floor(Math.random() * 9);
let newReload = document.getElementById("reload");
let startAgain = document.getElementById("startAgain");
let lose = document.getElementById("lose");
let mainGame = document.getElementById("g");
let w = document.getElementById("finalWord");
let winblt = document.getElementById("winAndAgain")
let win = document.getElementById("win");
let a = 7;

theme.textContent = arrayOfRandomWords[random][0];
let splitWords = arrayOfRandomWords[random][1].split("");
let wr = arrayOfRandomWords[random][1];
w.textContent = wr;

// console.log(mainWord);

for(let i = 0; i < splitWords.length; i++){
    let newP = document.createElement("p");
    word.append(newP);
    if(splitWords[i] === " "){
        word.children[i].textContent = " ";
        word.children[i].className = "newP";
    }
    else{
        word.children[i].textContent = "_";
        word.children[i].className = "newP";
    }
    
    
}
for(let i = 0; i < 33; i++){
    myAlphabet.children[i].textContent = rusAlphabet[i];
    myAlphabet.children[i].addEventListener("click", add);
}
newReload.addEventListener("click", reloading);
startAgain.addEventListener("click", reloading);
winblt.addEventListener("click", reloading);
let fArray = [];

function add(){
    for(let i = 0; i < splitWords.length; i++){
        if(this.textContent === splitWords[i]){
            word.children[i].textContent = this.textContent;
            if(word.children[i].textContent != "_")
            {
                fArray[i] = this.textContent;
            }
        }
}

function removeSpaces(element){
    return element != " ";
}

let arrayWithoutSpaces = splitWords;
let a = arrayWithoutSpaces.filter(removeSpaces);

if(fArray.join("") === a.join("")){
    mainGame.style.display = "none";
    win.style.display = "block";
}

    for(let i = 0; i < splitWords.length; i++){
        if(splitWords.indexOf(this.textContent) === -1){
            attempt.textContent = a - 1;
            if(attempt.textContent === "0"){
                mainGame.style.display = "none";
                lose.style.display = "block";
            }
        }
    }
    a = attempt.textContent;
    for(let i = 0; i < splitWords.length; i++){
        if(this.textContent != splitWords[i]){
            this.textContent = "_";
        }
}
}

function reloading(){
    window.location.reload();
}


