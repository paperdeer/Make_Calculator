const screen = document.getElementsByClassName("mainscreen")[0];
const btnbox = document.getElementsByClassName("buttonbox")[0];
const arr = ['1','2','3','4','5','6','7','8','9',"+",'0',"-","*","/","=","AC"]
const runarr = [];
let first=0;
let second = 0;
let result = 0;
let eachnum = [];
let sum = 0;
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
            console.log(runarr.length)
            console.log(runarr)
            if(arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/"){
                for(let j = 0;j<runarr.length-1;j++){
                    first += runarr[j];
                    first = Number(first)
                    console.log(runarr[j]);
                }
                first = Number(first);
                eachnum.push(first);
                eachnum.push(arr[i]);
                // runarr.splice(1,runarr.length);
                first = 0;
                console.log(first);
            }
            if(arr[i] == "="){
                for(let j = 0;j<runarr.length-1;j++){
                    first = 0;
                    first += runarr[j];
                    first = Number(first)
                    console.log(runarr)
                }
                
                first = Number(first);
                eachnum.push(first);
                first = 0;
                for(let i = 0;i<eachnum.length;i++){
                    if(eachnum[i] == "+"){
                        result += Number(eachnum[i-1]) + Number(eachnum[i+1]);
                        console.log(eachnum)
                        // eachnum = [];
                        // eachnum[0] = result;
                        eachnum[i+1] = result;
                        break;
                    }
                    if(eachnum[i] == "-"){
                        result += Number(eachnum[i-1]) - Number(eachnum[i+1]);
                        console.log(eachnum)
                        // eachnum = [];
                        // eachnum[0] = result;
                        eachnum[i+1] = result;
                        break;
                    }
                    if(eachnum[i] == "*"){
                        result += Number(eachnum[i-1]) * Number(eachnum[i+1]);
                        console.log(eachnum)
                        // eachnum = [];
                        // eachnum[0] = result;
                        eachnum[i+1] = result;
                        break;
                    }
                    if(eachnum[i] == "/"){
                        result += Number(eachnum[i-1]) /Number(eachnum[i+1]);
                        console.log(eachnum)
                        // eachnum = [];
                        // eachnum[0] = result;
                        result[i+1] = result;
                        break;
                    }
                }
                screen.innerHTML = result;
            }
        })
    }
}
input();