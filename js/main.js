function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    const WIDTH = 20;
    let X = 0;

    let array = [];


    let number_of_columns = parseInt(window.innerWidth/WIDTH);
    print(number_of_columns);

    for (var i=0; i<number_of_columns;i++){
        let HEIGHT = random(100,window.innerHeight-100);
        let block = rect(X,window.innerHeight-HEIGHT,WIDTH,HEIGHT);
        array.push(block);
        X += WIDTH;
    }

}
function draw() {

}


function randomHeight(){
    return random(100, window.outerHeight-100);
}