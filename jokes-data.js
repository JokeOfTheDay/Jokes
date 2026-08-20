const jokes = [
  {
    date: "2026-08-25",
    setup: "Why did the carpenter build the roof for free?",
    punchline: "It was on the house."
  },
  {
    date: "2026-08-24",
    setup: "Why is it easier to write jokes about dwarves?",
    punchline: "Because the bar is very, very low."
  },
  {
    date: "2026-08-21",
    setup: "Why are there so little books written on penguins?",
    punchline: "Because it's easier to write books on paper."
  },
  {
    date: "2026-08-20",
    setup: "Why did the frog become an alcoholic?",
    punchline: "He really loves hops."
  },    
  {
    date: "2026-08-18",
    setup: "Why don't dwarves shop at Aldi?",
    punchline: "Because they're Lidl people."
  },  
  {
    date: "2026-08-17",
    setup: "The punchline sometimes arrives before the rest of the joke.",
    punchline: "What's the downside of a time-travelling joke?"
  },  
  {
    date: "2026-08-16",
    setup: "What do you call a dog that herds bottles of wine?",
    punchline: "A Bordeaux Collie."
  },  
  {
    date: "2026-08-15",
    setup: "Why are atoms not trustworthy?",
    punchline: "They make up everything."
  },
  {
    date: "2026-08-14",
    setup: "What's white and terrible at hide-and-seek?",
    punchline: "A polar bear in a coal mine."
  },
  {
    date: "2026-08-13",
    setup: "What's purple and wants to conquer the world?",
    punchline: "Alexander the Grape."
  },
  {
    date: "2026-08-12",
    setup: "What do you call a Frenchman wearing sandals?",
    punchline: "Philippe Philoppe."
  },
  {
    date: "2026-08-11",
    setup: "What do you call a magician on a plane?",
    punchline: "A passenger."
  },
  {
    date: "2026-08-10",
    setup: "What's yellow and very dangerous?",
    punchline: "A canary with a machine gun."
  },
  {
    date: "2026-08-09",
    setup: "What do you call a bear wearing a bowtie?",
    punchline: "Overdressed."
  },
  {
    date: "2026-08-08",
    setup: "What do you call a man who has just been in a traffic accident?",
    punchline: "An ambulance."
  },
  {
    date: "2026-08-07",
    setup: "What do you call a parachute that doesn't open?",
    punchline: "A backpack."
  },
  {
    date: "2026-08-06",
    setup: "Why can't an ostrich fly?",
    punchline: "Because he's on Interpol's most wanted list and would get arrested when he enters the airport."
  },
  {
    date: "2026-08-05",
    setup: "What do you call a penguin in Egypt?",
    punchline: "Sweaty."
  },
  {
    date: "2026-08-04",
    setup: "What do you call a lion in a petting zoo?",
    punchline: "A mistake."
  },
  {
    date: "2026-08-03",
    setup: "Why do developers always use the dark theme when writing code?",
    punchline: "Because the light attracts bugs."
  },
  {
    date: "2026-08-02",
    setup: "What do you call a bee that suffers from indecisiveness?",
    punchline: "A may-bee."
  },
  {
    date: "2026-08-01",
    setup: "What do you call a camel on the North Pole?",
    punchline: "Lost."
  },
  {
    date: "2026-07-31",
    setup: "What's pink and fluffy?",
    punchline: "Pink fluff."
  },
  {
    date: "2026-07-30",
    setup: "What's brown and sticky?",
    punchline: "A stick."
  },
  {
    date: "2026-07-29",
    setup: "What's green and has 12 legs?",
    punchline: "3 frogs."
  },
  {
    date: "2026-07-28",
    setup: "What do you call a broken can opener?",
    punchline: "A can't opener."
  },
  {
    date: "2026-07-27",
    setup: "What's as long as a foot and slippery?",
    punchline: "A slipper."
  },
  {
    date: "2026-07-26",
    setup: "What's green and slides down a mountain?",
    punchline: "A skiwi."
  },
  {
    date: "2026-07-25",
    setup: "What's brown and sounds like a sneeze?",
    punchline: "A shoe."
  },
  {
    date: "2026-07-24",
    setup: "What's white and has to stand in the corner?",
    punchline: "A naughty refrigerator."
  },
  {
    date: "2026-07-23",
    setup: "What's black-white-black-white-black-white-black-white-BAM?",
    punchline: "A zebra falling down the stairs."
  },
  {
    date: "2026-07-22",
    setup: "What's invisible and smells like carrots?",
    punchline: "Rabbit farts."
  },
  {
    date: "2026-07-21",
    setup: "What's orange and sounds like a parrot?",
    punchline: "A carrot."
  },
  {
    date: "2026-07-20",
    setup: "What do you call a bear without ear?",
    punchline: "B."
  },
  {
    date: "2026-07-19",
    setup: "What hangs in a tree and yells 'I'm a green apple, I'm a green apple!' ?",
    punchline: "A colorblind red apple."
  },
  {
    date: "2026-07-18",
    setup: "What hangs in a tree and yells 'I'm a banana, I'm a banana!' ?",
    punchline: "A lunatic."
  },
  {
    date: "2026-07-17",
    setup: "What do you call a dog without legs?",
    punchline: "Nothing, he won't come when you call him anyway."
  },
  {
    date: "2026-07-16",
    setup: "What hangs in a tree and yells 'I'm an orange, I'm an orange!' ?",
    punchline: "A delusional mandarin."
  },
  {
    date: "2026-07-15",
    setup: "What's white and falls upwards?",
    punchline: "An idiot snowflake."
  },
  {
    date: "2026-07-14",
    setup: "Why does a flamingo pull up one leg to sleep?",
    punchline: "If it pulls up both legs it'll fall on it's face."
  },
  {
    date: "2026-07-13",
    setup: "What do you call a snowman in the summer?",
    punchline: "A puddle."
  },
  {
    date: "2026-07-12",
    setup: "What do you call a dog who can do magic tricks?",
    punchline: "A labracadabrador."
  },
  {
    date: "2026-07-11",
    setup: "What do you call a boomerang that doesn't come back?",
    punchline: "A stick."
  },
  {
    date: "2026-07-10",
    setup: "What's red and can't fly?",
    punchline: "A brick."
  },
  {
    date: "2026-07-09",
    setup: "What's blue and very light?",
    punchline: "Light blue."
  },
  {
    date: "2026-07-08",
    setup: "What's red and tastes like yellow paint?",
    punchline: "Red paint."
  },
  {
    date: "2026-07-07",
    setup: "There are 10 kinds of people: those who know binary,",
    punchline: "and those who don't."
  },
  {
    date: "2026-07-06",
    setup: "What's yellow and goes up and down?",
    punchline: "A banana in an elevator."
  },
  {
    date: "2026-07-05",
    setup: "What's the difference between a snowman and a snowwoman?",
    punchline: "Snowballs."
  },
  {
    date: "2026-04-01",
    setup: "Sorry, no older jokes available :(",
    punchline: "April Fool's! Hahahahahahahahaha but seriously, no older jokes before this one."
  }
];
