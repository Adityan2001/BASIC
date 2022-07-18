

const circle=require('./circle');
const triangle=require('./triangle');
const square=require('./square');
const rectangle=require('./rectangle');
function solveCircle(r){
    console.log("Solving Circle");
    if(r<=0)
        console.log("Circle dimensions invalid");
    else{
        console.log("Area",circle.area(r));
        console.log("Perimeter",circle.perimeter(r));
    }
}

function solvetriangle(x,y,z){
    console.log("Solving Triangle");
    if(x<=0||y<=0||z<=0)
        console.log("Triangle dimensions invalid");
    else{
        var s=(x+y+z)/2;
        console.log("Area",triangle.area(x,y,z,s));
        console.log("Perimeter",triangle.perimeter(x,y,z));
    }
}

function solvesquare(a){
    console.log("Solve Square");
    if(a<=0)
         console.log("Square dimension invalid");
    else
    {
        console.log("Area",square.area(a));
        console.log("Perimeter",square.perimeter(a));
    }
        
    
}
function solverectangle(l,b){
    console.log("Solve rectangle");
    if(l<=0||b<=0)
         console.log("rectangle dimension invalid");
    else
    {
        console.log("Area",rectangle.area(l,b));
        console.log("Perimeter",rectangle.perimeter(l,b));
    }
        
    
}


solveCircle(5);
solvesquare(5);
solvetriangle(6,8,10);
solverectangle(4,5);