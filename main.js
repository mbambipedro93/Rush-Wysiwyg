<<<<<<< HEAD:main1.js
//import {av} from './functions.js';
//alert(av);
//a();
console.log('started');

btn1 = 0;
btn2 = 0;
btn3 = 0;

const textarea = document.querySelector('textarea');
document.getElementById('btn1').onclick = function() {
    if(btn1 == 0){
        btn1 = 1;
        document.getElementById('btn1').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.fontWeight = "bold";
    }
    else{
        btn1 = 0;
        document.getElementById('btn1').style.backgroundColor = "transparent";
        textarea.style.fontWeight = "normal";
    }
};

document.getElementById('btn2').onclick = function() {
    if(btn2 == 0){
        btn2 = 1;
        document.getElementById('btn2').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.fontStyle = "italic";
    }
    else{
        btn2 = 0;
        document.getElementById('btn2').style.backgroundColor = "transparent";
        textarea.style.fontStyle = "normal";
    }
};

document.getElementById('btn3').onclick = function() {
    if(btn3 == 0){
        btn3 = 1;
        document.getElementById('btn3').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.textDecoration = "line-through";
    }
    else{
        btn3 = 0;
        document.getElementById('btn3').style.backgroundColor = "transparent";
        textarea.style.textDecoration = "none";
    }
};


document.getElementById('btn4').onclick = function() {
        document.getElementById('btn4').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.textAlign = "left";
        document.getElementById('btn5').style.backgroundColor = "transparent";
        document.getElementById('btn6').style.backgroundColor = "transparent";
};
document.getElementById('btn5').onclick = function() {
        document.getElementById('btn5').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.textAlign = "center";
        document.getElementById('btn4').style.backgroundColor = "transparent";
        document.getElementById('btn6').style.backgroundColor = "transparent";


        var elem = document.createElement("img");
        elem.setAttribute("src", "img/black-stacked-stones.jpg");
        elem.setAttribute("height", "60");
        elem.setAttribute("width", "60");
        elem.setAttribute("alt", "Flower");
        textarea.appendChild(elem);
        
};
document.getElementById('btn6').onclick = function() {
        document.getElementById('btn6').style.backgroundColor = "rgba(68, 68, 68, 0.8)";
        textarea.style.textAlign = "right";
        document.getElementById('btn5').style.backgroundColor = "transparent";
        document.getElementById('btn4').style.backgroundColor = "transparent";
};


document.addEventListener('input', function (event) {
if(document.getElementById('px').value == 10){
    textarea.style.fontSize = "10px";
}
if(document.getElementById('px').value == 12){
    textarea.style.fontSize = "12px";
}
if(document.getElementById('px').value == 14){
    textarea.style.fontSize = "14px";
}
if(document.getElementById('px').value == 16){
    textarea.style.fontSize = "16px";
}
if(document.getElementById('px').value == 18){
    textarea.style.fontSize = "18px";
}
if(document.getElementById('px').value == 24){
    textarea.style.fontSize = "24px";
}
if(document.getElementById('px').value == 32){
    textarea.style.fontSize = "32px";
}

if(document.getElementById('colors').value == 1){
    document.getElementById('colors').style.borderColor = "rgb(170, 170, 170)";
    textarea.style.color = "white";
    textarea.style.backgroundColor = "rgba(19, 19, 19, 0.507)";
    
}
if(document.getElementById('colors').value == 2){
    document.getElementById('colors').style.borderColor = "black";
    textarea.style.color = "black";
    textarea.style.backgroundColor = "rgba(110, 110, 110, 0.507)";
}
if(document.getElementById('colors').value == 3){
    document.getElementById('colors').style.borderColor = "darkblue";
    textarea.style.color = "blue";
    textarea.style.backgroundColor = "rgba(19, 19, 19, 0.507)";
}
if(document.getElementById('colors').value == 4){
    document.getElementById('colors').style.borderColor = "darkred";
    textarea.style.color = "red";
    textarea.style.backgroundColor = "rgba(19, 19, 19, 0.507)";
}
if(document.getElementById('colors').value == 5){
    document.getElementById('colors').style.borderColor = "darkgreen";
    textarea.style.color = "green";
    textarea.style.backgroundColor = "rgba(19, 19, 19, 0.507)";
}
});

>>>>>>> 698ecb8446121a03d6b2b48b9524f342701d7c9d:script.js
