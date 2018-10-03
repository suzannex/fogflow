// Animation data (eventually loadable)
// ughhhhh
// import { data } from './data1.js';

const time = "6:08";
const ampm = "PM";
// Created by running dataParser.js on CSV input from stdin
const data = [
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

/* Canvas will refresh 60 times a second */
const fRate = 60;
/* A 'minute' in the animation will last 60 frames. */
const framesPerMin = 100;
const durationInMins = data.reduce((latestArrival, curVisitor) => {
  return Math.max(latestArrival, curVisitor.arrival);
});
let frameCount = 0;
/* Array of objects that have x;N, y;N, and data:VisitorData fields,
where VisitorData is {type:{r|c|w}, dir{up|down}, arrival:Minute, [departure:Minute]} */
let activeVisitors = [];
// Shallow copy of data that can be mutated
let waitingVisitors = data.slice();
/* Number of frames that elapse between each visitor in the current minute */
let framesPerVisitor;
/* Array of VisitorData objects */
let visitorsInMin = [];

// Drawing Constants ------------------------
let width = 1000;
let height = 400;
const baseStepDist = Math.floor(width / framesPerMin);
const wStepDist = baseStepDist / 5;
const rStepDist = baseStepDist / 4;
const cStepDist = baseStepDist / 2;
const visitorDotSize = 7;

let bgColor; // light green
let wColor; // teal
let rColor; // purple
let cColor; // goldenrod

// Processing's main functions -------------

// Called once when file is loaded
function setup() {
  bgColor = color(153,255,204); // light green
  wColor = color(45,152,106); // teal
  rColor = color(157,28,222); // purple
  cColor = color(255,179,0); // goldenrod

  frameRate(fRate);
  createCanvas(width, height);
  loop();
}

// Called once per tick
function draw() {
  background(bgColor);
  // stroke(40);
  // ellipse(56, 46, 55, 55);
  // Add and/or move and/or remove dots
  updateActiveList();
  //draw the new positions
  drawActiveVisitors();

  // increment frame count
  frameCount++;
}

// Helper functions ------------------------
//
// (move to different file later)

/*
updateActiveList:
- convert framecount to minute
- if a minute just started:
    - pop all this min's visitors from waitingVisitors and add them to
      currentMinVisitors
    - update visitorCountInMin with that quantity ^
- if (visitorCountInMin > 0) and (frame rate % (framesPerMin / visitorCountInMin) == 0)
  (if it's at a visitor-fraction of a minute) then move next visitor
  from currentMinVisitors into activeVisitors
- move all visitors in activeVisitors to the right or left
*/
function updateActiveList() {
  let minuteCount = Math.floor(frameCount / framesPerMin);
  //console.log(minuteCount);
  let minutePosition = frameCount % framesPerMin;
  // If we have reached the end of the animation, start again
  if (minuteCount === durationInMins && minutePosition === 0) {
    console.log('does  this ever happen' + durationInMins + " " + minutePosition);
    frameCount = 0;
    minuteCount = 0;
  }

  // If we are at the start of a minute
  if (minutePosition === 0) {
    visitorsInMin = waitingVisitors.filter((visitor) => {
      //console.log(visitor);
      return visitor.arrival === "" + minuteCount;
    });
    //console.log(visitorsInMin.length);
    framesPerVisitor = visitorsInMin.length > 0 ?
      Math.floor(framesPerMin / visitorsInMin.length) : framesPerMin;
  }
  // if we are at a fraction point of a minute where another visitor
  // should be released
  if (visitorsInMin.length > 0 && minutePosition % framesPerVisitor === 0) {
    let nextVisitorData = visitorsInMin.splice(0,1)[0];
    let nextVisitorX = nextVisitorData.dir == "up" ? 0 : width;
    let nextVisitorY = 100 + Math.floor(Math.random()*200);
    let nextVisitor = {
      "x": nextVisitorX,
      "y": nextVisitorY,
      "data": nextVisitorData
    };
    activeVisitors.push(nextVisitor);
  }
  // move all visitors over by width / framesPerMin
  // so that they take exactly 1 'minute' to cross the screen
  for (let visitor of activeVisitors) {
    let stepDistance;
    switch (visitor.data.type) {
      case "w" :
        stepDistance = wStepDist;
        break;
      case "r" :
        stepDistance = rStepDist;
        break;
      case "c" :
        stepDistance = cStepDist;
        break;
      default:
    }
    //console.log("moving visitor");
    if (visitor.dir === "up") {
      visitor.x += stepDistance;
    } else {
      visitor.x -= stepDistance;
    }
  }
  // Remove all visitors who have reached an edge of the canvas.
  activeVisitors = activeVisitors.filter((visitor) => {
    return Number(visitor.x) > 0 && Number(visitor.x) < width;
  });

}


// Draw each visitor in the active list with its position
// and color as determined by type.
function drawActiveVisitors() {
  strokeWeight(1);
  stroke("white");
  for (let visitor of activeVisitors) {
    switch (visitor.data.type) {
      case "w" :
        fill(wColor);
        break;
      case "r" :
        fill(rColor);
        break;
      case "c" :
        fill(cColor);
        break;
      default:
        stroke(0);
        fill(0);
    }
    ellipse(visitor.x, visitor.y, visitorDotSize);
  }
}



/*
data:
- time counter
-> 'minutes' relative to seconds
-> ticks
- active list
- wait list

wishlist:
move active visitors across the screen in their direction
  -> visitor needs an x and y position in this program

every minute, add all of that's minutes visitors to the active list
  -> need a way to add multiple visitors at different points in the minute
  -> keep list and count of how many ppl coming in at the minute










*/
