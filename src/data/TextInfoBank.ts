import type { TextInfo } from "../templateTypes/TextInfo.js";
export const defaultTextInfo: TextInfo = {
  id: "1",
  text: "Default message",
  color: "black",
  size: "16px",
  x: 50,
  y: 50,
};
export const c0_title1: TextInfo = {
    id: "1",
    text: "Pushing the Boundaries of the Medium",
    color: "black",
    size: "80px",
    x: 50,
    y: 40,
    width: 150,
  };
export const c0_title2: TextInfo = {
  id: "2",
  text: "A Case Study of Postmodernism",
  color: "grey",
  size: "50px",
  x: 50,
  y: 60,
  width: 60,
};
export const c0_title3: TextInfo = {
    id: "3",
    text: "by Arvin Hormati",
    color: "black",
    size: "30px",
    x: 90,
    y: 80,
    width: 30,
  };
export const c0_title4: TextInfo = {
    id: "4",
    text: "(click or tap to continue)",
    color: "black",
    size: "40px",
    x: 50,
    y: 90,
    width: 30,
    font: "Roboto Slab, serif",
  };
export const c0_1_1: TextInfo = {
  id: "1",
  text: "Hello!",
  color: "goldenrod",
  size: "100px",
  x: 50,
  y: 30,
  width: 100,
};

export const c0_1_2: TextInfo = {
  id: "2",
  text: "We've all read some sort of fable or fairy tale or short story at some point during our grade school years.",
  color: "black",
  size: "50px",
  x: 50,
  y: 60,
  width: 60,
};

export const c0_2_1: TextInfo = {
  id: "1",
  text: "They usually have clear-cut characters and setting...",
  color: "black",
  size: "60px",
  x: 25,
  y: 30,
  width: 30,
};

export const c0_2_1r: TextInfo = {
  ...c0_2_1,
  transitionIn: "none",
};

export const c0_2_2: TextInfo = {
  id: "2",
  text: "...and follow the same general structure",
  color: "black",
  size: "60px",
  x: 30,
  y: 80,
  width: 30,
  transitionIn: "fade",
};

export const c0_2_3: TextInfo = {
  id: "3",
  text: "An Introduction",
  color: "red",
  size: "80px",
  x: 70,
  y: 20,
  width: 40,
  transitionIn: "fade",
};
export const c0_2_4: TextInfo = {
  id: "4",
  text: "An Inciting Incident",
  color: "blue",
  size: "80px",
  x: 70,
  y: 40,
  width: 40,
  transitionIn: "fade",
};
export const c0_2_5: TextInfo = {
  id: "5",
  text: "An event and resolution that shows the moral",
  color: "green",
  size: "70px",
  x: 70,
  y: 70,
  width: 40,
  transitionIn: "fade",
};

export const c0_3_1: TextInfo = {
  id: "1",
  text: "Let's take a glance at the story \“Tortoise and the Hare\”",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 50,
  highlightRanges: [{ start: 33, end: 100 }],
};
export const c0_3_4: TextInfo = {
  ...c0_2_4,
  id: "4",
  x: 55,
  y: 10,
  size: "20px",
  transitionIn: "none",
};
export const c0_3_5: TextInfo = {
  ...c0_2_5,
  id: "5",
  x: 79,
  y: 10,
  size: "20px",
  transitionIn: "none",
};
export const c0_3_3: TextInfo = {
  ...c0_2_3,
  id: "3",
  x: 40,
  y: 10,
  size: "20px",
  transitionIn: "none",
}

export const c0_4_1: TextInfo = {
  id: "1",
  text: "Let's take a glance at the story \“Tortoise and the Hare\”",
  color: "black",
  size: "30px",
  x: 15,
  y: 10,
  width: 30,
  transitionIn: "none",
};
export const c0_4_1r: TextInfo = {
  ...c0_4_1,
  transitionIn: "none",
};

export const c0_4_2: TextInfo = {
  id: "2",
  text: "The Hare makes fun of the tortoise for going too slow.",
  color: "red",
  size: "60px",
  x: 50,
  y: 50,
  width: 50,
  font: "Roboto Slab, serif",
};

export const c0_5_2: TextInfo = {
  id: "2",
  text: "The Tortoise challenges the Hare to a race, which they accept, and they proceed to start the race.",
  color: "blue",
  size: "60px",
  x: 50,
  y: 50,
  width: 50,
  font: "Roboto Slab, serif",
};

export const c0_6_2: TextInfo = {
  id: "2",
  text: "The Hare was quickly out of sight, and to make the Tortoise feel worse about the race, decided to take a nap on the side of the track.",
  color: "green",
  size: "60px",
  x: 50,
  y: 50,
  width: 50,
  font: "Roboto Slab, serif",
};

export const c0_7_2: TextInfo = {
  id: "2",
  text: "The Tortoise keeps moving, eventually overtaking the hare, and nearing the finish line",
  color: "green",
  size: "40px",
  x: 30,
  y: 30,
  width: 50,
  font: "Roboto Slab, serif",
};

export const c0_8_2: TextInfo = {
  id: "8",
  text: "The hare wakes up, notices how far ahead the Tortoise is, and runs as fast as they can...",
  color: "green",
  size: "40px",
  x: 70,
  y: 70,
  width: 50,
  font: "Roboto Slab, serif",
};
export const c0_9_2: TextInfo = {
  id: "9",
  text: "Nevertheless, the tortoise wins the race.",
  color: "green",
  size: "60px",
  x: 50,
  y: 40,
  width: 50,
  font: "Roboto Slab, serif",
};
export const c0_9_3: TextInfo = {
  id: "10",
  text: "And from this we get the age-old moral: \“Slow and Steady Wins the Race\”",
  size: "60px",
  color: "green",
  x: 50,
  y: 70,
  width: 50,
  font: "Roboto Slab, serif",
  highlightRanges: [{ start: 39, end: 100 }],
  transitionIn: "fade",

};
export const c0_10_1: TextInfo = {
  id: "1",
  text: "But is this really a universal truth?",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 50,
}

export const c0_11_1: TextInfo = {
  id: "1",
  text: "The story tells us that we should stay consistent, yet we use alternating intervals of work and breaks to get through our own lives like through Pomodoro Timers.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 80,
}

export const c0_12_1: TextInfo = {
  id: "1",
  text: "And from a literary standpoint...",
  color: "black",
  size: "80px",
  x: 30,
  y: 50,
  width: 50,
}
export const c0_12_2: TextInfo = {
  id: "2",
  text: "...nothing stands out",
  color: "black",
  size: "80px",
  x: 70,
  y: 70,
  width: 50,
}

export const c0_13_1: TextInfo = {
  id: "1",
  text: "This story could have just as easily been told through...",
  color: "black",
  size: "80px",
  x: 30,
  y: 40,
  width: 50,
}
export const c0_13_2a: TextInfo = {
  id: "2",
  text: "an audio recording",
  color: "cyan",
  size: "80px",
  x: 70,
  y: 70,
  width: 50,
  fontWeight: "bold",
}

export const c0_13_2b: TextInfo = {
  ...c0_13_2a,
  text: "a video",
  color: "magenta",
}

export const c0_13_2c: TextInfo = {
  ...c0_13_2a,
  text: "a comic",
  color: "brown",
}

export const c0_13_2cr: TextInfo = {
  ...c0_13_2c,
  x: 75,
  y: 40,
  transitionIn: "none",
}

export const c0_13_3: TextInfo = {
  id: "3",
  text: "and nothing would change about the story, or how the reader feels about it.",
  color: "black",
  size: "60px",
  x: 50,
  y: 80,
  width: 100,
}

export const c0_14_1: TextInfo = {
  id: "1",
  text: "So then, how are we able to deepen the messages of stories, making them feel more realistic and immersive?",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 100,
}

export const c0_15_1: TextInfo = {
  id: "1",
  text: "One way that newer literature has been able to accomplish this is via the use of postmodern techniques, which subverts the tradiitonal structure of stories and the expectations of readers alike.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 80,
}

export const c0_16_1: TextInfo = {
  id: "1",
  text: "Think techniques such as...",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 50,
}
export const c0_16_2: TextInfo = {
  id: "2",
  text: "Nonlinear Storytelling",
  color: "purple",
  size: "60px",
  x: 20,
  y: 20,
  width: 50,
}

export const c0_16_3: TextInfo = {
  id: "3",
  text: "Confusing and Chaotic Narration",
  color: "#9cd2e4ff",
  size: "60px",
  x: 80,
  y: 80,
  width: 50,
}

export const c0_16_4: TextInfo = {
  id: "4",
  text: "No Grand Truths",
  color: "#a47420ff",
  size: "60px",
  x: 30,
  y: 70,
  width: 50,
}

export const c0_16_5: TextInfo = {
  id: "5",
  text: "Breaking of Linguistic Conventions",
  color: "#58c350ff",
  size: "60px",
  x: 70,
  y: 20,
  width: 50,
}

export const c0_17_1: TextInfo = {
  id: "1",
  text: "These strategies complement the authors' own style as well, making the story feel much more impactful.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 100,
}

export const c0_18_1: TextInfo = {
  id: "1",
  text: "Let's take a look at our first example...",
  color: "black",
  size: "80px",
  x: 50,
  y: 15,
  width: 100,
}

export const c0_18_2: TextInfo = {
  id: "2",
  text: "Beloved",
  color: "red",
  size: "320px",
  x: 50,
  y: 50,
  width: 100,
  fontWeight: "bold",
  transitionIn: "fade",
  font: "Baskervville, serif",
}

export const c0_18_3: TextInfo = {
  id: "3",
  text: "by Toni Morrison",
  color: "black",
  size: "60px",
  x: 50,
  y: 75,
  width: 100,
  transitionIn: "fade",
  font: "Baskervville, serif",
}

export const c1_1_1: TextInfo = {
  id: "1",
  text: "Beloved is a novel by Toni Morrison that explores the haunting legacy of slavery in America through the characterization of Sethe and other escaped slaves, and their attempts to escape or reconcile their harrowing pasts.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 100,
  font: "Baskervville, serif",
}

export const c1_2_1: TextInfo = {
  id: "1",
  text: "The book is renowed for its use of nonlinear storytelling and Morrison's use of narrative techniques to enrich her messages.",
  color: "black",
  size: "60px",
  x: 50,
  y: 40,
  width: 100,
  font: "Baskervville, serif",
}

export const c1_2_2: TextInfo = {
  id: "2",
  text: "Let's take a look at an example...",
  color: "black",
  size: "80px",
  x: 50,
  y: 70,
  width: 100,
  font: "Baskervville, serif",
  fontWeight: "bold",
}

export const c1_3_1: TextInfo = {
  id: "1",
  text: "During the second section of the novel, Stamp Paid attempts to revisit 124, where Sethe and her family currently live...",
  color: "black",
  size: "60px",
  x: 50,
  y: 20,
  width: 100,
  font: "Baskervville, serif",
}
export const c1_quote1_1: TextInfo = {
  id: "quote1",
  text: "“Mixed in with the voices surrounding the house, recognizable but undecipherable to Stamp Paid, were the thoughts of the women of 124, unspeakable thoughts, unspoken”",
  color: "grey",
  size: "70px",
  x: 50,
  y: 65,
  width: 80,
  font: "Baskervville, serif",
}
export const c1_cite_1: TextInfo = {
  id: "cite1",
  text: "(Morrison, 235).",
  color: "black",
  size: "30px",
  x: 50,
  y: 95,
  width: 80,
  font: "Baskervville, serif",
}

export const c1_4_1: TextInfo = {
  id: "1",
  text: "And yet in the following chapters, Morrison does exactly that; try and put these thoughts into WORDS, and somehow make them comprehensible to the reader, while conveying the same emotional impact as the characters experience.",
  color: "black",
  size: "60px",
  x: 50,
  y: 40,
  width: 100,
  font: "Baskervville, serif",
}

export const c1_quote1_2: TextInfo = {
  ...c1_quote1_1,
  size: "40px",
  x: 50,
  y: 80,
  width: 80,
  font: "Baskervville, serif",
  highlightRanges: [{ start: 135, end: 155}]
}

export const c1_5_1: TextInfo = {
  id: "1",
  text: "And yet in the following chapters, Morrison does exactly that; try and put these thoughts into WORDS, and somehow make them comprehensible to the reader, while conveying the same emotional impact as the characters experience.",
  color: "black",
  size: "60px",
  x: 50,
  y: 40,
  width: 100,
  font: "Baskervville, serif",
}

export const c1_6_1: TextInfo = {
  id: "1",
  text: "One of these characters whose thoughts are described is Beloved, who is a seemingly supernatural, childish figure that Sethe recognizes to be the reincarnation of one of her dead children.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
}

export const c1_7_1: TextInfo = {
  id: "1",
  text: "However, her thoughts are described in a completely different way from traditional narration...",
  color: "black",
  size: "40px",
  x: 20,
  y: 50,
  width: 35,
  font: "Baskervville, serif",
}

export const c1_quote2_1: TextInfo = {
  id: "quote2",
  text: "“We are not crouching now we are standing but my legs are like my dead man's eyes I cannot fall because there is no room to the men without skin are making loud noises I am not dead the bread is sea-colored I am too hungry to eat it the sun closes my eyes those able to die are in a pile I cannot find my man the one whose teeth I have loved a hot thing the little hill of dead people a hot thing the men without skin push them through with poles the woman is there with the face I want the face that is mine they fall into the sea which is the color of the bread she has nothing in her ears if I had the teeth of the man who died on my face I would bite the circle around her neck bite it away I know she does not like it now there is room to crouch and to watch the crouching others it is the crouching that is now always now inside the woman with my face is in the sea a hot thing”",
  color: "#485209ff",
  size: "30px",
  x: 70,
  y: 50,
  width: 50,
  font: "Baskervville, serif",
  transitionIn: "fade",
  transitionOut: "fade",
}

export const c1_cite_2: TextInfo = {
  id: "cite2",
  text: "(Morrison, 249).",
  color: "black",
  size: "30px",
  x: 70,
  y: 95,
  width: 80,
  font: "Baskervville, serif",
}

export const c1_8_1: TextInfo = {
  id: "1",
  text: "The most obvious characteristic is...",
  color: "black",
  size: "50px",
  x: 20,
  y: 30,
  width: 35,
  font: "Baskervville, serif",
}

export const c1_8_2: TextInfo = {
  id: "2",
  text: "...the distinct lack of punctuation!",
  color: "black",
  size: "80px",
  x: 20,
  y: 65,
  width: 35,
  font: "Baskervville, serif",
  fontWeight: "bold",
}

export const c1_9_1: TextInfo = {
  id: "2",
  text: "Punctuation like periods and commas allow for a breath in reading, and separate complete ideas and thoughts from one and another.",
  color: "black",
  size: "40px",
  x: 20,
  y: 50,
  width: 35,
  font: "Baskervville, serif",
}

export const c1_10_1: TextInfo = {
  id: "2",
  text: "So the lack thereof of such basic linguistics creates a more free-flowing structure; there is no signified areas for the reader to pause, and they are simply left with a series of perhaps incomplete thoughts that never end.",
  color: "black",
  size: "40px",
  x: 20,
  y: 50,
  width: 35,
  font: "Baskervville, serif",
}
export const c1_11_1: TextInfo = {
  id: "2",
  text: "...which gives clues about the narrator's perspective: an innocent child who can only continously observe the horrific world around her.",
  color: "black",
  size: "40px",
  x: 20,
  y: 25,
  width: 35,
  font: "Baskervville, serif",
}

export const c1_11_2: TextInfo = {
  id: "3",
  text: "Why? Run-on sentences and thoughts are often associated with the excitement and naivety of a child, eager to point out everything without really making any critical deductions, and can simply notate how they feel.",
  color: "black",
  size: "40px",
  x: 20,
  y: 70,
  width: 35,
  font: "Baskervville, serif",
}

export const c1_12_1: TextInfo = {
  id: "2",
  text: "In fact, how about we add back in the periods to see how the passage reads then?",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 70,
  font: "Baskervville, serif",
  fontWeight: "bold",
}

export const c1_segmentedQuote1: TextInfo = {
  id: "3",
  text: "“We are not crouching. Now we are standing, but my legs are like my dead man's eyes. I cannot fall because there is no room to. The men without skin are making loud noises. I am not dead.",
  color: "#485209ff",
  size: "60px",
  x: 50,
  y: 70,
  width: 90,
  font: "Baskervville, serif",
}

export const c1_segmentedQuote2: TextInfo = {
  ...c1_segmentedQuote1,
  id: "3",
  text: "“The bread is sea-colored. I am too hungry to eat it. The sun closes my eyes. Those able to die are in a pile. I cannot find my man. The one whose teeth I have loved...”",
  transitionIn: "none",
}

export const c1_segmentedQuote3: TextInfo = {
  ...c1_segmentedQuote1,
  id: "3",
  text: "“...A hot thing. The little hill of dead people. A hot thing. The men without skin push them through with poles. The woman is there with the face. I want the face that is mine. They fall into the sea which is the color of the bread. She has nothing in her ears...”",
  transitionIn: "none",
}

export const c1_segmentedQuote4: TextInfo = {
  ...c1_segmentedQuote1,
  id: "3",
  text: "“...If I had the teeth of the man who died on my face, I would bite the circle around her neck. Bite it away. I know she does not like it. Now there is room to crouch and to watch the crouching others. It is the crouching that is now, always now. Inside the woman with my face is in the sea. A hot thing”",
  transitionIn: "none",
  transitionOut: "fade",
}

export const c1_13_1: TextInfo = {
  id: "2",
  text: "Take note on how you are feeling reading the segmented version versus the original version...",
  color: "black",
  size: "60px",
  x: 50,
  y: 30,
  width: 70,
  font: "Baskervville, serif",
}

export const c1_13_1b: TextInfo = {
  id: "2",
  text: "Take note on how you are feeling reading the segmented version versus the original version...",
  color: "black",
  size: "60px",
  x: 50,
  y: 20,
  width: 70,
  font: "Baskervville, serif",
  transitionIn: "none",
}

export const c1_13_1c: TextInfo = {
  id: "2",
  text: "Take note on how you are feeling reading the segmented version versus the original version...",
  color: "black",
  size: "60px",
  x: 50,
  y: -20,
  width: 70,
  font: "Baskervville, serif",
  transitionIn: "none",
}

export const c1_13_2: TextInfo = {
  id: "4",
  text: "It's much easier to read isn't it?",
  color: "black",
  size: "60px",
  x: 50,
  y: 40,
  width: 70,
  font: "Baskervville, serif",
  transitionIn: "fade",
}

export const c1_13_2b: TextInfo = {
  id: "4",
  text: "It's much easier to read isn't it?",
  color: "black",
  size: "60px",
  x: 50,
  y: 10,
  width: 70,
  font: "Baskervville, serif",
  transitionIn: "none",
}

export const c1_13_2c: TextInfo = {
  id: "4",
  text: "It's much easier to read isn't it?",
  color: "black",
  size: "60px",
  x: 50,
  y: -20,
  width: 70,
  font: "Baskervville, serif",
  transitionIn: "none",
}

export const c1_13_3: TextInfo = {
  id: "5",
  text: "But now the sense of the passage feels different; the constant periods adds a lot more pauses to the text, grounding the text much more in the familiar and ends up ruining a bit of the effect that the original version had.",
  color: "black",
  size: "40px",
  x: 50,
  y: 25,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "fade",
}

export const c1_13_3b: TextInfo = {
  id: "5",
  text: "But now the sense of the passage feels different; the constant periods adds a lot more pauses to the text, grounding the text much more in the familiar and ends up ruining a bit of the effect that the original version had.",
  color: "black",
  size: "40px",
  x: 50,
  y: 15,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "none",
}

export const c1_13_4: TextInfo = {
  id: "6",
  text: "We lose the sense of breathlessness and disorientation and confusion that comes from a child wandering such a traumatic experience.",
  color: "black",
  size: "40px",
  x: 50,
  y: 33,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "fade",
}

export const c1_13_5: TextInfo = {
  id: "6",
  text: "We lose the sense of breathlessness and disorientation and confusion that comes from a child wandering such a traumatic experience.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
  fontWeight: "bold",
  transitionIn: "fade",
}

export const c1_13_6: TextInfo = {
  id: "6",
  text: "Instead the non-punctuation version feels like this…",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
  fontWeight: "bold",
}

export const c1_13_7: TextInfo = {
  id: "6",
  text: "“We are not crouching now we are standing but my legs are like my dead man's eyes I cannot fall because there is no room to the men without skin are making loud noises I am not dead the bread is sea-colored I am too hungry to eat it the sun closes my eyes those able to die are in a pile I cannot find my man the one whose teeth I have loved a hot thing the little hill of dead people a hot thing the men without skin push them through with poles the woman is there with the face I want the face that is mine they fall into the sea which is the color of the bread she has nothing in her ears if I had the teeth of the man who died on my face I would bite the circle around her neck bite it away I know she does not like it now there is room to crouch and to watch the crouching others it is the crouching that is now always now inside the woman with my face is in the sea a hot thing”",
  color: "black",
  size: "90px",
  x: 50,
  y: -100,
  width: 100,
  font: "Baskervville, serif",
  fontWeight: "bold",
  transitionIn: "scroll",
}
export const c1_13_8: TextInfo = {
  id: "1",
  text: "The same difficulty in reading and absorbing the moving text is the same difficulty that Beloved feels wandering amongst the cramped space.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_14_1: TextInfo = {
  id: "1",
  text: "Though, the “what” of the text is still important; there is plenty of interesting literary choices that helps supplement the tone that is insinuated by the lack of punctuation!",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
  boldRanges: [{start: 12, end: 17}]
}
export const c1_quote2_2 : TextInfo = {
  ...c1_quote2_1,
  size: "30px",
  x: 50,
  y: 30,
  width: 80,
  highlightRanges: [{ start: 207, end: 232, color: "rgba(255,239,100,0.45)" }, { start: 256, end: 273, color: "rgba(243, 45, 180, 0.45)" }],
}

export const c1_15_1: TextInfo = {
  id: "1",
  text: " - Perpetuates the theme of dying being a release from torture and pain, enough that dying seems favorable even to a child",
  color: "#82126dff",
  size: "40px",
  x: 35,
  y: 65,
  width: 60,
  font: "Baskervville, serif",
}
export const c1_15_2: TextInfo = {
  id: "2",
  text: " - Paradoxical, shows how unbearable basic necessities were during this time, and perhaps the “hunger” refers to the hunger for freedom instead of hunger for food, which again would perpetuate the theme of dying being a better alternative to torture",
  color: "#90a217ff",
  size: "30px",
  x: 65,
  y: 85,
  width: 60,
  font: "Baskervville, serif",
}
export const c1_quote2_3 : TextInfo = {
  ...c1_quote2_2,
  highlightRanges: [{ start: 354, end: 384, color: "rgba(100, 255, 115, 0.45)" }, { start: 104, end: 120, color: "rgba(100, 255, 115, 0.45)" }, { start: 785, end: 827, color: "rgba(50, 214, 214, 0.45)" }],
  transitionIn: "none",
}

export const c1_16_1: TextInfo = {
  id: "1",
  text: "the “crouching”, or cramped space, is always ever present in the lives of those who have experienced it.",
  color: "#0b5059ff",
  size: "40px",
  x: 35,
  y: 85,
  width: 60,
  font: "Baskervville, serif",
}

export const c1_16_2: TextInfo = {
  id: "2",
  text: "extremely camped and gross space, cluing the reader that the narrator is likely describing a ship in the Middle Passage",
  color: "rgba(16, 85, 13, 1)",
  size: "40px",
  x: 65,
  y: 65,
  width: 60,
  font: "Baskervville, serif",
}
export const c1_17_1: TextInfo = {
  id: "1",
  text: "Even in this short excerpt, the material itself as well as the way it was written (i.e without punctuation) showed the profound despair that victims of the slave trade felt and still continue to feel, especially as a child experiencing these events.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
  boldRanges: [{ start: 74, end: 81 }]
}