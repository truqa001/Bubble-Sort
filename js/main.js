let array;
let X;
const WIDTH = 5;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10);

    //number of columns
    let arraySize = parseInt(width/WIDTH);
    array = new Array(arraySize);

    //init heights for objects
    for (var i=0;i<array.length;i++){
        let HEIGHT = parseInt(random(100,height-100));
        array[i] = HEIGHT;
    }

    //init rect objects

}

function draw() {
   /* xPos = xPos + 1;
    line(xPos, 0 , xPos, height);*/
    background(0);

    X = 0;


   for (var i=0;i<array.length;i++){

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


function randomHeight(){
    return random(100, window.outerHeight-100);
}


function bubble_sort(array){
    for (var i=0;i<array.length;i++){
        for (var j=0;j<array.length;j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

