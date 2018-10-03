// Animation data (eventually loadable)
const data = require('./data1.js');

/* Canvas will refresh 60 times a second */
const fRate = 60;
/* A 'minute' in the animation will last 60 frames. */
const framesPerMin = 30;
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
let framesPerVisitor = 0;
/* Array of VisitorData objects */
let visitorsInMin = [];

// Drawing Constants ------------------------
let width = 700;
let height = 400;
const stepDistance = Math.floor(width / framesPerMin);
const visitorDotSize = 3;

const bgColor = color(153,255,204); // light green
const wColor = color(45,152,106); // teal
const rColor = color(157,28,222); // purple
const cColor = color(255,179,0); // goldenrod

// Processing's main functions -------------

// Called once when file is loaded
function setup() {
  frameRate(fRate);
  createCanvas(width, height);
}

// Called once per tick
function draw() {
  background(bgColor);
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
  let minutePosition = frameCount % framesPerMin;
  // If we have reached the end of the animation, start again
  if (minuteCount === durationInMins && minutePosition === 0) {
    frameCount = 0;
    minuteCount = 0;
  }

  // If we are at the start of a minute
  if (minutePosition === 0) {
    visitorsInMin = waitingVisitors.filter((visitor) => {
      return visitor.arrival === minuteCount;
    });
    framesPerVisitor = Math.floor(framesPerMin / visitorsInMin.length);
  }
  // if we are at a fraction point of a minute where another visitor
  // should be released
  if (visitorCountInMin > 0 && framesPerMin % framesPerVisitor === 0) {
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
    if (visitor.dir === "up") {
      visitor.x += stepDistance;
    } else {
      visitor.x -= stepDistance;
    }
  }
  // Remove all visitors who have reached an edge of the canvas.
  activeVisitors = activeVisitors.filter((visitor) => {
    return visitor.x > 0 && visitor.x < width;
  });

}


// Draw each visitor in the active list with its position
// and color as determined by type.
function drawActiveVisitors() {
  strokeWeight(3);
  for (let visitor of activeVisitors) {
    switch (visitor.type) {
      case "w" :
        stroke(wColor);
        fill(wColor);
        break;
      case "r" :
        stroke(rColor);
        fill(rColor);
        break;
      case "c" :
        stroke(cColor);
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
