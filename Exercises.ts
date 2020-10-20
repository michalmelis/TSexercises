console.log(totalDistance(0.2,0.4,100))
console.log(equal(1,1,1))
console.log(isTriangle(1,2,3))




function totalDistance(heightOfstep:number, lenghtOfstep:number,towerHeight:number):number
{
    let totalDistance = (towerHeight/heightOfstep) * (lenghtOfstep + heightOfstep);
     return totalDistance
}

function equal(a:number, b:number, c:number)
{
    if  (a == b && b==c)
    {
        return  3;
    }
    else if ( a == b || b==c || a==c)
    {
    return  2;
    }
    else
        {
          return 0;
        }
}

function isTriangle(a:number, b:number, c:number):boolean
{
    return (a+b)>c;
}
