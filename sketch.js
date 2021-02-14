var exam ;
var girl;
var backgroundImg,girlImg,examImg,booksImg;
var booksGroup;;
var math,science,sst;
var bg;


function preload(){
backgroundImg = loadImage("school.jpg");
examImg = loadImage("1538.png_300.png");
math = loadImage("71-712950_math-clipart-borders-transparent-math-clipart.png")
science = loadImage("download (1).png");
sst = loadImage("cartoon-history-book-illustration_csp34657322.jpg")
girlImg = loadImage("94917405-vector-flat-frightened-teenage-girl-in-green-dress-running-away-female-cartoon-character-chasing-loo.jpg");
}
function setup(){
    createCanvas(800,800)
    booksGroup = new Group();
    girl= createSprite(600,600,70,70);
    bg = createSprite(400,400,800,800);




}
function draw(){
    background("white");
    text(mouseX+','+mouseY,mouseX,mouseY);
   
   
 
    //exam.addImage(examImg);
    girl.addImage(girlImg);
    bg.addImage(backgroundImg);
    girl.scale = 0.1;

   // console.log(girl.x, girl.y)
    //exam.scale= 0.5;

    girl.depth = bg.depth;
    girl.depth = girl.depth +1;
    console.log(girl.depth, bg.depth )
  
    if(keyDown(UP_ARROW)){
      girl.velocityY = -5;
      girl.velocityX = 0;
    }
    if(keyDown(LEFT_ARROW)){
      girl.velocityY = 0;
      girl.velocityX = -3;
    }

    books();
    drawSprites();

}
function books(){
if(frameCount% 60 === 0){
  exam= createSprite(200,200,70,70);
  
  exam.velocityX = -6;
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1 : exam.addImage(examImg)
    break;
    case 2 : exam.addImage(math)
    break;
    case 3 : exam.addImage(science)
    break;
    case 4 : exam.addImage(sst)
    break;
    default : break;
  }
  booksGroup.add(exam)
}
}