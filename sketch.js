// === p5.js collaborative sketch ===
// Each student will add their name to the `names` array and
// commit + push their change to GitHub.

// STEP FOR STUDENTS...
// 1. Pick a turn (Student 1, 2, or 3).
// 2. When it's your turn, add your name to the `names` array below.
// 3. Save, commit, push.
// 4. Everyone else pulls and refreshes the browser to see all names.

let names = [
  // Example:
  'Christina',
  // "Student 2",
  // "Student 3",
  //
  // When it's your turn, add your name like:
  'Meredith',
  'Abigail',
];

function setup() {
  createCanvas(600, 400);
  textFont('system-ui, sans-serif');
}

function draw() {
  background(20);

  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);

  text('Git + GitHub + p5.js demo', 20, 20);
  textSize(14);
  text(
    'Each name below came from a different commit by group members.',
    20,
    50
  );

  textSize(18);
  let y = 90;

  if (names.length === 0) {
    fill(200, 100, 100);
    text('No names yet – someone make the first commit!', 20, y);
  } else {
    fill(100, 220, 180);
    for (let i = 0; i < names.length; i++) {
      text(`${i + 1}. ${names[i]}`, 20, y);
      y += 30;
    }
  }
}
