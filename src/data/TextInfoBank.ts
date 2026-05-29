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
  text: "The book is renowed for its use of nonlinear storytelling and Morrison's use of narrative techniques to enrich her messages",
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