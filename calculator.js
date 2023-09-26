let result=document.getElementById("demo");

function calculate(v){
    result.value +=v;

}

function ResultEqual(){
    result.value=eval(result.value);
    console.log(eval(result.value))
}
// input.addEventListener("keypress",function(event){
// if(event.key === "Enter"){
//     event.preventDefault();
// }
// });
input.addEventListener('keyup',(e)=>{
    if(e.keycode === 13){
        ResultEqual()
    }else {display()}
})


function clr(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
function keydownFunction(){
    document.getElementById("demo")
}
function keyupFunction(){
    document.getElementById("demo")
}
// input.addEventListener("keyup",display);
function display(){
    localStorage.setItem('value',input.value);
    demo.innerHTML = localStorage.getItem("value")
}

