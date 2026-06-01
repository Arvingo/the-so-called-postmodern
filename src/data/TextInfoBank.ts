import { createCharacterHighlights } from "../HighlightHelper.js";
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
  text: "One way that newer literature has been able to accomplish this is via the use of postmodern techniques, which subverts the traditional structure of stories and the expectations of readers alike.",
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

export const c1_18_1: TextInfo = {
  id: "1",
  text: "Another common trope that Morrison uses that is practically intertwined with the book’s identity is non-linear storytelling.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
}

export const c1_19_1: TextInfo = {
  id: "1",
  text: "often in which the characters mentally encounter them in the present,",
  color: "black",
  size: "70px",
  x: 50,
  y: 65,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_19_2: TextInfo = {
  id: "2",
  text: "The reader is almost never given events ",
  color: "black",
  size: "70px",
  x: 50,
  y: 20,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_19_3: TextInfo = {
  id: "3",
  text: "sending themselves into the past.",
  color: "black",
  size: "70px",
  x: 50,
  y: 85,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_19_4: TextInfo = {
  id: "4",
  text: "in chronological order; they are only given in the order",
  color: "black",
  size: "70px",
  x: 50,
  y: 40,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_20_1: TextInfo = {
  id: "5",
  text: "In fact, the book additionally uses magical realism to turn this re-experience of a memory into a concrete event that occurs in Beloved with everyone’s memories: in Sethe’s words to Denver, her surviving daughter, a rememory…",
  color: "black",
  size: "70px",
  x: 50,
  y: 30,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "fade",
  highlightRanges: [{ start: 36, end: 51, color: "rgba(70, 136, 211, 0.45)" }, {start: 216, end: 224}],
}
export const c1_20_2: TextInfo = {
  id: "6",
  text: "A literary technique that semamlessly incorporates magical elements into an otherwise realistic setting",
  color: "rgba(30, 83, 145, 0.45)",
  size: "70px",
  x: 50,
  y: 75,
  width: 90,
  transitionIn: "fade",
  font: "Baskervville, serif",
}
export const c1_21_1: TextInfo = {
  id: "5",
  text: "In fact, the book additionally uses magical realism to turn this re-experience of a memory into a concrete event that occurs in Beloved with everyone's memories: in Sethe's words to Denver, her surviving daughter, a rememory…",
  color: "black",
  size: "50px",
  x: 50,
  y: 20,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "none",
  highlightRanges: [{start: 216, end: 224}],
}
export const c1_quote3_1: TextInfo = {
  id: "quote3",
  text: "“Some things you forget. Other things you never do. But it's not. Places, places are still there. If a house burns down, it's gone, but the place--the picture of it--stays, and not just in my rememory, but out there, in the world. What I remember is a picture floating around out there outside my head. I mean, even if I don't think it, even if I die, the picture of what I did, or knew, or saw is still out there. Right in the place where it happened…Where I was before I came here, that place is real. It's never going away. Even if the whole farm--every tree and grass blade of it dies. The picture is still there and what's more, if you go there--you who never was there--if you go there and stand in the place where it was, it will happen again; it will be there for you, waiting for you”",
  color: "#485209ff",
  size: "38px",
  x: 50,
  y: 65,
  width: 90,
  font: "Baskervville, serif",
  transitionIn: "fade",
}
export const c1_cite_3: TextInfo = {
  id: "cite3",
  text: "(48).",
  color: "black",
  size: "30px",
  x: 50,
  y: 95,
  width: 80,
  font: "Baskervville, serif",
}

export const c1_21_2: TextInfo = {
  id: "5",
  text: "Although a “rememory” being able to be interacted with by other people is a supernatural occurrence, and hence should take away from the realism of this story…",
  color: "black",
  size: "50px",
  x: 50,
  y: 20,
  width: 90,
  font: "Baskervville, serif",
}
export const c1_quote3_2: TextInfo = {
  ...c1_quote3_1,
  transitionIn: "none",
  highlightRanges: [{ start: 634, end: 792}],
}

export const c1_22_1: TextInfo = {
  ...c1_21_2,
  text: "…it doesn't seem like it. In fact, it's the memory's ability to continually haunt others that further reinforces the despair and trauma that slavery has caused on these individuals and the landscape itself.",
}

export const c1_quote3_3: TextInfo = {
  ...c1_quote3_1,
  transitionIn: "none",
  highlightRanges: [{ start: 336, end: 616 }],
}

export const c1_23_1: TextInfo = {
  ...c1_22_1,
  text: "The existence of the Sweet Home rememory, that is, the physical manifestation of Sethe's deep emotional scars and trauma from slavery that can persist even beyond its own physical destruction...",
}

export const c1_quote3_4: TextInfo = {
  ...c1_quote3_1,
  transitionIn: "none",
  highlightRanges: [{ start: 98, end: 230 }],
  transitionOut: "fade",
}

export const c1_24_1: TextInfo = {
  ...c1_22_1,
  text: "…and the possible re-experience of this trauma by others shows these scars to be practically eternal; the horrific legacy of slavery has caused a permanent unforgettable scar in America's past",
}

export const c1_25_1: TextInfo = {
  ...c1_22_1,
  id: "5",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
  text: "So now let's ask the same question as we did with the no punctuation passage: how would the story feel if we took away the supernatural element of the rememory, and just had it be a normal memory that only exists in Sethe's head?", 
}

export const c1_26_1: TextInfo = {
  id: "5",
  text: "Maybe it could still work, after all in our own day-to-day lives we cannot experience other people's memories, and yet we can still empathize with their experiences.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskervville, serif",
}

export const c1_26_1b: TextInfo = {
  id: "5",
  text: "Maybe it could still work, after all in our own day-to-day lives we cannot experience other people's memories, and yet we can still empathize with their experiences.",
  color: "black",
  size: "50px",
  x: 50,
  y: 15,
  width: 90,
  font: "Baskervville, serif",
}

export const c1_26_2: TextInfo = {
  id: "6",
  text: "But the point is that the presence of such a phenomena reinforces the idea of violent and rue-filled memories causing generational harm; the idea doesn't need to be completely realistic in order to help the reader understand that idea.",
  color: "black",
  size: "70px",
  x: 50,
  y: 60,
  width: 90,
  font: "Baskervville, serif",
  boldRanges: [{ start: 137, end: 999 }],
  transitionOut: "fade",
}


export const c1_27_1: TextInfo = {
  id: "5",
  text: "These ideas lead us to another postmodernist book, seemingly completely different in its content...",
  color: "black",
  size: "60px",
  x: 50,
  y: 15,
  width: 100,
}

export const c1_27_2: TextInfo = {
  id: "2",
  text: "The Things They Carried",
  color: "#166c28ff",
  size: "180px",
  x: 50,
  y: 55,
  width: 100,
  fontWeight: "bold",
  transitionIn: "fade",
  font: "Caladea, serif",
}
export const c1_27_3: TextInfo = {
  id: "3",
  text: "by Tim O'Brien",
  color: "black",
  size: "60px",
  x: 50,
  y: 90,
  width: 100,
  transitionIn: "fade",
  font: "Caladea, serif",
}
export const c2_1_1: TextInfo = {
  id: "1",
  text: "On the surface-level, the novel revolves around a group of soldiers fighting through the Vietnam War.",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}
export const c2_1_1b: TextInfo = {
  ...c2_1_1,
  size: "60px",
  x: 50,
  y: 15,
  transitionIn: "none",
}
export const c2_1_2: TextInfo = {
  id: "2",
  text: "It doesn't have an overarching plot; it is mostly told in short-form chapters full of recollections and memories such that they, while distinct in timeframe and narrative structure, overall relate to each other.",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}
export const c2_1_2b: TextInfo = {
  ...c2_1_2,
  size: "60px",
  x: 50,
  y: 45,
  transitionIn: "none",
}

export const c2_1_3: TextInfo = {
  id: "3",
  text: "The narration is mostly accomplished by Tim O' Brien, (not to be confused with the author), and is writing this book in-universe after his personal experiences in the Vietnam War.",
  color: "black",
  size: "60px",
  x: 50,
  y: 80,
  width: 90,
  font: "Caladea, serif",
}
export const c2_2_1: TextInfo = {
  id: "2",
  text: "Let's take a look at how O'Brien describes his platoon's reaction to the death of Ted Lavender, a young, scared soldier who was the first to die in the company:",
  color: "black",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}

export const c2_2_1b: TextInfo = {
  id: "2",
  text: "Let's take a look at how O'Brien describes his platoon's reaction to the death of Ted Lavender, a young, scared soldier who was the first to die in the company:",
  color: "black",
  size: "40px",
  x: 50,
  y: 15,
  width: 90,
  font: "Caladea, serif",
}

export const c2_quote1_1: TextInfo = {
  id: "quote1",
  text: "“Kiowa, who saw it happen , said it was like watching a rock fall, or a big sandbag or something—just boom, then down—not like the movies where the dead guy rolls around and does fancy spins and goes ass over teakettle—not like that, Kiowa said, the poor bastard just flat-f*** fell. Boom. Down. Nothing else. It was a bright morning in mid-April”",
  color: "#1d6934ff",
  size: "60px",
  x: 50,
  y: 55,
  width: 80,
  font: "Caladea, serif",
  transitionIn: "fade",
}

export const c2_cite_1: TextInfo = {
  id: "cite1",
  text: "(O'Brien 6).",
  color: "black",
  size: "30px",
  x: 50,
  y: 95,
  width: 80,
  font: "Caladea, serif",
}

export const c2_quote1_2: TextInfo = {
  ...c2_quote1_1,
  x: 50,
  y: 90,
  size: "40px",
  transitionIn: "none",
}

export const c2_3_1: TextInfo = {
  id: "2",
  text: "Instead of Morrison's dense language, symbolism, and a selection of diction that evokes a certain tone or mood…",
  color: "black",
  size: "60px",
  x: 25,
  y: 50,
  width: 45,
  font: "Baskerville, serif",
}

export const c2_3_2: TextInfo = {
  id: "1",
  text: "O'Brien uses primarily the sentence structure and the method of which the story is told to evoke a similar tone or mood.",
  color: "black",
  size: "60px",
  x: 72,
  y: 50,
  width: 45,
  font: "Caladea, serif",
  boldRanges: [{ start: 27, end: 45 }],
  transitionIn: "fade",
}

export const c2_4_1: TextInfo = {
  id: "1",
  text: "Let's take a look at where all the periods are…",
  color: "black",
  size: "70px",
  x: 50,
  y: 10,
  width: 90,
  font: "Caladea, serif",
}

const quoteText = "“Kiowa, who saw it happen, said it was like watching a rock fall, or a big sandbag or something—just boom, then down—not like the movies where the dead guy rolls around and does fancy spins and goes ass over teakettle—not like that, Kiowa said, the poor bastard just flat-f*** fell. Boom. Down. Nothing else. It was a bright morning in mid-April.”"

export const c2_quote1_3: TextInfo = {
  ...c2_quote1_1,
  text: quoteText,
  x: 50,
  y: 75,
  size: "50px",
  transitionIn: "none",
  highlightRanges: createCharacterHighlights(quoteText, ".", { color: "rgba(255,239,100,0.45)" })
}

export const c2_4_2: TextInfo = {
  id: "2",
  text: "The passage consists of a long initial segment where Kiowa compares Ted Lavender's death to movie deaths, followed by multiple extremely short sentences succinctly describing Lavender’s death alongside reactions to it.",
  color: "#6f8020ff",
  size: "60px",
  x: 50,
  y: 35,
  width: 90,
  font: "Caladea, serif",
}
export const c2_5_1: TextInfo = {
  id: "1",
  text: "It makes the reader read the text as such:",
  color: "black",
  size: "60px",
  x: 50,
  y: 15,
  width: 90,
  font: "Caladea, serif",
  transitionIn: "fade"
}

export const c2_segmentedQuote1 = {
  id: "q1",
  text: "Kiowa, who saw it happen , said it was like watching a rock fall, or a big sandbag or something—",
  color: "#1d6934ff",
  size: "70px",
  x: 50,
  y: 50,
  width: 60,
  font: "Caladea, serif",
}

export const c2_segmentedQuote1b = {
  id: "q1",
  text: "Kiowa, who saw it happen , said it was like watching a rock fall, or a big sandbag or something—",
  color: "#1d6934ff",
  size: "70px",
  x: 35,
  y: 20,
  width: 60,
  font: "Caladea, serif",
  transitionIn: "none",
  transitionOut: "none"
}

export const c2_segmentedQuote2 = {
  id: "q2",
  text: "just boom, then down—",
  color: "#1d6934ff",
  size: "90px",
  x: 80,
  y: 70,
  width: 60,
  font: "Caladea, serif",
  transitionIn: "fade",
}

export const c2_segmentedQuote2b = {
  id: "q2",
  text: "just boom, then down—",
  color: "#1d6934ff",
  size: "70px",
  x: 70,
  y: 40,
  width: 60,
  font: "Caladea, serif",
  transitionIn: "fade",
  transitionOut: "none"
}

export const c2_segmentedQuote3 = {
  id: "q3",
  text: "not like the movies where the dead guy rolls around and does fancy spins and goes ass over teakettle—",
  color: "#1d6934ff",
  size: "70px",
  x: 50,
  y: 80,
  width: 80,
  font: "Caladea, serif",
  transitionIn: "fade",
  transitionOut: "none"
}

export const c2_segmentedQuote3b = {
  id: "q3",
  text: "not like the movies where the dead guy rolls around and does fancy spins and goes ass over teakettle—",
  color: "#1d6934ff",
  size: "70px",
  x: 50,
  y: 60,
  width: 80,
  font: "Caladea, serif",
  transitionIn: "none",
  transitionOut: "none"
}
export const c2_segmentedQuote4 = {
  id: "q4",
  text: "the poor bastard just flat-f*** fell.",
  color: "#1d6934ff",
  size: "100px",
  x: 50,
  y: 85,
  width: 90,
  font: "Caladea, serif",
  transitionIn: "fade",
  transitionOut: "none"
}

export const c2_segmentedQuote5 = {
  id: "1",
  text: "Boom.",
  color: "#dfd43dff",
  size: "160px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  transitionIn: "none",
  transitionOut: "none"
}
export const c2_segmentedQuote6 = {
  ...c2_segmentedQuote5,
  text: "Down."
}
export const c2_segmentedQuote7 = {
  ...c2_segmentedQuote5,
  text: "Nothing else."
}
export const c2_segmentedQuote8 = {
  ...c2_segmentedQuote5,
  text: "It was a bright morning in mid-April."
}
export const c2_6_1: TextInfo = {
  id: "1",
  text: "So, the short sentences with the long sentence preceding it amplifies the sudden impact of the short sentences; the juxtaposition in sentence lengths gives a sense of shock or suddenness",
  color: "black",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 74, end: 110 }],
}

export const c2_7_1: TextInfo = {
  id: "1",
  text: "It helps the reader feel the same shock that Kiowa did, from both the suddenness of the death, AND Lavender’s unceremonious falling after his life was snatched away.",
  color: "black",
  size: "60px",
  x: 50,
  y: 20,
  width: 90,
  font: "Caladea, serif",
}

export const c2_7_2: TextInfo = {
  id: "2",
  text: "Juxtaposition between the weather and the death of a soldier amplifies the shock further; the bright weather contrasts with the dark event of a death, making the death feel even more jarring",
  color: "#0f4a58ff",
  size: "50px",
  x: 80,
  y: 60,
  width: 40,
  font: "Caladea, serif",
  boldRanges: [{ start: 74, end: 110 }],
}

export const c2_quote1_4: TextInfo = {
  ...c2_quote1_1,
  text: quoteText,
  x: 30,
  y: 65,
  width: 60,
  size: "50px",
  transitionIn: "none",
  highlightRanges: [{start: 295, end: 345, color: "rgba(129, 186, 221, 0.45)"}]
}

export const c2_8_1: TextInfo = {
  id: "1",
  text: "Remember that in Beloved's no punctuation passage, we noted that the passage would be less strong with punctuation added, as it lessened the ethereal and childish nature of the narrator.",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Baskerville, serif",
}

export const c2_9_1: TextInfo = {
  id: "1",
  text: "And yet, in the context of this passage, the addition of excess punctuation adds to the character of this piece…",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 57, end: 75 }],
}

export const c2_9_1b: TextInfo = {
  ...c2_9_1,
  y: 20,
  transitionIn: "none",
}

export const c2_9_2: TextInfo = {
  id: "2",
  text: "If the punctuation were to be removed, or sentences be made longer, the sudden impact and description of Ted Lavender’s demise would be greatly reduced, and it would instead seem more as if the soldiers are simply not caring about his death",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 70,
  width: 90,
  font: "Caladea, serif",
}

export const c2_9_2b: TextInfo = {
  ...c2_9_2,
  x: -50,
  transitionIn: "none",
}
export const c2_9_3: TextInfo = {
  id: "3",
  text: "Additionally, the narrator in this case is an adult soldier; it makes more sense for them to be able to give a more solid description with more complete thoughts, whereas a child has difficulty organizing theirs.",
  color: "#000000ff",
  size: "60px",
  x: 150,
  y: 70,
  width: 90,
  font: "Caladea, serif",
}

export const c2_9_3b: TextInfo = {
  id: "3",
  text: "Additionally, the narrator in this case is an adult soldier; it makes more sense for them to be able to give a more solid description with more complete thoughts, whereas a child has difficulty organizing theirs.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 70,
  width: 90,
  font: "Caladea, serif",
}

export const c2_10_1: TextInfo = {
  id: "1",
  text: "While sentence structure is an example of a literary technique applied on the sentence-level, O'Brien uses many techniques which only really create an effect when taking a chapter as a whole, or even looking between chapters.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 163, end: 190 }, { start: 216, end: 236 }],
}

export const c2_11_1: TextInfo = {
  id: "1",
  text: "For example, let's take a look at Norman Bowker's life after the war, as described in “Speaking of Courage”.",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}

export const c2_11_1r: TextInfo = {
  ...c2_11_1,
  y: 15,
  x: 25,
  width: 50,
  transitionIn: "none",
  size: "40px",
}

export const c2_11_2: TextInfo = {
  id: "2",
  text: "Norman Bowker spends a significant chunk of the chapter in hypothetical scenarios where he attempts to explain the events of the war to others in the town, such as his father, but ultimately decides against it.",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}
export const c2_12_1: TextInfo = {
  id: "2",
  text: "However, let's take a look at the actions that Norman Bowker physically takes during this chapter, and the timeline that goes along with it…",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}
export const c2_quote2_1: TextInfo = {
  id: "quote2a",
  text: "“Norman Bowker followed the tar road on its seven-mile loop around the lake, then he started all over, driving slowly” (138).",
  color: "#3d3c30ff",
  size: "40px",
  x: 25,
  y: 20,
  width: 40,
  font: "Caladea, serif",
}
export const c2_quote2_2: TextInfo = {
  id: "quote2b",
  text: "“Clockwise, as if in orbit, he took the Chevy on another seven-mile turn around the lake” (139).",
  color: "#3d3c30ff",
  size: "40px",
  x: 70,
  y: 25,
  width: 40,
  font: "Caladea, serif",
}
export const c2_quote2_3: TextInfo = {
  id: "quote2c",
  text: "“He figured it was close to five o'clock—twenty after, he guessed” (140).",
  color: "#313943ff",
  size: "40px",
  x: 25,
  y: 35,
  width: 40,
  font: "Caladea, serif",
}
export const c2_quote2_4: TextInfo = {
  id: "quote2d",
  text: "“The radio announcer sounded tired. The temperature in Des Moines was eighty-one degrees, and the time was five thirty-five” (141).",
  color: "#313943ff",
  size: "40px",
  x: 70,
  y: 45,
  width: 40,
  font: "Caladea, serif",
}

export const c2_quote2_5: TextInfo = {
  id: "quote2e",
  text: "“The sun was lower now. Five fifty-five, he decided—six o'clock, tops” (143).",
  color: "#313943ff",
  size: "40px",
  x: 25,
  y: 55,
  width: 40,
  font: "Caladea, serif",
}

export const c2_quote2_6: TextInfo = {
  id: "quote2f",
  text: "“He drove slowly. No hurry, nowhere to go” (144).",
  color: "#3d3c30ff",
  size: "60px",
  x: 70,
  y: 65,
  width: 50,
  font: "Caladea, serif",
}

export const c2_quote2_7: TextInfo = {
  id: "quote2g",
  text: "“Facing the sun again, Norman Bowker decided it was nearly seven o'clock” (147).",
  color: "#313943ff",
  size: "50px",
  x: 25,
  y: 75,
  width: 40,
  font: "Caladea, serif",
}

export const c2_quote2_8: TextInfo = {
  id: "quote2i",
  text: "“When the girl brought his tray, he ate quickly, without looking up.. The tired radio announcer in Des Moines gave the time, almost eight-thirty” (152).",
  color: "#313943ff",
  size: "40px",
  x: 70,
  y: 85,
  width: 50,
  font: "Caladea, serif",
  transitionOut: "fade",
}
export const c2_quote2_9: TextInfo = {
  ...c2_quote2_1,
  color: "#3d3c30ff",
  text: "“On his tenth turn around the lake he passed the hiking boys for the last time” (153).",
  transitionOut: "fade",
}
export const c2_quote2_10: TextInfo = {
  ...c2_quote2_2,
  color: "#3d3c30ff",
  text: "“On his eleventh revolution he switched off the air-conditioning, opened up his window, and rested his elbow comfortably on the sill, driving with one hand” (153).",
  size: "30px",
}
export const c2_quote2_11: TextInfo = {
  ...c2_quote2_3,
  color: "#3d3c30ff",
  text: "“On his twelfth revolution, the sky went crazy with color” (154).",
  size: "45px",
  y: 40,
}
export const c2_13_1: TextInfo = {
  ...c2_quote2_7,
  color: "black",
  text: "It's extremely bland and repetitive, isn't it?",
  size: "80px",
  x: 50,
  y: 80,
  width: 90
}
export const c2_14_1: TextInfo = {
  ...c2_quote2_7,
  color: "#3d4856ff",
  text: "All he does is watch the time.",
  size: "80px",
  y: 85
}
export const c2_14_2: TextInfo = {
  ...c2_quote2_8,
  color: "#4d4b39ff",
  size: "80px",
  text: "All he does is loop around.",
  transitionIn: "fade",
  y: 85
}
export const c2_15_1: TextInfo = {
  ...c2_quote2_7,
  color: "black",
  text: "He just keeps driving around, literally in loops, and the whole day is framed as timeless; even though the day is July 4th, Norman's actions could've taken place on any other day.",
  size: "45px",
  x: 50,
  y: 85,
  width: 90
}
export const c2_16_1: TextInfo = {
  id: "1",
  text: "The timelessness and repetitiveness of the circling, with O'Brien committing to that repetition so much that documentation of the time and looping occurs over 10 times throughout the chapter gives deeper insight into Norman’s character…",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  transitionIn: "fade",
}
export const c2_16_1b: TextInfo = {
  ...c2_16_1,
  y: 30,
  transitionIn: "none",
}

export const c2_16_2: TextInfo = {
  id: "2",
  text: "...That he's an individual who, broken from the trauma of watching his friend Kiowa die during war, is seemingly doomed to repeat his aimless behavior of looping through the town, with no end to his misery in sight.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 75,
  width: 90,
  font: "Caladea, serif",
}

export const c2_17_1: TextInfo = {
  id: "1",
  text: "Even though these quotations are spread across the chapter, it's the sheer volume and repetition of his looping and constant watch of the time that ultimately contributes to revealing his apathy and numbness to the world around him.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 69, end: 96 }],
}
export const c2_18_1: TextInfo = {
  id: "1",
  text: "Norman's story does not end there though…",
  color: "#000000ff",
  size: "120px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}

export const c2_18_2: TextInfo = {
  id: "1",
  text: "Completely subverting traditional storytelling expectations, the subsequent chapter, “Notes”, is all about the process of writing the previous chapter, or in other words, Norman's story.",
  color: "#000000ff",
  size: "90px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 97, end: 150 }],
}

export const c2_19_1: TextInfo = {
  id: "1",
  text: "The chapter describes Bowker's request of O'Brien to essentially recreate the emotional essence of his story:",
  color: "#000000ff",
  size: "80px",
  x: 50,
  y: 30,
  width: 90,
  font: "Caladea, serif",
}
export const c2_19_2: TextInfo = {
  id: "2",
  text: "From the night at Song Tra Bong",
  color: "#08411fff",
  size: "120px",
  x: 30,
  y: 70,
  width: 60,
  font: "Caladea, serif",
  fontWeight: "bold",
  transitionIn: "fade",
}
export const c2_19_2b: TextInfo = {
  id: "2",
  text: "To his agonizing post-war apathy and aimlessness",
  color: "#51675aff",
  size: "120px",
  x: 70,
  y: 70,
  width: 60,
  font: "Caladea, serif",
  fontWeight: "bold",
}
export const c2_20_1: TextInfo = {
  id: "1",
  text: "O'Brien describes his initial writing process of the chapter, where he placed Norman's request in a more traditionally written novel:",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 20,
  width: 90,
  font: "Caladea, serif",
  transitionOut: "fade",
}
export const c2_quote3_1: TextInfo = {
  id: "q1",
  text: "“The writing went quickly and easily...”",
  color: "#1b4b2aff",
  size: "60px",
  x: 50,
  y: 90,
  width: 60,
  font: "Caladea, serif",
}
export const c2_quote3_2: TextInfo = {
  id: "q2",
  text: "“Almost immediately, though, there was a sense of failure.”",
  color: "#541818ff",
  size: "90px",
  x: 60,
  y: 45,
  width: 80,
  font: "Caladea, serif",
}
export const c2_quote3_3: TextInfo = {
  id: "q3",
  text: "“A metaphorical unity was broken...”",
  color: "#602607ff",
  size: "120px",
  x: 40,
  y: 70,
  width: 80,
  font: "Caladea, serif",
}

export const c2_quote3_4: TextInfo = {
  id: "q4",
  text: "“I had been forced to omit the shit field and the rain and the death of Kiowa, replacing this material with events that better fit the book's narrative...”",
  color: "#490443ff",
  size: "70px",
  x: 50,
  y: 20,
  width: 90,
  font: "Caladea, serif",
}

export const c2_quote3_5: TextInfo = {
  id: "q5",
  text: "“In the end the piece had been ruined by a failure to tell the full and exact truth about our night in the shit field” (159).",
  color: "#363622ff",
  size: "120px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  fontWeight: "bold",
  transitionOut: "fade",
}

export const c2_21_1: TextInfo = {
  id: "1",
  text: "By attempting to shoehorn the story into another, all the nuance and the details that comprised the trauma that Norman had over this incident was lost.",
  color: "#000000ff",
  size: "70px",
  x: 50,
  y: 50,
  width: 50,
  font: "Caladea, serif",  
}

export const c2_21_1b: TextInfo = {
  ...c2_21_1,
  x: 25,
  y: 60,
  width: 45,
  transitionIn: "none",
}
export const c2_21_2: TextInfo = {
  id: "2",
  text: "It had lost the",
  color: "#000000ff",
  size: "90px",
  x: 72,
  y: 15,
  width: 50,
  font: "Caladea, serif",
}
export const c2_21_3: TextInfo = {
  id: "3",
  text: "emotional core",
  color: "#73155fff",
  size: "120px",
  x: 72,
  y: 30,
  width: 90,
  font: "Caladea, serif",
  fontWeight: "bold",
}
export const c2_21_4: TextInfo = {
  id: "4",
  text: "that made the story even worth telling.",
  color: "#000000ff",
  size: "90px",
  x: 72,
  y: 50,
  width: 50,
  font: "Caladea, serif",
}
export const c2_22_1: TextInfo = {
  id: "1",
  text: "We can ask ourselves:",
  color: "#000000ff",
  size: "120px",
  x: 50,
  y: 30,
  width: 90,
  font: "Caladea, serif",
}

export const c2_22_2: TextInfo = {
  id: "4",
  text: "What made it so much easier to write?",
  color: "#000000ff",
  size: "120px",
  x: 50,
  y: 60,
  width: 90,
  font: "Caladea, serif",
  fontWeight: "bold",
}

export const c2_23_1: TextInfo = {
  id: "1",
  text: "It's not only easier to write about less horrific incidents through omission, but also formatting the story to fit your own narrative and message makes the objective much simpler than trying to meet the complexity of the challenge itself.",
  color: "#000000ff",
  size: "90px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}

export const c2_23_1b: TextInfo = {
  ...c2_23_1,
  size: "40px",
  x: 50,
  y: -10,
  transitionIn: "none",
}

export const c2_23_2: TextInfo = {
  id: "2",
  text: "It's like trying to put a cake in a box that doesn't fit it, and completely disassembling the box to make it fit; you lose the original objective!",
  color: "#62400eff",
  size: "90px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 114, end: 999 }], 
}

export const c2_24_1: TextInfo = {
  id: "1",
  text: "In this case, quite literally the effect of writing in a more simpler manner was serious; even if the surface-level content remained the same, the destruction of the emotional-core of the first raft could have been a factor that lead Norman Bowker to commit suicide.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 30,
  width: 90,
  font: "Caladea, serif",
  boldRanges: [{ start: 143, end: 999 }], 
}
export const c2_24_2: TextInfo = {
  id: "2",
  text: "“I sent a copy off to Norman Bowker with the thought that it might please him. His reaction was short and somewhat bitter...",
  color: "#113b04ff",
  size: "60px",
  x: 50,
  y: 70,
  width: 90,
  font: "Caladea, serif",
  opacity: 0.7
}
export const c2_24_3: TextInfo = {
  id: "3",
  text: "“Eight months later he hanged himself” (160).",
  color: "#1f600bff",
  size: "70px",
  x: 50,
  y: 90,
  width: 90,
  font: "Caladea, serif",
}
export const c2_25_1: TextInfo = {
  id: "1",
  text: "Now the reasoning behind the usage of magical realism in Beloved becomes clearer...",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 30,
  width: 90,
  font: "Baskerville, serif",
}
export const c2_25_2: TextInfo = {
  id: "2",
  text: "Remember that the “rememories” provided the foundation for a greater emotional depth, and now in “Notes”, we see that the lack of emotional depth from the more traditional writing style is a major factor in the failure of Norman Bowker's story.",
  color: "#000000ff",
  size: "60px",
  x: 50,
  y: 70,
  width: 90,
  font: "Caladea, serif",
}
export const c2_26_1: TextInfo = {
  id: "1",
  text: "After all, if the reader is unable to feel an emotional connection, how much does the story really matter?",
  color: "#dfd43dff",
  size: "90px",
  x: 50,
  y: 50,
  width: 90,
  font: "Caladea, serif",
}


