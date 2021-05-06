const screen = document.getElementsByClassName("mainscreen")[0];
const btnbox = document.getElementsByClassName("buttonbox")[0];
const arr = ['1','2','3','4','5','6','7','8','9',"+",'0',"-","*","/","=","AC"]
let inputstr = [];
let num = 0;
let doing = [];
let calc = 0;
for(i = 0;i<arr.length;i++){
        btnbox.innerHTML += `<span class="btn">${arr[i]}</span>`;
}
input = () => {
    let btns = btnbox.getElementsByClassName("btn")
    console.log(btns);
    for(let i = 0;i<arr.length;i++){
        btns[i].addEventListener("click", () => {
            screen.innerHTML += `<span class="number">${arr[i]}</span>`;//버튼 생성
            inputstr.push(arr[i]);//입력받기
            if(arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/"){//입력받은 수 배열에 넣기
                for(let j = 0;j<inputstr.length-1;j++){
                    num += inputstr[j];
                    num = Number(num);
                }
                doing.push(num);
                doing.push(arr[i]);
                num = 0;
                inputstr.splice(0,inputstr.length);
            }
            if(arr[i] == "="){// "="을 누르면 계산 시작
                for(let j = 0;j<inputstr.length-1;j++){
                    num += inputstr[j];
                    num = Number(num);
                }
                doing.push(num);
                doing.push(arr[i]);
                num = 0;
                inputstr.splice(0,inputstr.length);
                for(let i = 0;i<doing.length;i++){
                    if(doing[i] == "*"){
                        calc = doing[i-1] * doing[i+1];
                        doing[i+1] = calc;
                        doing.splice(i-1,2);
                        console.log(doing);
                    }
                }
                for(let i = 0;i<doing.length;i++){
                    if(doing[i] == "/"){
                        calc = doing[i-1] / doing[i+1];
                        doing[i+1] = calc;
                        doing.splice(i-1,2);
                    }
                }
                for(let i = 0;i<doing.length;i++){
                    if(doing[i] == "+"){
                        calc = doing[i-1] + doing[i+1];
                        doing[i+1] = calc;
                        doing.splice(i-1,2);
                    }
                }
                for(let i = 0;i<doing.length;i++){
                    if(doing[i] == "-"){
                        calc = doing[i-1] - doing[i+1];
                        doing[i+1] = calc;
                        doing.splice(i-1,2);
                    }
                }
                screen.innerHTML = "";
                screen.innerHTML += calc;
                doing.splice(0,doing.length);   
                doing[0] = calc;
            }
            if(arr[i] == "AC"){
                screen.innerHTML = "";
                calc = 0;
                doing = [];
                num = 0;
                inputstr = [];
            }
       })   
    }
}
input();