'use strict'

var array =['anna karenina','madame bovary','war and peace','lolita','the adventures of huckleberry','hamlet','the great gatsby','in search of lost time','the stories of anton chekhov','middlemarch'];

var input = document.querySelector('input');

var btn = document.querySelector('button');

var h = document.querySelector('h3');
var letters = [];

for(var i = 65; i < 91; i++){
    letters.push(String.fromCodePoint(i));
}

var convert = '';

var choosenNovel = '';

var gues = 5;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function enterLetter(event) {
    var x = event.keyCode;
    var y = String.fromCharCode(x);
    var str = input.value;
    var freq = 0;
    if(choosenNovel.includes(y)){
        for(var i = 0; i < choosenNovel.length; i++){
            if(choosenNovel[i] == y){
                str = str.replaceAt(i,y);
                input.value = str
                if(str.includes('.') == false){
                    h.textContent = 'good job';
                    setTimeout(reset,2000);
                }
            }
        }
    }else{
        gues--;
        if(gues == 0){
            h.textContent = `Nice try! The word was"${choosenNovel}"`; document.querySelector('body').removeEventListener('keypress',enterLetter);
        }
        else{
            h.textContent = `gues left :${gues}`
        }
    }
}
//alert(letters);
function reset(){
    gues = 5;
    function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    choosenNovel = (array[randomNumber(0,9)]);

    convert = '';
    for(var i = 0; i < choosenNovel.length; i++){
        if(choosenNovel[i] != ' '){
            convert = convert.concat('.');
        }else{
            convert = convert.concat(' ');
        }
    }
    
    input.value = convert;
document.querySelector('body').addEventListener('keypress',enterLetter);   
    h.textContent = 'guess left : 5';
}



btn.addEventListener('click',reset);

