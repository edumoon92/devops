// import the robotjs library
var robot = require('robotjs');

function main() {
    console.log('Starting...');

    sleep(1000); 

    // open chrome browser
    robot.moveMouse(100, 1060); // search bar in windows os
    sleep(2000); 
    robot.mouseClick('left');
    sleep(2000); 
    robot.typeString("chrome");
    robot.keyTap("enter"); // browser max

    robot.keyTap("f6"); // go to url
    sleep(2000); 
    robot.typeString("https://tetris.com/play-tetris");
    robot.keyTap("enter"); // browser max

    sleep(10000); 

    // Press enter.
    robot.keyTap("f11"); // browser max

    robot.moveMouse(1025, 530); // print screen, ctrl+v to paint play button position
    sleep(1000); 
    robot.mouseClick('left');

    console.log('Done.');
}

// print screen 
// tetris game
// https://tetris.com/play-tetris

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();