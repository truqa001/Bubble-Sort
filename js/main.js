//init variables for a column
let array;
let X;
const WIDTH = 5;


//button variables
const BUTTON_X = 10;
const BUTTON_Y = 30;
const BUTTON_WIDTH = 100;
const BUTTON_HEIGHT = 40;

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

    //init buttons
    let start_button = createButton("Start");
    start_button.size(BUTTON_WIDTH,BUTTON_HEIGHT);
    start_button.position(BUTTON_X,BUTTON_Y);
    start_button.mouseClicked(start);

    let stop_button = createButton("Stop");
    stop_button.size(BUTTON_WIDTH,BUTTON_HEIGHT);
    stop_button.position(BUTTON_X+BUTTON_WIDTH,BUTTON_Y);
    stop_button.mouseClicked(stop);

    let reset_button = createButton("Reset");
    reset_button.size(BUTTON_WIDTH,BUTTON_HEIGHT);
    reset_button.position(BUTTON_X+BUTTON_WIDTH*2,BUTTON_Y);
    reset_button.mouseClicked(reset);

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
    loop();
}
function stop() {
    noLoop();
}
