const screen = document.getElementsByClassName("mainscreen")[0];
const btnbox = document.getElementsByClassName("buttonbox")[0];
const arr = ['1','2','3','4','5','6','7','8','9',"+",'0',"-","*","/","=","AC"]
const runarr = [];
let sum = 0;
for(i = 0;i<arr.length;i++){
        btnbox.innerHTML += `<span class="btn">${arr[i]}</span>`;
    }
input = () => {
    let btns = btnbox.getElementsByClassName("btn")
    console.log(btns);
    for(let i = 0;i<arr.length;i++){
        btns[i].addEventListener("click", () => {
            if(arr[i] == "="){
                console.log(eval(screen.innerHTML));
                sum = eval(screen.innerHTML);
                screen.innerHTML = "";
                screen.innerHTML += sum
            }
            if(arr[i] == "AC"){
                screen.innerHTML="";
            }
            if((arr[i] != "=") && (arr[i] != "AC")){
                screen.innerHTML += arr[i];
                runarr.push(arr[i]);
            }
            })
    }
}
input();