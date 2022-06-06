var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
