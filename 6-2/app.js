var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}
alert("1から10まで足し算した結果は" + num + "です");


var max = 100;
var num = 1;
var count = 0;
do{
  num = num * 2;
  count = count + 1;
}while(num < max){
}
alert("2を掛け続けて" + max +"を超えるために必要だった回数は" + count + "回です");


var orange = 130;
var apple = 120;

if(orange < apple){
  alert("みかんはりんごより安い");
} else if(orange == apple){
  alert("みかんとりんごは同じ値段");
} else{
  alert("みかんはりんごより高い");
}

var str1 = "こんにちは";
var str2 = "太郎君";
alert(str1 + str2);

alert("Hello" + "World");

alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);


var int1 = 1;
var int2 = -10;
var float = 3.14;
var str1 = "javascriptを覚えよう"
alert(int1);
alert(int2);
alert(float);
alert(str1);
