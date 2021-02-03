addEventListener('keyup',function () {
  document.getElementById('display').placeholder="";
  document.getElementById('display').focus();
  setCal();
});



function sin() {
    if(document.getElementById("display").value == "")
    {
        document.getElementById("display").placeholder= "Please enter the degree first";
    }
    else {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = Math.sin(tempStore);
    }
}

function cos() {
    if(document.getElementById("display").value == "")
    {
        document.getElementById("display").placeholder= "Please enter the degree first";
    }
    else {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = Math.cos(tempStore);
    }
}
function tan() {
    if(document.getElementById("display").value == "")
    {
        document.getElementById("display").placeholder= "Please enter the degree first";
    }
    else {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = Math.tan(tempStore);
    }
}

function setback() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
    // }
    //alert(length);
}

function setCal() {

        document.getElementById("display").placeholder = "";

        var input = document.getElementById("display");

        input.addEventListener("keyup", function(event) {
          // Number 13 is the "Enter" key on the keyboard
          if (event.keyCode === 13) {

            event.preventDefault();
            document.getElementById('equal').onclick();
          }
        });

}

function set(op) {

  document.getElementById("display").value += op;

}

function setOp() {

  document.getElementById("display").value = null;

}

var equal = document.getElementById("equal");

equal.onclick =function () {

  if (document.getElementById("display").value == "" ) {
    alert("Enter value to calculate");
  } else {
    var temp = document.getElementById("display").value;
    var result = eval(temp);
    document.getElementById("display").value = 'Ans = ' + result;
  }
}