const jokes = [
  {
    date: "2026-09-08",
    setup: "What does t-shirt stand for?",
    punchline: "Tyrannosaurus Shirt. Because of the arms.",
    explanation: "T-Rex is short for Tyrannosaurus Rex. T-Rexes famously have tiny, useless arms—just like the short sleeves of a t-shirt."
  },
  {
    date: "2026-09-07",
    setup: "How come the developer did not get any questions from project managers?",
    punchline: "The developer was on vacation.",
    explanation: "Developers on vacation are unreachable by definition. Project managers can't ask questions if there's no one to answer them."
  },
  {
    date: "2026-09-04",
    setup: "Why do cemeteries have fences?",
    punchline: "People are dying to get in.",
    explanation: "'Dying to get in' means both desperately wanting to enter and literally dying to become a cemetery resident."
  },
  {
    date: "2026-09-03",
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved.",
    explanation: "'Waved' sounds like 'waved hello' but the ocean literally makes waves. It can't speak, so it just waves."
  },
  {
    date: "2026-09-02",
    setup: "What's the difference between a business analyst and a bus driver?",
    punchline: "A bus driver actually feels bad when someone ends up underneath the bus.",
    explanation: "When someone ends up under the bus for a normal bus driver, it happens by accident and the driver will show remorse. Some business analysts don't even know the meaning of the word 'remorse'."
  },
  {
    date: "2026-09-01",
    setup: "How many PMs does it take to change a lightbulb?",
    punchline: "None. They'll just keep adding developers until it's fixed by itself.",
    explanation: "A common PM approach is to add more people to a late project, hoping the problem resolves itself instead of actually fixing the root cause."
  },
  {
    date: "2026-08-31",
    setup: "What's the fastest thing in the office?",
    punchline: "A business analyst when he sees the chance to throw a developer under a bus.",
    explanation: "'Throwing someone under the bus' means blaming others for problems. The joke implies BAs are extremely quick to shift blame to developers. Or anyone else in their line-of-sight. Or just anyone else they can think of."
  },
  {
    date: "2026-08-28",
    setup: "What do you call a sad coffee?",
    punchline: "A depresso.",
    explanation: "This is a play on the word 'depresso' which sounds like 'depressed' and is also a type of coffee drink (espresso)."
  },
  {
    date: "2026-08-27",
    setup: "Why did the man try to buy a boat?",
    punchline: "Because it was for sail.",
    explanation: "'For sail' sounds like 'for sale' when spoken aloud, creating a pun about boats being sold."
  },
  {
    date: "2026-08-26",
    setup: "Why do dwarves have a bad sense of humor?",
    punchline: "The jokes go over their head.",
    explanation: "This is a double meaning joke - jokes that are hard to understand 'go over someone's head', and because dwarves are short, jokes would literally go over their heads."
  },
  {
    date: "2026-08-25",
    setup: "Why did the carpenter build the roof for free?",
    punchline: "It was on the house.",
    explanation: "'On the house' is an idiom meaning something is free, but it's also a literal description of where a roof is located - on the house."
  },
  {
    date: "2026-08-24",
    setup: "Why is it easier to write jokes about dwarves?",
    punchline: "Because the bar is very, very low.",
    explanation: "'The bar is low' means the standard is low, but for dwarves, the bar is also physically low due to their height."
  },
  {
    date: "2026-08-21",
    setup: "Why did the frog become an alcoholic?",
    punchline: "He really loves hops.",
    explanation: "A pun on 'hops' - beer is made from hops (the plant), and frogs hop around. Frogs loving hops takes on a double meaning."
  },    
  {
    date: "2026-08-20",
    setup: "Why are there so little books written on penguins?",
    punchline: "Because it's easier to write books on paper.",
    explanation: "A play on words with 'on' - penguins live on ice, but books are written on paper, which is a more practical surface."
  },
  {
    date: "2026-08-18",
    setup: "Why don't dwarves shop at Aldi?",
    punchline: "Because they're Lidl people.",
    explanation: "'Lidl' is a grocery store like Aldi, but 'lidl' also sounds like 'little', referring to the small stature of dwarves."
  },  
  {
    date: "2026-08-17",
    setup: "The punchline sometimes arrives before the rest of the joke.",
    punchline: "What's the downside of a time-travelling joke?",
    explanation: "The setup and punchline are reversed in order, mimicking how a time-travelling joke would be confusing or out of sequence."
  },  
  {
    date: "2026-08-16",
    setup: "What do you call a dog that herds bottles of wine?",
    punchline: "A Bordeaux Collie.",
    explanation: "'Bordeaux' is a famous wine region in France, and this is a pun on 'Border Collie', a breed of herding dog."
  },  
  {
    date: "2026-08-15",
    setup: "Why are atoms not trustworthy?",
    punchline: "They make up everything.",
    explanation: "A pun on 'make up' - atoms literally make up all matter, but 'make up' also means to fabricate or lie."
  },
  {
    date: "2026-08-14",
    setup: "What's white and terrible at hide-and-seek?",
    punchline: "A polar bear in a coal mine.",
    explanation: "A polar bear is white and would stand out terribly against the black coal, making it impossible to hide in a coal mine."
  },
  {
    date: "2026-08-13",
    setup: "What's purple and wants to conquer the world?",
    punchline: "Alexander the Grape.",
    explanation: "A pun combining 'Alexander the Great' with 'grape' (a purple fruit), suggesting a grape with the ambitions of a conqueror."
  },
  {
    date: "2026-08-12",
    setup: "What do you call a Frenchman wearing sandals?",
    punchline: "Philippe Philoppe.",
    explanation: "A pun on the French name 'Philippe' combined with 'flip-flop', which is a type of sandal."
  },
  {
    date: "2026-08-11",
    setup: "What do you call a magician on a plane?",
    punchline: "A passenger.",
    explanation: "A magician performs tricks on stage, but a magician on a plane is just a regular passenger without the stage or audience."
  },
  {
    date: "2026-08-10",
    setup: "What's yellow and very dangerous?",
    punchline: "A canary with a machine gun.",
    explanation: "A canary is typically thought of as a small, harmless yellow bird, but adding a machine gun makes it absurdly dangerous."
  },
  {
    date: "2026-08-09",
    setup: "What do you call a bear wearing a bowtie?",
    punchline: "Overdressed.",
    explanation: "A bear in the wild would normally wear nothing, so adding a bowtie is humorous overdressing."
  },
  {
    date: "2026-08-08",
    setup: "What do you call a man who has just been in a traffic accident?",
    punchline: "An ambulance.",
    explanation: "The question uses 'man' but the answer is 'ambulance' - it's a misdirection joke where the answer is the vehicle that would respond, not a description of the man."
  },
  {
    date: "2026-08-07",
    setup: "What do you call a parachute that doesn't open?",
    punchline: "A backpack.",
    explanation: "If a parachute fails to open during a skydive, it's essentially just a backpack since it doesn't serve its intended purpose."
  },
  {
    date: "2026-08-06",
    setup: "Why can't an ostrich fly?",
    punchline: "Because he's on Interpol's most wanted list and would get arrested when he enters the airport.",
    explanation: "This is an absurdist joke - ostriches are flightless birds naturally, but the answer gives a ridiculous fictional reason instead."
  },
  {
    date: "2026-08-05",
    setup: "What do you call a penguin in Egypt?",
    punchline: "Sweaty.",
    explanation: "Penguins naturally live in cold climates. Egypt is hot, so a penguin there would be very sweaty."
  },
  {
    date: "2026-08-04",
    setup: "What do you call a lion in a petting zoo?",
    punchline: "A mistake.",
    explanation: "Lions are dangerous wild animals and completely inappropriate for a petting zoo designed for safe, gentle animals."
  },
  {
    date: "2026-08-03",
    setup: "Why do developers always use the dark theme when writing code?",
    punchline: "Because the light attracts bugs.",
    explanation: "A pun on 'bugs' - programming bugs are errors, while actual bugs are attracted to light."
  },
  {
    date: "2026-08-02",
    setup: "What do you call a bee that suffers from indecisiveness?",
    punchline: "A may-bee.",
    explanation: "'May-bee' is a pun on the word 'maybe', which means uncertainty, combined with 'bee'."
  },
  {
    date: "2026-08-01",
    setup: "What do you call a camel on the North Pole?",
    punchline: "Lost.",
    explanation: "Camels naturally live in deserts, not arctic regions like the North Pole, so one would be completely lost there."
  },
  {
    date: "2026-07-31",
    setup: "What's pink and fluffy?",
    punchline: "Pink fluff.",
    explanation: "A straightforward joke with a literal answer - pink fluff is literally something that is both pink and fluffy."
  },
  {
    date: "2026-07-30",
    setup: "What's brown and sticky?",
    punchline: "A stick.",
    explanation: "A play on words - 'sticky' usually means something adhesive, but a stick is 'sticky' in that it's a stick by nature."
  },
  {
    date: "2026-07-29",
    setup: "What's green and has 12 legs?",
    punchline: "3 frogs.",
    explanation: "The answer is misdirection - frogs are green and each frog has 4 legs, so 3 frogs would have 12 legs total."
  },
  {
    date: "2026-07-28",
    setup: "What do you call a broken can opener?",
    punchline: "A can't opener.",
    explanation: "A pun on 'can't' (cannot) - a broken can opener cannot open cans."
  },
  {
    date: "2026-07-27",
    setup: "What's as long as a foot and slippery?",
    punchline: "A slipper.",
    explanation: "A slipper is a shoe that's about as long as a foot and has a smooth, slippery surface."
  },
  {
    date: "2026-07-26",
    setup: "What's green and slides down a mountain?",
    punchline: "A skiwi.",
    explanation: "A pun combining 'ski' (what you do on mountains) with 'kiwi' (a green fruit)."
  },
  {
    date: "2026-07-25",
    setup: "What's brown and sounds like a sneeze?",
    punchline: "A shoe.",
    explanation: "'Shoe' sounds like 'achoo', the sound of a sneeze."
  },
  {
    date: "2026-07-24",
    setup: "What's white and has to stand in the corner?",
    punchline: "A naughty refrigerator.",
    explanation: "When someone is naughty, they're sent to stand in the corner as punishment. A refrigerator is white and the joke pretends it's being punished."
  },
  {
    date: "2026-07-23",
    setup: "What's black-white-black-white-black-white-black-white-BAM?",
    punchline: "A zebra falling down the stairs.",
    explanation: "The alternating black and white pattern represents a zebra's stripes, and 'BAM' is the sound of it hitting the bottom of the stairs."
  },
  {
    date: "2026-07-22",
    setup: "What's invisible and smells like carrots?",
    punchline: "Rabbit farts.",
    explanation: "The joke uses absurdist humor - combining the invisible nature of farts with the idea that rabbits eat carrots."
  },
  {
    date: "2026-07-21",
    setup: "What's orange and sounds like a parrot?",
    punchline: "A carrot.",
    explanation: "'Carrot' sounds like 'parrot' when spoken, and carrots are orange."
  },
  {
    date: "2026-07-20",
    setup: "What do you call a bear without ear?",
    punchline: "B.",
    explanation: "A pun - if you remove 'ear' from 'bear', you're left with 'b' (the letter)."
  },
  {
    date: "2026-07-19",
    setup: "What hangs in a tree and yells 'I'm a green apple, I'm a green apple!' ?",
    punchline: "A colorblind red apple.",
    explanation: "A colorblind apple can't see that it's red, so it incorrectly thinks it's green."
  },
  {
    date: "2026-07-18",
    setup: "What hangs in a tree and yells 'I'm a banana, I'm a banana!' ?",
    punchline: "A lunatic.",
    explanation: "A lunatic is someone who acts insanely - yelling 'I'm a banana!' while hanging in a tree would certainly be considered lunatic behavior."
  },
  {
    date: "2026-07-17",
    setup: "What do you call a dog without legs?",
    punchline: "Nothing, he won't come when you call him anyway.",
    explanation: "The joke uses misdirection - the expected answer is a name, but the real answer points out that a legless dog can't come when called."
  },
  {
    date: "2026-07-16",
    setup: "What hangs in a tree and yells 'I'm an orange, I'm an orange!' ?",
    punchline: "A delusional mandarin.",
    explanation: "A mandarin is both a type of orange and a government official. The joke treats it as someone with delusions."
  },
  {
    date: "2026-07-15",
    setup: "What's white and falls upwards?",
    punchline: "An idiot snowflake.",
    explanation: "Snowflakes are white and normally fall downward, but an 'idiot snowflake' falling upwards is absurdist humor."
  },
  {
    date: "2026-07-14",
    setup: "Why does a flamingo pull up one leg to sleep?",
    punchline: "If it pulls up both legs it'll fall on it's face.",
    explanation: "A logical explanation for flamingos standing on one leg - if they lifted both legs, they'd have nothing to stand on."
  },
  {
    date: "2026-07-13",
    setup: "What do you call a snowman in the summer?",
    punchline: "A puddle.",
    explanation: "Snowmen melt in warm temperatures, turning into puddles of water."
  },
  {
    date: "2026-07-12",
    setup: "What do you call a dog who can do magic tricks?",
    punchline: "A labracadabrador.",
    explanation: "A pun combining 'Labrador' (dog breed) with 'Abracadabra' (magic word)."
  },
  {
    date: "2026-07-11",
    setup: "What do you call a boomerang that doesn't come back?",
    punchline: "A stick.",
    explanation: "A boomerang is designed to return to the thrower. If it doesn't come back, it's just a regular stick."
  },
  {
    date: "2026-07-10",
    setup: "What's red and can't fly?",
    punchline: "A brick.",
    explanation: "Bricks are red and are objects that cannot fly, making this a straightforward literal joke."
  },
  {
    date: "2026-07-09",
    setup: "What's blue and very light?",
    punchline: "Light blue.",
    explanation: "A play on words - 'light blue' is both a color and something that is blue and light in weight."
  },
  {
    date: "2026-07-08",
    setup: "What's red and tastes like yellow paint?",
    punchline: "Red paint.",
    explanation: "The joke uses misdirection - regardless of the color, paint tastes the same, so red paint tastes like paint, not like the color."
  },
  {
    date: "2026-07-07",
    setup: "There are 10 kinds of people: those who know binary,",
    punchline: "and those who don't.",
    explanation: "A joke for programmers - in binary (base 2), there are only 10 kinds of anything (0 and 1), making this pun work."
  },
  {
    date: "2026-07-06",
    setup: "What's yellow and goes up and down?",
    punchline: "A banana in an elevator.",
    explanation: "The answer is literally a yellow fruit (banana) that's moving up and down in an elevator."
  },
  {
    date: "2026-07-05",
    setup: "What's the difference between a snowman and a snowwoman?",
    punchline: "Snowballs.",
    explanation: "A suggestive pun - 'snowballs' are made of snow, but the joke implies an anatomical difference."
  },
  {
    date: "2026-04-01",
    setup: "Sorry, no older jokes available :(",
    punchline: "April Fool's! Hahahahahahahahaha but seriously, no older jokes before this one.",
    explanation: "The setup tricks the user into thinking there are no older jokes, but the punchline is itself the April Fool's joke."
  }
];
