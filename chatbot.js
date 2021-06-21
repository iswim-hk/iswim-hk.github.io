window.onload = auto_display;
function auto_display(){
    const mainDiv = document.getElementsByClassName("g-chatroom")[0];
    var botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response">Welcome to the iSWIM page. </span>`;
    mainDiv.appendChild(botDiv);

  /*
    var botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response"> Type "2" for know more  </span>`;
    mainDiv.appendChild(botDiv);


    var botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response"> Type "3" for products request </span>`;
    mainDiv.appendChild(botDiv);

    var botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response"> Type "4" for demo request </span>`;
    mainDiv.appendChild(botDiv);

    var botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response"> Any other help? </span>`;
    mainDiv.appendChild(botDiv); */
}

		document .querySelector(".openChatBtn") .addEventListener("click", openForm);
		 document.querySelector(".close").addEventListener("click", closeForm);
	  function openForm() {
		 document.querySelector(".openChat").style.display = "block";
		 document.querySelector(".g-chatroom").style.display = "block";
		 document.querySelector(".openChatBtn").style.display = "none";
	  }
	  function closeForm() {
		 document.querySelector(".openChat").style.display = "none";
		 document.querySelector(".openChatBtn").style.display = "block";
   
	  }


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input")
  inputField.addEventListener("keydown", function(e) {
      if (e.code === "Enter") {
        chatbot();
        /*
          let input = inputField.value;
          inputField.value = "";
          output(input);*/
  }
});
});


/*
$("#input").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#s-send").click();
    }
});
*/
function chatbot(){
    //alert("Welcome to use the chatbot function."); 
    console.log("You clicked the form and pressed the enter button!");
    var user_input = document.getElementById('input').value;
    document.getElementById('input').value="";
    console.log(`I typed '${user_input}'`)
   // document.getElementById("user").innerHTML = user_input;
    output(user_input);   
};

function compare(user_input_text,chatbot_reply, text) {
    var reply_text_show;
    for (var x = 0; x < user_input_text.length; x++) {
      for (var y = 0; y < user_input_text.length; y++) {
         
        if (user_input_text[x][y] == text) {
            reply_text = chatbot_reply[x];
            reply_text_show = reply_text[Math.floor(Math.random() * reply_text.length)];
        }
      }
    }
    return reply_text_show;
  }


  function output(input) {
    var product;
    var text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    var array = input.toLowerCase().split(" ");
    for(var i=0;i<array.length;i++){
      alert(array[i]);
    }
    
    text = text
      .replace(/i would like to ask /g, "")
      .replace(/I want to ask /g, "")
      .replace(/Please show me /g, "")
      .replace(/please /g, "")
      .replace(/ please/g, "");
    

  //compare arrays
  //then search keyword
  //then random alternative
  for(var i=0;i<array.length;i++){
    if (compare(user_input_text,chatbot_reply,array[i])) {
      product = compare(user_input_text,chatbot_reply,array[i]);
      break;
    
    } else if (text.match(/robot/gi)) {
      product = robot[Math.floor(Math.random() * robot.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

  }
    //update DOM
    addChat(input, product);
  }


  function addChat(input, product) {
    /*const mainDiv = document.getElementsByClassName("openChat")[0];*/

    const mainDiv = document.getElementsByClassName("g-chatroom")[0];
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `<span id="user-response">${input}</span> <img class="head_photo" src="user.png"> `;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<img class="head_photo" src="iswim_a.png"><span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
   /* speak(product);*/
  }

const user_input_text = [
    //0 
    ["hi", "hello",""],

    ["know more", "about us", "2", "know"],
    //1
    //2
    ["products", "product","3"],
    //3
    ["demo"],
    //4
    ["contacts","contact","phone","number","call","calling"]

    ];

  
    
    const chatbot_reply = [
    //0 
    ["Hello! Welcome to use the chat function!", "Hi! Welcome to iSWIM! <a href = index.html> Click the link to check</a>", "Hello! May I help you?"],
    //1
    [
        "That's great. <a href = about.html> Click the link and know more</a>",
        "iSWIM is a subsidiary of TRM (HK) Limited."
      ],
    //2
    ["products details", "product", "product will be provided here: <a href = #> click me to get the product</a> "],
    //3
    ["Demo will be provided here: <a href = #> click me to get the demo</a>"],
    //4
    ["Our contact number: 23456789"],

    ];
    
    const alternative = [
     "Please type your concern again. Thank you very much."
    ];
