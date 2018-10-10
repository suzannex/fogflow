
/** Number Number -> Number
 * Return total # of minutes in given # of hours and mins
 */
function timeInMins(hrs, mins) {
  return 60 * hrs + mins;
}

/** [Visitor, ...] -> Number
 * 
 * Find the latest visitor departure time from the data set.
 */
function getLatestDeparture(data) {
  function reducer(latestDepartureTime, curVisitor) {
    let curDeparture = curVisitor.departure === null ? 0 : Number.parseInt(curVisitor.departure);
    return Math.max(latestDepartureTime, curDeparture);
  }
  let baseDepartureTime = 0;
  return data.reduce(reducer, baseDepartureTime);
}

class Animation {
  /* this.pJS, [Visitor, ...] Number Number Boolean -> Animation
  Provide array of Visitor data objects that this Animation will manipulate.
  Give animation start time in 12-hour hours and minutes.
  Boolean am = true if start time is AM, false if PM
  */
  constructor(p, data, startHrs, startMins, am, width, height) {
    this.p = p;
    this.baseTimeMinutes = timeInMins(startHrs, startMins);
    this.ampm = am;
    this.data = data;

    /**
     * ANIMATION TIME CONSTANTS
     */
    /* Canvas will refresh 60 times a second */
    this.fRate = 60;
    /* A 'minute' in the animation will last 100 frames. */
    this.framesPerMin = 100;
    /** The length of this animation, in minutes. 
     * Based on latest departure time of any visitor in the data array.
     * Add 5 to allow time for the latest departure to exit the screen
     * before restarting the animation. */
    this.durationInMins = 5 + getLatestDeparture(data);
    console.log(this.durationInMins);

    /**
     * ANIMATION LIFECYCLE STATE
     * Reset at the start of every animation
     */
    this.frameCount = 0;

    /**
     * MINUTE-BY-MINUTE STATE
     * Updated every minute for visitors within that minute
     */
    /* Array of objects that have x;N, y;N, and data:VisitorData fields,
    where VisitorData is {type:{r|c|w}, dir{up|down}, arrival:Minute, [departure:Minute]} */
    this.activeVisitors = [];
    // Shallow copy of data that can be mutated
    this.waitingVisitors = this.data.slice();
    /* Number of frames that elapse between each visitor in the current minute */
    this.framesPerVisitor;
    /* Array of VisitorData objects, the visitors that will be added
    to the animation during the current minute */
    this.visitorsInMin = [];

    /**
     * DRAWING (size + color) CONSTANTS
     * Known / given constants,
     * and dynamically calculated constants.
     */
    this.myWidth = width; // should be windowWidth when constructed
    this.myHeight = height; // should be 400 when constructed
    this.visitorDotSize = 10; // size of visitor dots in animatino
    // Calculate + set width-dependent drawing constants.
    this.initSizeConstants();
    // Init the color constants.
    this.initColorConstants();
  }

  /**
   * --------------------------------------------------------
   *                     Main Functions
   * --------------------------------------------------------
   */

  /**
   * Call to step the animation forward one frame.
   * Update active list, move active visitors, increment frame count.
   */
  step() {
    let minCount = this.minuteCount();
    let minPosition = this.minutePosition();

    this.updateNextMinuteData(minCount, minPosition);
    this.addNextVisitor(minPosition);
    this.moveActiveVisitors(minCount);
    this.removeDoneVisitors();

    this.frameCount += 1;
    this.resetIfOver(this.minuteCount(), this.minutePosition());
  }

  /**
   * Call after step() to draw the new state.
   * Draw the background, visitor locations, and time.
   */
  draw() {
    let minCount = this.minuteCount();
    this.drawBG();
    this.drawActiveVisitors();
    // this.drawBorder();
    this.drawTime(minCount);
  }






  /**
   * --------------------------------------------------------
   *                   Step Helper Functions
   * --------------------------------------------------------
   */

  /**
   * If a minute has just started (minPosition == 0):
   * - update visitorsInMin 
   *    (this animation's list of current-minute visitors)
   * - and calculate framesPerVisitor
   *    (how many frames should elapse between adding each of those^
   *    visitors to the active list in this minute.)
   */
  updateNextMinuteData(minCount, minPosition) {
    // console.log(`minCount: ${minCount}, minPosition: ${minPosition}`);
    if (minPosition === 0) {
      // console.log("adding some visitors");
      this.visitorsInMin = this.waitingVisitors.filter((visitor) => {
        let arrival = Number.parseInt(visitor.arrival);
        return arrival == minCount + 2;
      });
      // console.log(JSON.stringify(this.visitorsInMin));
      if (this.visitorsInMin.length > 0) {
        this.framesPerVisitor = Math.floor(this.framesPerMin / this.visitorsInMin.length);
      } else {
        this.framesPerVisitor = this.framesPerMin;
      }
    }
  }

  /**
   * If we are at a fraction point of a minute where another visitor
   * should be released, generate a starting position for that visitor
   * and add it to the active visitor list.
   */
  addNextVisitor(minPosition) {
    // console.log(this.visitorsInMin);
    if (this.visitorsInMin.length > 0 && minPosition % this.framesPerVisitor === 0) {
      let nextVisitorData = this.visitorsInMin.splice(0,1)[0];
      let nextVisitorX = nextVisitorData.dir == "up" ? 1 : this.myWidth;
      // console.log("new x value: " + nextVisitorX);
      let nextVisitorY = 50 + Math.floor(Math.random()*175);
      let nextVisitor = {
        "x": nextVisitorX,
        "y": nextVisitorY,
        "data": nextVisitorData
      };
      this.activeVisitors.push(nextVisitor);
    }
  }

  /**
   * Move all visitors over by their designated step distance,
   * or leave them in place if they have a later departure time
   * than the current minute.
   */
  moveActiveVisitors(minCount) {
    for (let visitor of this.activeVisitors) {
      let stepDistance;
      switch (visitor.data.type) {
        case "w" :
          stepDistance = this.wStepDist;
          break;
        case "r" :
          stepDistance = this.rStepDist;
          break;
        case "c" :
          stepDistance = this.cStepDist;
          break;
        default:
      }
      // If the visitor has reached the center area of the screen
      // and it is not yet their departure minute, don't move them
      if (visitor.data.departure > minCount && visitor.x > (this.myWidth / 2 - 50)
        && visitor.x < (this.myWidth / 2 + 50)) {
          continue;
      }
      // console.log(`moving visitor at ${visitor.x}, ${visitor.y}`);
      // Otherwise, move them right or left depending on direction.
      if (visitor.data.dir == "up") {
        visitor.x += stepDistance;
      } else {
        visitor.x -= stepDistance;
      }
    }
  }

  /**
   * Remove visitors from active list if they have reached their 
   * ending edge of the animation.
   */
  removeDoneVisitors() {
    this.activeVisitors = this.activeVisitors.filter((visitor) => {
      return Number(visitor.x) > 0 && Number(visitor.x) < this.myWidth;
    });
  }

  


  /**
   * --------------------------------------------------------
   *                      Util Functions
   * --------------------------------------------------------
   */

  /**
   * Calculate the current minute count from the frame counter.
   */
  minuteCount() {
    let minuteCount = Math.floor(this.frameCount / this.framesPerMin);
    return minuteCount;
  }

  /**
   * Calculate the frame position within the current minute
   */
  minutePosition() {
    return this.frameCount % this.framesPerMin;
  }

  /**
   * Get the absolute current time of this animation 
   * by adding the given current minute count to this animation's 
   * start time in minutes. Convert that time to a string 
   * in HH:MM format.
   */
  minuteCountToAbsoluteTime(minutesElapsed) {
    let total = this.baseTimeMinutes + minutesElapsed;
    let hours = Math.floor(total / 60);
    let mins = total % 60;

    // commented out line is for 24 hour clock
    // let hoursStr = hours < 10 ? "0"+hours : ""+hours;
    let hoursStr = ""+hours;
    let minsStr = mins < 10 ? "0"+mins : ""+mins;
    let ampm = this.ampm ? "AM" : "PM";

    return hoursStr + ":" + minsStr + " " + ampm;
  }

  /**
   * Reset the animation if it's over, as determined by the minute
   * count and position within that minute.
   */
  resetIfOver(minCount, minPosition) {
    if (minCount === this.durationInMins && minPosition === 0) {
      this.frameCount = 0;
      this.activeVisitors = [];
      this.waitingVisitors = this.data.slice();
    }
  }




  /**
   * --------------------------------------------------------
   *                Initialization Functions
   * --------------------------------------------------------
   */

  initSizeConstants() {
    this.baseStepDist = Math.floor(this.myWidth / this.framesPerMin);
    this.wStepDist = this.baseStepDist / 5;
    this.rStepDist = this.baseStepDist / 4;
    this.cStepDist = this.baseStepDist / 2;
  }

  initColorConstants() {
    // this.borderColor = this.p.color(218, 247, 166);
    this.borderColor = this.p.color(172, 232, 89);
    let darkGrayGreen = this.p.color(75, 100, 74);
    let darkGreen = this.p.color(58, 90, 64);
    let lightGreen = this.p.color(190, 239, 158);
    this.baseBgColor = darkGreen; // darker light green
    this.bgColor = this.baseBgColor;//this.baseBgColor; // light green
    this.waterColor = this.p.color(69, 165, 165);
    this.timeColor = this.p.color(52,124,124);
    this.dotOutlineColor = this.p.color(144, 12, 63);
    this.wColor = this.p.color(255, 195, 0); // yellow
    this.rColor = this.p.color(255, 87, 51); // orange
    this.cColor = this.p.color(199, 0, 57); // dark red
  }





  /**
   * --------------------------------------------------------
   *                    Drawing Functions
   * --------------------------------------------------------
   */

  /**
   * Draw the background image for the animation.
   * Set background color, draw water and 2 islands, and border.
   */
  drawBG() {
    // rename width/height for convenience in drawing below
    let w = this.myWidth;
    let h = this.myHeight;
    // Draw the grass background
    this.p.background(this.bgColor);
    // Draw the water
    this.p.stroke(this.waterColor);
    this.p.fill(this.waterColor);
    this.p.beginShape();
    this.p.curveVertex(0, h - (h * 1/4));
    this.p.curveVertex(0, h - (h * 1/4));
    this.p.curveVertex(w * 1/5, h - (h * 1/5));
    this.p.curveVertex(w * 2/5, h - (h * 1/3));
    this.p.curveVertex(w * 3/5, h - (h * 1/6));
    this.p.curveVertex(w * 4/5, h - (h * 1/4));
    this.p.curveVertex(w, h - (h * 1/5));
    this.p.curveVertex(w,h);
    this.p.curveVertex(0,h);
    this.p.curveVertex(w * 1/5, h - (h * 1/5));
    this.p.endShape();
    // Draw left island
    this.p.fill(this.bgColor);
    this.p.beginShape();
    this.p.curveVertex((w * 1/10) - 100, h - (h * 1/10));
    this.p.curveVertex((w * 2/10) - 100, h - (h * 1/7));
    this.p.curveVertex((w * 5.5/20) - 100, h - (h * 1/9));
    this.p.curveVertex((w * 7.5/20) - 100, h - (h * 1/6));
    this.p.curveVertex((w * 3/10) - 100, h + (h * 1/10));
    this.p.curveVertex((w * 2/10) - 100, h + (h * 1/20));
    this.p.curveVertex((w * 1/9) - 100, h - (h * 1/20));
    this.p.curveVertex((w * 1/10) - 100, h - (h * 1/10));
    this.p.curveVertex((w * 2/10) - 100, h - (h * 1/7));
    this.p.endShape();
    // Draw right island
    this.p.fill(this.bgColor);
    this.p.beginShape();
    this.p.curveVertex(w * 0.52, h);
    this.p.curveVertex(w * 0.52, h);
    this.p.curveVertex(w * 0.57, h * 0.94);
    this.p.curveVertex(w * 0.62, h * 0.93);
    this.p.curveVertex(w * 0.67, h * 0.95);
    this.p.curveVertex(w * 0.72, h * 0.90);
    this.p.curveVertex(w * 0.75, h * 0.92);
    this.p.curveVertex(w * 0.80, h);
    this.p.curveVertex(w * 0.81, h * 1.05);
    this.p.curveVertex(w * 0.83, h);
    this.p.curveVertex(w * 0.52, h);
    this.p.endShape();
  }

  /**
   * Draw the frame around the animation
   * (separate from background because this should be on top of the dots)
   */
  drawBorder() {
    // Draw the light green border around the canvas
    this.p.strokeWeight(10);
    this.p.stroke(this.borderColor);
    this.p.noFill();
    this.p.rect(0,0,this.myWidth,this.myHeight);
  }

  /**
   * Draw all visitors in the active list.
   */
  drawActiveVisitors() {
    this.p.strokeWeight(2);
    // this.p.stroke(this.dotOutlineColor);
    for (let visitor of this.activeVisitors) {
      switch (visitor.data.type) {
        case "w" :
          this.p.stroke(this.wColor);
          this.p.fill(this.wColor);
          break;
        case "r" :
          this.p.stroke(this.rColor); 
          this.p.fill(this.rColor);
          break;
        case "c" :
          this.p.stroke(this.cColor);
          this.p.fill(this.cColor);
          break;
        default:
          this.p.stroke(0);
          this.p.fill(0);
      }
      this.p.ellipse(visitor.x, visitor.y, this.visitorDotSize);
    }
  }

  /**
   * Convert the current minute count into the absolute time
   * in HH:MM format, and draw it.
   */
  drawTime(minCount) {
    let timeString = this.minuteCountToAbsoluteTime(minCount);
    let x = this.myWidth - 85;
    let y = this.myHeight - 17;

    this.p.textAlign("center");
    this.p.textSize(35);
    this.p.textFont('Roboto');
    this.p.strokeWeight(2);
    this.p.stroke(this.timeColor);
    this.p.fill(this.timeColor);

    this.p.text(timeString, x, y);
  }

}