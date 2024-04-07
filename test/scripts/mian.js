
let myimage=document.querySelector("img");
myimage.onclick=function(){
    let mysrc=myimage.getAttribute("src");
    if(mysrc === "images/jj.png"){
        myimage.setAttribute("src","images/llj.png") ;}

        else{
            myimage.setAttribute("src","images/jj.png");
        }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }
    else{localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;}
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
    setUserName();
};




