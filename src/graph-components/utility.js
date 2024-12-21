export const dataPointsPreprocessor = (dataPoints)=>{
    let x = Math.max(...dataPoints.map(item => item.xAxis));
    let y = Math.max(...dataPoints.map(item => item.yAxis));
    console.log(x,y)
    return {maxXValue : x, maxYValue : y};
}


//graph categorizer
//switch maxPoint
//  case p>=100000:
//      p/1000
//  case p>=10000
//      p/100
//  case p<=1000
//      p/2


//990000 - 990
//550000 - 550
//10     - 1
//15000  - 150

export const graphCategorizer = (maxValue)=>{
    let numberOfFrames = 0;
    let scale = 0;
    switch(true){
        case (maxValue>100000):
            scale = 1000;
            numberOfFrames = maxValue/scale;
            break;
        case (maxValue>1000):
            scale = 100;
            numberOfFrames = maxValue/scale;
            break;
        default:
            scale = 2
            numberOfFrames = maxValue/scale;
            break; 
    }
    return {numberOfFrames : Math.ceil(numberOfFrames)+1, scale : scale};
}


let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(0));

export const prepareDatapointMatrix = (xFrame, yFrame, dataPoint)=>{
    console.log("x-size"+xFrame.numberOfFrames)
    console.log("y axis"+yFrame.numberOfFrames)
    console.log("scale",xFrame,yFrame)
    let matrix = Array2D(xFrame.numberOfFrames,yFrame.numberOfFrames);
    console.log("matrix", matrix)
    dataPoint.forEach((data)=>{
        let scaledDown = data;
        scaledDown["scaledXAxis"] = Math.ceil(data.xAxis/yFrame.scale);
        scaledDown["scaledYAxis"] = Math.ceil(data.yAxis/xFrame.scale);
        console.log(" feed",scaledDown)
        matrix[scaledDown.scaledYAxis][scaledDown.scaledXAxis] = data;
    });
    console.log("final m ",matrix)
    return matrix;
}


export const randomTest = ()=>{
    let dataPoints = []
    for(let i = 0; i<2000; i++){
    let point = {
        xAxis : Math.random()*i*7,
        yAxis : Math.random()*i*9,
        color : getRandomColor(),
        image : "na",
        desc : "test Data..."
      }
      dataPoints.push(point);
    }
    return {dataPoints : dataPoints};
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  