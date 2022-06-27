//Q1
var user1=prompt("Enter 1st player Name");
var toss1=prompt("Enter H/T");
var user2=prompt("Enter 2nd player Name");
var toss2=prompt("Enter H/T");

var num;
num=Math.floor(Math.random() * 2) + 1;

if(num===1 && toss1==="H"){
    alert( user1 + "Wins");
}
else if(num===1 && toss2==="H"){
    alert( user2 + "Wins");
}
else if(num===2 && toss1==="T"){
    alert( user1 + "Wins");
}
else if(num===2 && toss2==="T"){
    alert( user2 + "Wins");
}
//Q2
var num;
num=Math.floor(Math.random() * 6) + 1;

alert(num)
//Q3
var num1=["0","1","2","3","4","5","6","7","8","9"]
var num3=["0","1","2","3","4","5","6","7","8","9"]
var spe=["@","!","$","%"]
var ALPHA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Cap=ALPHA[Math.floor(Math.random() * ALPHA.length) ];
var num2=num3[Math.floor(Math.random() * num3.length) ];
var special=spe[Math.floor(Math.random() * spe.length) ];
var small=alpha[Math.floor(Math.random() * alpha.length) ];
var num1=num1[Math.floor(Math.random() * num1.length) ];
var special1=spe[Math.floor(Math.random() * spe.length) ];
var Cap1=ALPHA[Math.floor(Math.random() * ALPHA.length) ];

var small1=alpha[Math.floor(Math.random() * alpha.length) ];
document.write(num1+special+num2+special1+Cap+small+Cap +small1)
