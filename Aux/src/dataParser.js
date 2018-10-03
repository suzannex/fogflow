const metadataDelimiter = "||";

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    let result = parseVisitData(chunk);
    process.stdout.write(JSON.stringify(result) + "\n");
  }
});

function parseVisitData(input) {
  //console.log("Input is " + JSON.stringify(input) + ", type is " + typeof input);
  let fileData = input.split(metadataDelimiter);
  let metadata = fileData[0].split(",");
  let data = fileData[1];

  let lines = data.split("\n");
  let allVisitorData = [];
  for (let line of lines) {
    if (line.length < 3) {
      continue;
    }
    let values = line.split(",");
    let type = values[0];
    let dir = values[1];
    let arrival = values[2];
    let departure = values[3] !== "" ? values[3] : null;
    let visitData = {
      "type" : type,
      "dir" : dir,
      "arrival" : arrival,
      "departure" : departure
    };
    allVisitorData.push(visitData);
  }
  return {
    "metadata" : metadata[4],
    "visitData" : allVisitorData
  };
}
