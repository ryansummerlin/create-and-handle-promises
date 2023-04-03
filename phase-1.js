function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("Done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("Done running on treadmill");
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve();
      console.log("Done lifting weights");
    }, 2000);
  });
}

function workout() {
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => console.log("Done working out"));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
