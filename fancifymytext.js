var button = document.getElementById("Bigger");
var button2 = document.getElementById("Moo");


/*Modify your JS file to wrap the alert into a function*/
function onclick() {
  button.addEventListener("click",
    function () {
      alert("Hello, world!")
    })

}

  function Moo () {
      var init = document.getElementById("myText");
      var stringValue = init.value;
      var parts = stringValue.split(".");
      var joinedString = parts.join("-Moo.");
      init.value = joinedString;
      console.log(joinedString);
    }



  /*Add an onclick handler attribute to the "Bigger" button that calls your new function*/
  document.getElementById('Bigger').addEventListener('click',
    onclick);
  document.getElementById('Moo').addEventListener('click',
    onclick);


function SizeUp () {

  document.getElementById("myText").style.fontSize = "24pt";
}

function Boring () {

  document.getElementById("myText").style.fontSize = "1em";
  document.getElementById("myText").style.color = "black";
  document.getElementById("myText").style.fontWeight = "normal";
  document.getElementById("myText").style.fontFamily = "normal";
  document.getElementById("myText").style.textDecoration = "none";

}


function Fancy () {

  document.getElementById("myText").style.color = "blue";
  document.getElementById("myText").style.fontFamily = "Comic Sans MS";
  document.getElementById("myText").style.fontWeight = "bold";
  document.getElementById("myText").style.textDecoration = "underline";

}


