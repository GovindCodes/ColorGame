var numofSquares =6;
var color = generateRandomColors(numofSquares);

var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var displaycolor = document.querySelector("#DisplayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset= document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn")


easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numofSquares=3;
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    for(var i=0; i< squares.length; i++){
        if(color[i]){
        squares[i].style.backgroundColor= color[i];
    }
    else{
       squares[i].style.display = "none";
    }
    }
    
})

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numofSquares =6;
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor= color[i];
        squares[i].style.display = "block";
    }

   
})

reset.addEventListener("click", function(){
    console.log("clicked")
    // generate all new colors
    color = generateRandomColors(numofSquares);
    // pick new random color
    pickedColor = pickColor();
    // display new piked color
    displaycolor.textContent =pickedColor;
    reset.textContent= "New Colors"

    messageDisplay.textContent = "";
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor= color[i];
    }
    h1.style.backgroundColor ="steelblue";
})

displaycolor.textContent =pickedColor;

for(var i =0; i< squares.length; i++){
    // Add initial colors to square
    squares[i].style.backgroundColor = color[i];

    // Add event listener to the squares
    squares[i].addEventListener("click", function(){
        var clickedColor =this.style.backgroundColor;
        console.log(pickedColor, clickedColor)
        if(clickedColor ===pickedColor){
           messageDisplay.textContent = "Correct";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           reset.textContent ="play again?";
        }
        else{
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "try again"
        }
    })
}

function changeColors(colors){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
      
}

function generateRandomColors(num){
    var arr = [];
 for(var i=0; i<num; i++){
    arr.push(ThreeRandomValues());
 }
 return arr;
}

function ThreeRandomValues(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);

    return "rgb("+r+ ", "+ g+", "+b+")";

} 