//init variables for a column
let array;
let X;
const WIDTH = 5;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(8);

    //number of columns
    let arraySize = parseInt(width/WIDTH);
    array = new Array(arraySize);

    //init heights for objects
    for (var i=0;i<array.length;i++){
        let HEIGHT = parseInt(random(10,height-100));
        array[i] = HEIGHT;
    }

    noLoop();


}

//update frame
function draw() {
   /* xPos = xPos + 1;
    line(xPos, 0 , xPos, height);*/
    background(0);

    X = 0;

    //bubble sort
   for (var i=0;i<array.length;i++){

       //init rect objects each time sort
       for (i; i<array.length;i++){
           rect(X,height-array[i],WIDTH,array[i]);
           X += WIDTH;
       }

       for (var j=0;j<array.length;j++){
           if (array[j] > array[j+1]){
               let temp = array[j];
               array[j] = array[j+1];
               array[j+1] = temp;

           }
       }

   }


}

//buttons functions
function reset(){
    setup();
    draw();
}
function start(){
    document.getElementById('start').style.display = "none";
    document.getElementById('pause').style.display = "block";
    loop();
}
function pause() {
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
    noLoop();
}

