const screen = document.getElementsByClassName("mainscreen")[0];
const btnbox = document.getElementsByClassName("buttonbox")[0];
const arr = ['1','2','3','4','5','6','7','8','9',"+",'0',"-","*","/","=","AC"]
const runarr = [];
let first=0;
let second = 0;
let result = 0;
let sum = 0;
const type = [];
for(i = 0;i<arr.length;i++){
        btnbox.innerHTML += `<span class="btn">${arr[i]}</span>`;
    }
input = () => {
    let btns = btnbox.getElementsByClassName("btn")
    console.log(btns);
    for(let i = 0;i<arr.length;i++){
        btns[i].addEventListener("click", () => {
            screen.innerHTML += `<span class="number">${arr[i]}</span>`; 
            runarr.push(arr[i]);
            switch(arr[i]){
                case '+':
                    console.log("+")
                    type.push('+');
                    for(let j = 0;j<runarr.length-1;j++){
                        first += runarr[j];
                    }
                    first = Number(first);
                    runarr.splice(0,runarr.length);
                    break;
                case '-':
                    console.log("-")
                    type.push('-');
                    for(let j = 0;j<runarr.length-1;j++){
                        first += runarr[j];
                    }
                    runarr.splice(0,runarr.length);
                    first = Number(first);
                    break;
                case '*':
                    console.log("*")
                    type.push('*');
                    for(let j = 0;j<runarr.length-1;j++){
                        first += runarr[j];
                    }
                    first = Number(first);
                    runarr.splice(0,runarr.length);
                    break;
                case '/':
                    console.log("/")
                    type.push('/');
                    for(let j = 0;j<runarr.length-1;j++){
                        first += runarr[j];
                    }
                    first = Number(first);
                    runarr.splice(0,runarr.length);
                    break;
            }
            if(arr[i] == "="){
                for(let j = 0;j<runarr.length-1;j++){
                    second += runarr[j];
                    second = Number(second);
                }
                if(type[0]=="+"){
                    result = first + second;
                }
                if(type[0]=="-"){
                    result = first - second;
                }
                if(type[0]=="*"){
                    result = first * second;
                }
                if(type[0]=="/"){
                    result = first / second;
                }
                runarr.splice(0,runarr.length)
                screen.innerHTML = "";
                first = 0;
                second = 0;
                screen.innerHTML += result;
                type.splice(0,type.length);
                first = result;
            }
            if(arr[i] == "AC"){
                screen.innerHTML = "";
                type.splice(0,type.length);   
                runarr.splice(0,runarr.length);
            }
        })
    }
}
input();