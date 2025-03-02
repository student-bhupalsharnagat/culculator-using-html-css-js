let buttons=document.querySelectorAll(".culculator-btn");
let inputbox=document.querySelector(".input-dispaly");  

let string="";

let array=Array.from("buttons")
buttons.forEach((button)=>{
button.addEventListener("click",(evt)=>{
    console.log(evt.target)
if(evt.target.innerHTML=="="){
    string=eval(string);
    inputbox.value=string;
}
else if (evt.target.innerHTML=="C"){
    string = "";
inputbox.value=string;
}
else{
string=string+evt.target.innerHTML;
inputbox.value=string;
}
})
})


