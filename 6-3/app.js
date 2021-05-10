var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーいずれかを入力してください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand +"です。\n結果は" + judge +"です。");
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3 );
  var js_hand;

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

function winLose(user, js){
  var WinLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      WinLoseStr = "あいこ";      
    } else if(js == "チョキ"){
      WinLoseStr = "勝ち";
    } else if(js == "パー"){
      WinLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      WinLoseStr = "負け";
    } else if(js == "チョキ"){
      WinLoseStr = "あいこ";
    } else if(js == "パー"){
      WinLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      WinLoseStr = "勝ち";
    } else if(js == "チョキ"){
      WinLoseStr = "負け";
    } else if(js == "パー"){
      WinLoseStr = "あいこ";
    }
  }
  return WinLoseStr;
}
