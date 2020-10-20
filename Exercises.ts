console.log(totalDistance(0.2,0.4,100))

function totalDistance(heightOfstep:number, lenghtOfstep:number,towerHeight:number):number
{
    let totalDistance = (towerHeight/heightOfstep) * (lenghtOfstep + heightOfstep);
     return totalDistance
}
