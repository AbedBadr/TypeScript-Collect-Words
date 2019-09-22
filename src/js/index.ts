let words: string[] = [];

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");
let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showButton");
showButton.addEventListener("click", showWords);
let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveButton");
saveButton.addEventListener("click", saveWord);
let clearButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearButton");
clearButton.addEventListener("click", clearWords);
let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("outputDiv");

function showWords():void {
    if (words.length > 0)
    {
        outputElement.style.fontStyle = "normal";
        outputElement.innerHTML = words.toString();
    }
    else
    {
        words.push("empty");
        outputElement.style.fontStyle = "italic";
        outputElement.innerHTML = words.toString();
        words = [];
    }
}

function saveWord(): void{
    let word: string = inputElement.value;
    words.push(word);
}

function clearWords(): void{
    words = [];
}