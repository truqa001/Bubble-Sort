//init variables for a column
let array;
let arraySize;
let X;
const WIDTH = 5;
let count;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    count=0;
    frameRate(10);
    hideElement("completed")


    //number of columns
    arraySize = parseInt(width/WIDTH);
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
    background('#13001c');

    X = 0;

    if (count >= arraySize){
        showElement("completed")
        pausing();
        noLoop();
    }

    //render columns everytime finish a sort
    renderColumns();



    //bubble sort
    for (var j=0;j<array.length;j++){
        if (array[j] > array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;

        }
    }

    count++;
}

function renderColumns(){
    for (var i=0; i<array.length;i++){
        rect(X,height-array[i],WIDTH,array[i]);
        X += WIDTH;
    }

}

//buttons functions
function reset(){
    pausing();
    setup();
    draw();
}
function start(){
    playing();
    loop();
}
function pause() {
    pausing();
    noLoop();
}

function playing(){
    hideElement("start");
    showElement("pause");
}
function pausing(){
    showElement("start");
    hideElement("pause");
}

function showElement(id){
    document.getElementById(id).style.display = "block";
}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}