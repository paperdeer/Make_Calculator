const doing = [1,"+",2,"*",3,"-",4,"/",5];
let calc = 0;
for(let i = 0;i<doing.length;i++){
    if(doing[i] == "*"){
        calc = doing[i-1] * doing[i+1];
        doing[i+1] = calc;
        doing.splice(i,1);
        doing.splice(i-1,1);
        console.log(doing);
    }
}
for(let i = 0;i<doing.length;i++){
    if(doing[i] == "/"){
        calc = doing[i-1] / doing[i+1];
        doing[i+1] = calc;
        doing.splice(i,1);
        doing.splice(i-1,1);
    }
}
for(let i = 0;i<doing.length;i++){
    if(doing[i] == "+"){
        calc = doing[i-1] + doing[i+1];
        doing[i+1] = calc;
        doing.splice(i,1);
        doing.splice(i-1,1);
        console.log(doing);
    }
}
for(let i = 0;i<doing.length;i++){
    if(doing[i] == "-"){
        calc = doing[i-1] - doing[i+1];
        doing[i+1] = calc;
        doing.splice(i,1);
        doing.splice(i-1,1);
        console.log(doing);
    }
}
console.log(doing);