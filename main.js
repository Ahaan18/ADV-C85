canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
imgarray = ["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
randomimg = Math.floor(Math.random()*5);
console.log(randomimg);
bpic = imgarray[randomimg];
console.log("Background image is: "+bpic);
rpic = "rover.png";
rwidth = 100;
rheight = 90;
roverx = 10;
rovery = 10;
function canva(){
    bpicimg = new Image();
    bpicimg.onload = mars;
    bpicimg.src = bpic;
    rpicimg = new Image();
    rpicimg.onload = rov;
    rpicimg.src = rpic;
}
function mars(){
    ctx.drawImage(bpicimg,0,0,canvas.width,canvas.height);
}
function rov(){
    ctx.drawImage(rpicimg,roverx,rovery,rwidth,rheight);
}
window.addEventListener("keydown", keydownfunction);
function keydownfunction(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down(); console.log("down"); 
}
if(keyPressed == '37')
{
left(); console.log("left"); 
}
if(keyPressed == '39')
{
right(); console.log("right"); 
}
}
function down(){
    if(rovery<=500){
        rovery = rovery + 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); } 
}
function up(){
    if(rovery>=0){
        rovery = rovery - 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); } 
        
}
function left(){
    if(roverx>=0){
        roverx = roverx - 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); }
}
function right(){
    if(roverx<=700){
        roverx = roverx + 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); }  
}