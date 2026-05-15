
let text = "hello world";
let ans = "";

for(let i = 0; i<text.length; i++){
    if(i == 0 || text[i-1] == " "){
      ans +=  text[i].toUpperCase(); 
    }else{
        ans += text[i];
    }
}

console.log(ans)

