

let makeDrawingFunc = function(drawingData, startHour, startMin, timeIsAm, fogTimes) {
  return (p) => {
    let data = drawingData;
    let an;

    let drawingWidth = p.windowWidth * 0.75 - 12;
    let drawingHeight = 400;
    
    // Called once, when this file is loaded
    p.setup = function() {
      an = new Animation(p, data, startHour, startMin, timeIsAm, drawingWidth, drawingHeight, fogTimes);
      p.frameRate(an.fRate);
      p.createCanvas(an.myWidth, an.myHeight);
      p.loop();
    }
    
    // Called once per tick
    p.draw = function() {
      an.step();
      an.draw();
    }
  }
}


let data0 = [
  {
    "type": "w",
    "dir": "up",
    "arrival": "0",
    "departure": "2"
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "3",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "4",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "4",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "5",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "6",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "8",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "10",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "10",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "10",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "11",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "11",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "12",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "13",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "13",
    "departure": "17"
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "13",
    "departure": "17"
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "14",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "14",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "14",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "14",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "14",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "15",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "15",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "16",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "17",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "17",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "17",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "17",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "18",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "19",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "20",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "21",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "21",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "21",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "21",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "22",
    "departure": "29"
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "22",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "22",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "22",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "23",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "23",
    "departure": "24"
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "24",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "24",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "24",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "24",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "25",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "25",
    "departure": "27"
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "26",
    "departure": "27"
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "27",
    "departure": "28"
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "27",
    "departure": "28"
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "28",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "29",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "29",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "29",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "29",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "30",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "30",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "31",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "32",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "33",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "33",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "33",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "33",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "34",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "34",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "34",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "34",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "34",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "35",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "35",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "35",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "36",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "37",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "37",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "37",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "37",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "38",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "39",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "39",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "40",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "40",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "42",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "43",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "43",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "43",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "43",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "43",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "44",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "45",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "45",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "45",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "45",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "46",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "46",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "46",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "46",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "47",
    "departure": null
  },
  {
    "type": "r",
    "dir": "down",
    "arrival": "48",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "48",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "49",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "50",
    "departure": "52"
  },
  {
    "type": "c",
    "dir": "up",
    "arrival": "52",
    "departure": "57"
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "52",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "53",
    "departure": "57"
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "53",
    "departure": "57"
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "53",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "54",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "54",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "54",
    "departure": null
  },
  {
    "type": "c",
    "dir": "down",
    "arrival": "54",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "55",
    "departure": null
  },
  {
    "type": "w",
    "dir": "down",
    "arrival": "56",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "56",
    "departure": null
  },
  {
    "type": "r",
    "dir": "up",
    "arrival": "57",
    "departure": null
  },
  {
    "type": "w",
    "dir": "up",
    "arrival": "57",
    "departure": null
  }
];
let data1 = [
  {
      "type":"c",
      "dir":"up",
      "arrival":"1",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"1",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"2",
      "departure":"6"
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"2",
      "departure":"6"
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"5",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"5",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"5",
      "departure":null
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"6",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"6",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"7",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"8",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"8",
      "departure":"21"
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"8",
      "departure":"9"
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"10",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"10",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"11",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"11",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"11",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"12",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"12",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"13",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"13",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"13",
      "departure":null
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"14",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"15",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"15",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"15",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"15",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"16",
      "departure":null
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"16",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"17",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"17",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"18",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"19",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"20",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"20",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"21",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"22",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"22",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"22",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"22",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"23",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"23",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"23",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"26",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"26",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"27",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"27",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"27",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"27",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"28",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"29",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"29",
      "departure":null
  },
  {
      "type":"c",
      "dir":"down",
      "arrival":"29",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"30",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"30",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"30",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"31",
      "departure":null
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"31",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"31",
      "departure":"54"
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"31",
      "departure":"54"
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"32",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"32",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"33",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"33",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"33",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"34",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"34",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"35",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"36",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"37",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"38",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"38",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"39",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"40",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"40",
      "departure":"46"
  },
  {
      "type":"r",
      "dir":"up",
      "arrival":"40",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"41",
      "departure":null
  },
  {
      "type":"c",
      "dir":"up",
      "arrival":"41",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"41",
      "departure":"44"
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"41",
      "departure":"43"
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"41",
      "departure":"44"
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"41",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"43",
      "departure":null
  },
  {
      "type":"r",
      "dir":"down",
      "arrival":"44",
      "departure":null
  },
  {
      "type":"w",
      "dir":"up",
      "arrival":"44",
      "departure":null
  },
  {
      "type":"w",
      "dir":"down",
      "arrival":"45",
      "departure":null
  }
];
let data2 = [
  {
     "type":"w",
     "dir":"down",
     "arrival":"1",
     "departure":"28"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"1",
     "departure":"28"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"1",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"1",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"2",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"2",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"3",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"3",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"4",
     "departure":"11"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"4",
     "departure":"11"
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"4",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"4",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"4",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"4",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"5",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"5",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"5",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"6",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"6",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"6",
     "departure":"7"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"6",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"6",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"6",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"7",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"8",
     "departure":"24"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"8",
     "departure":"24"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"8",
     "departure":"24"
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"8",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"8",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"8",
     "departure":"21"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"8",
     "departure":"21"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"8",
     "departure":"21"
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"9",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"9",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"10",
     "departure":"30"
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"10",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"10",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"10",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"10",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"11",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"12",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"12",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"12",
     "departure":"28"
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"12",
     "departure":"28"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"12",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"12",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":"14"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":"14"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"13",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"14",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"14",
     "departure":"25"
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"14",
     "departure":"25"
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"15",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"15",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"15",
     "departure":"21"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"15",
     "departure":"21"
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"15",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"15",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"15",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"16",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"16",
     "departure":"20"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"16",
     "departure":"20"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"16",
     "departure":"20"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"17",
     "departure":"21"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"17",
     "departure":"21"
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"17",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"17",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"17",
     "departure":"21"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"18",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"18",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"18",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"18",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"19",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"19",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"19",
     "departure":"22"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"19",
     "departure":"22"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"19",
     "departure":"22"
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"19",
     "departure":"20"
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"19",
     "departure":"20"
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"20",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"20",
     "departure":"25"
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"20",
     "departure":"25"
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"20",
     "departure":"25"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"21",
     "departure":"23"
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"21",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"21",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"23",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"23",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"23",
     "departure":"25"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"23",
     "departure":"25"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"23",
     "departure":"25"
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"24",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"24",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"24",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"25",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"25",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"25",
     "departure":"53"
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"25",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"25",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"26",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"26",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"26",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"26",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"26",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"27",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"27",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"27",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"27",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"27",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"28",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"28",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"28",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"28",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"28",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"29",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"31",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"31",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"31",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"31",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"31",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"32",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"34",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"36",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"36",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"36",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"37",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"37",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"37",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"37",
     "departure":null
  },
  {
     "type":"r",
     "dir":"up",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"c",
     "dir":"down",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"38",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"39",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"39",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"39",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"39",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"39",
     "departure":null
  },
  {
     "type":"w",
     "dir":"down",
     "arrival":"41",
     "departure":null
  },
  {
     "type":"c",
     "dir":"up",
     "arrival":"41",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"41",
     "departure":null
  },
  {
     "type":"r",
     "dir":"down",
     "arrival":"41",
     "departure":null
  },
  {
     "type":"w",
     "dir":"up",
     "arrival":"41",
     "departure":null
  }
];


let d0 = new p5(makeDrawingFunc(data0, 6, 8, false, [[22,27], [52,57]]), 'drawing0');
let d1 = new p5(makeDrawingFunc(data1, 9, 22, true, [[8,13], [38,43]]), 'drawing1');
let d2 = new p5(makeDrawingFunc(data2, 4, 14, false, [[16,21], [46,51]]), 'drawing2');

