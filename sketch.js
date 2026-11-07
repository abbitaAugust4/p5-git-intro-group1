// STAGE 3 — New: the complete 22-page story, a layout helper, one-step backtracking,
// and scene audio. Arrays, image loading, and numeric choices build on stages 1–2.
// declare our global
// arrays (aka "model")
let pageTexts = []; // array of texts
let choicesTexts = []; // array of texts
let pageImages = []; // array of images
let consequences = []; // array of lists (aka as arrays)

// declare global var
// to represent current page number (aka "state")
let currentPageIndex = 0;

// declare global var
// to store previously displayed page
// Store only the last page left through a numbered choice. This is one saved index,
// not a full history: pressing b repeatedly does not continue walking backward.
let previousPageIndex = 0;

function preload() {
  // ********************
  // "The Night of the Paper Kites"
  // ********************

// tempI groups the assignments for one scene under a single index.
// Each consequences array lists destinations in key order: [1], then [2].
// The page blocks below repeat this pattern; the short notes describe their routes.
  let tempI = 0;
  pageTexts[tempI] = 'The Savior of the Culinary Arts';
  choicesTexts[tempI] = 'To begin, press 1';
  consequences[tempI] = [1];

  // page 1
  // Choose kites (1 → 4), or offer lighthouse keepers (2 → 2).
  tempI = 1;
  pageTexts[tempI] =
    'You are a great frog apprentice, y/n.. Would you like to bake a cake? ';
  choicesTexts[tempI] =
    'If youre hungry, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/forg_01.jpg');
  consequences[tempI] = [4, 2];

  // page 2
  // Choose keepers (1 → 16), or offer constellations (2 → 3).
  tempI = 2;
  pageTexts[tempI] =
    'You are a very hungry toad. (yes you, you hungry hungry individual) And your 35,000 children are looking tastier by the day.';
  choicesTexts[tempI] =
    'If you choose the children, press [1];\nif not, press [2];\n If you still want some cake, press [b]';
  pageImages[tempI] = loadImage('./assets/EVIL TOAD_01.jpg');
  consequences[tempI] = [16, 3];

  // page 3
  // (1-17) Wizard 
  tempI = 3;
  pageTexts[tempI] =
    'You are gluttonous wizard, who has heard rumours of a magical frog who can make cakes 3 wizards tall. ';
  choicesTexts[tempI] =
    'If you like to search for the frog, press [1];\nif not, press [2] and order magical burger king;\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/Wizard_01.jpg');
  consequences[tempI] = [17, 21];

  // page 4
  // Request another description (1 → 9), or continue (2 → 5). (continues frog apprenrtice) 
  tempI = 4;
  pageTexts[tempI] =
    'You need to go out to get some ingredients within the Forest of Condiments.';
  choicesTexts[tempI] =
    "If you don't like where this is headed [1];\nif this one will do, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/kites_01.jpg');
  consequences[tempI] = [9, 5];

  // page 5
  // Let the kites dream (1 → 6), or continue to ribbons (2 → 7).
  tempI = 5;
  pageTexts[tempI] =
    'Their rest was blank and still. The truth is these little travelers seldom dream.';
  choicesTexts[tempI] =
    "If you'd rather they did dream, press [1];\nif not, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/kite_02.jpg');
  consequences[tempI] = [6, 7];

  // page 6
  // Hear the dream (1 → 11), or skip to ribbons (2 → 7).
  tempI = 6;
  pageTexts[tempI] =
    'They were dreaming, of course. Kites dream always—of thermals, tall coasts, and a sea that hums like a shell held to the heart.';
  choicesTexts[tempI] =
    'If you wish to know their dream, press [1];\nif its neither here nor there, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/stars_01.jpg');
  consequences[tempI] = [11, 7];

  // page 7
  // Change ribbon color (1 → 8), or continue (2 → 10).
  tempI = 7;
  pageTexts[tempI] =
    'Their tails wore tinkling bells, and each bell wore a ribbon: one sable, one copper, one pale-gold as morning tea.';
  choicesTexts[tempI] =
    "If you'd prefer a different ribbon color, press [1];\nif you’re happy as is, press [2];\nTo go back, press [b]";
  pageImages[tempI] = loadImage('./assets/stars_02.jpg');
  consequences[tempI] = [8, 10];

  // page 8
  // Change color again (1 → 7), or accept indigo (2 → 10): a deliberate loop.
  tempI = 8;
  pageTexts[tempI] =
    'Very well—indigo ribbons then, deep as a harbor at night.';
  choicesTexts[tempI] =
    'If you’d like another color again, press [1];\nif indigo suits, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_02.jpg');
  consequences[tempI] = [7, 10];

  // page 9
  // Simplify the description (1 → 5), or approve and finish (2 → 21).
  tempI = 9;
  pageTexts[tempI] =
    'They had silver thread along their seams and a secret stitched beneath: a map of winds no sailor had ever seen.';
  choicesTexts[tempI] =
    'If you’d prefer fewer embellishments, press [1];\nif you approve the silver thread, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/lighthouse_01.jpg');
  consequences[tempI] = [5, 21];

  // page 10
  // Hear the dream (1 → 11), or move to the discussion (2 → 12).
  tempI = 10;
  pageTexts[tempI] =
    'All three dreamed the same dream; for they adored one another and, old companions they were, their thoughts often braided in the breeze.';
  choicesTexts[tempI] =
    'If you wish to know their dream, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_02.jpg');
  consequences[tempI] = [11, 12];

  // page 11
  // Only one numbered destination: continue (1 → 12).
  tempI = 11;
  pageTexts[tempI] =
    'They dreamed they rose for a night-flight and found the sky fenced with wires. Each star was locked behind a grid. Startled, they woke with a paper rustle.';
  choicesTexts[tempI] =
    'If you wish to know why wires frightened them, ponder what wind desires; then, if it’s all the same, press [1];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kites_03.jpg');
  consequences[tempI] = [12];

  // page 12
  // Jump to the quay passage (1 → 15), or hear the reaction (2 → 13).
  tempI = 12;
  pageTexts[tempI] =
    "'Hush-a-skirl!' they whispered as their sticks straightened. 'What a sour dream we’ve flown through!' 'A bad omen,' said the first. 'A bind,' said the second. 'A clue,' said the third—cleverest of the trio. 'Let me explain...'";
  choicesTexts[tempI] =
    'If you can’t wait for the third kite’s analysis, press [1];\nif you’d rather hear the others’ reaction, press [2];\nTo go back, press [b]';
  consequences[tempI] = [15, 13];

  // page 13
  // Both phrases instruct key 1; there is only one destination (1 → 14).
  tempI = 13;
  pageTexts[tempI] =
    "'Since when do you lecture on dreams?' quivered the first. 'Yes—since when?' chimed the second, their bells politely cross.";
  choicesTexts[tempI] =
    'If you too wish to know since when, press [1];\nif not, press [1] anyway—mystery loves company;\nTo go back, press [b]';
  consequences[tempI] = [14];

  // page 14
  // Again only key 1 advances (1 → 15).
  tempI = 14;
  pageTexts[tempI] =
    "'Since when?' sang the third. 'Who can say? I only know the wind speaks and I translate. Watch.'";
  choicesTexts[tempI] =
    'If you wish to watch, press [1];\nif not, press [1] regardless—eyes open better in motion;\nTo go back, press [b]';
  consequences[tempI] = [15];

  // page 15
  // Visit the quay (1 → 16), or finish (2 → 21).
  tempI = 15;
  pageTexts[tempI] =
    "'But why stir old gusts?' murmured the second. 'Your fright is fading already.' 'Agreed,' nodded the first. 'Let’s greet the briny light instead.' And so, slipping from the sill, they drifted down the lane to the quay’s washbasin of dawn.";
  choicesTexts[tempI] =
    'If you wish to see what happens at the quay, press [1];\nif not, press [2];\nTo go back, press [b]';
  consequences[tempI] = [16, 21];

  // page 16
  // Reject the keepers (1 → 21), or continue (2 → 18).
  tempI = 16;
  pageTexts[tempI] =
    'Three quiet lighthouse keepers watched them from the breakwater.';
  choicesTexts[tempI] =
    'If you don’t care for the keepers, press [1];\nif you rather like them, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/lighthouse_02.jpg');
  consequences[tempI] = [21, 18];

  // page 17
  // Reject the watchers (1 → 21), or continue (2 → 18).
  tempI = 17;
  pageTexts[tempI] =
    'Three wandering constellations tilted their heads and watched as well.';
  choicesTexts[tempI] =
    'If you dislike being watched by stars, press [1];otherwise, it charms you, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/stars_01.jpg');
  consequences[tempI] = [21, 18];

  // page 18
  // Follow the kites home (1 → 19), or finish (2 → 21).
  tempI = 18;
  pageTexts[tempI] =
    'Noticing the gaze upon them, the bashful kites wheeled shyly and made for the alley’s gentle wind.';
  choicesTexts[tempI] =
    'If you wish to know what they did next, press [1];\nif it’s immaterial, press [2];\nTo go back, press [b]';
  consequences[tempI] = [19, 21];

  // page 19
  // Ask for a sequel (1 → 20), or finish (2 → 21).
  tempI = 19;
  pageTexts[tempI] =
    'They slipped back through the window, wrapped their strings like scarves, and folded themselves to sleep once more.';
  choicesTexts[tempI] =
    'If you wish to know the sequel, press [1];\nif not, press [2];\nTo go back, press [b]';
  pageImages[tempI] = loadImage('./assets/kite_01.jpg');
  consequences[tempI] = [20, 21];

  // page 20
  // Ending: key 1 returns to page 1, not title page 0.
  tempI = 20;
  pageTexts[tempI] = 'There is no sequel. The night is finished. Finished!';
  choicesTexts[tempI] = 'To go back to the start, press [1]';
  consequences[tempI] = [1];

  // page 21
  // Alternative ending: key 1 also returns to page 1.
  tempI = 21;
  pageTexts[tempI] = 'In this case too, the tale is finished. Ended!';
  choicesTexts[tempI] = 'To return to the start, press [1]';
  consequences[tempI] = [1];
}

// This first setup is superseded by the later setup declaration in this same file.
// JavaScript uses the later definition, which also creates the audio objects.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

// Delegate rendering to displayCurrentPage so the frame loop stays separate from layout.
function draw() {
  displayCurrentPage();
}

// Styling for the page layout
// Compute margins, text-box sizes, and the page-number position from window dimensions.
// pageTextHeight uses windowWidth, so vertical spacing also depends on window width.
function displayCurrentPage() {
  let leftMargin = 100;
  let topMargin = leftMargin;
  let contentWidth = windowWidth - leftMargin * 2;
  let contentMargin = 50;
  let pageTextHeight = windowWidth * 0.4;
  let choicesTextHeight = 125;
  let choicesTextY = topMargin + pageTextHeight + contentMargin;
  let pageNumX = windowWidth / 2;
  let pageNumY = windowHeight * 0.95;

// Unlike stage 2, this display uses background(image) without the blur filter.
// Pages without an assigned image explicitly clear to black.
  // background image or solid
  if (typeof pageImages[currentPageIndex] === 'undefined') {
    background(0);
  } else {
    background(pageImages[currentPageIndex]);
  }

// Draw the story with a window-scaled font, then choices at a fixed size of 20,
// and finally the current page index near the bottom as a navigation reference.
  fill(255);
  textSize(windowWidth / 33);
  text(
    pageTexts[currentPageIndex],
    leftMargin,
    topMargin,
    contentWidth,
    pageTextHeight
  );

  textSize(20);
  text(
    choicesTexts[currentPageIndex],
    leftMargin,
    choicesTextY,
    contentWidth,
    choicesTextHeight
  );

  text(currentPageIndex, pageNumX, pageNumY);
}

// --------------------------------

/* --- AUDIO ON SCENE LOAD ------------------------- */

// 1) Map each page index → audio file path (replace with your files)
// New audio lookup: object keys match the story indexes, and values point to MP3 files.
// These are browser HTML Audio objects, separate from the image preload mechanism.
const pageAudioSrc = {
  0: './assets/audio/p0_title.mp3',
  1: './assets/audio/p1_intro.mp3',
  2: './assets/audio/p2_lighthouse_prompt.mp3',
  3: './assets/audio/p3_constellations_prompt.mp3',
  4: './assets/audio/p4_kites_sleeping.mp3',
  5: './assets/audio/p5_seldom_dream.mp3',
  6: './assets/audio/p6_dreaming.mp3',
  7: './assets/audio/p7_ribbons.mp3',
  8: './assets/audio/p8_indigo_ribbons.mp3',
  9: './assets/audio/p9_silver_seams.mp3',
  10: './assets/audio/p10_shared_dream.mp3',
  11: './assets/audio/p11_caged_stars.mp3',
  12: './assets/audio/p12_analyze.mp3',
  13: './assets/audio/p13_teasing.mp3',
  14: './assets/audio/p14_since_when.mp3',
  15: './assets/audio/p15_quay.mp3',
  16: './assets/audio/p16_keepers_watch.mp3',
  17: './assets/audio/p17_constellations_watch.mp3',
  18: './assets/audio/p18_noticed_watchers.mp3',
  19: './assets/audio/p19_back_home.mp3',
  20: './assets/audio/p20_no_sequel.mp3',
  21: './assets/audio/p21_ended.mp3',
};

// 2) Create Audio objects (run once in setup)
// The active (later) setup creates one reusable Audio object per listed page.
// Object.keys visits the lookup keys; preload requests buffering and volume sets level.
// No clip is played in setup, so the title page starts silent.
let pageAudio = {};
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // build audio objects
  Object.keys(pageAudioSrc).forEach(k => {
    const a = new Audio(pageAudioSrc[k]);
    a.preload = 'auto';
    a.volume = 0.9; // adjust as needed
    pageAudio[k] = a;
  });
}

// 3) Helpers to stop any currently playing clip and play scene audio
// Visit every clip, pause it, and try to rewind to the beginning.
// Skip absent objects; the empty catch ignores a rewind failure.
function stopAllAudio() {
  for (const k in pageAudio) {
    const a = pageAudio[k];
    if (!a) continue;
    a.pause();
    try {
      a.currentTime = 0;
    } catch (e) {}
  }
}

// Stop and rewind all clips before starting the requested scene, preventing overlap.
// play returns a Promise; the empty catch suppresses rejected playback requests.
function playSceneAudio(index) {
  stopAllAudio();
  const a = pageAudio[index];
  if (a) {
    // playback will succeed after a user gesture (your keypress)
    a.play().catch(() => {});
  }
}
// --------------------------------

// New navigation: b restores previousPageIndex and starts that page's audio.
// For numbered choices, validate the array position before saving the page being left.
// Only a valid choice updates the current page and starts its associated clip.
function keyPressed() {
  if (key === 'b') {
    currentPageIndex = previousPageIndex;
    playSceneAudio(currentPageIndex);
  } else {
    let consequencesCurrentPage = consequences[currentPageIndex];
    let userInputAsInt = parseInt(key);
    let consequencesIndex = userInputAsInt - 1;

    if (
      consequencesIndex >= 0 &&
      consequencesIndex < consequencesCurrentPage.length
    ) {
      previousPageIndex = currentPageIndex;
      currentPageIndex = consequencesCurrentPage[consequencesIndex];
      playSceneAudio(currentPageIndex);
    }
  }
}
