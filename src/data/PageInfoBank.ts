import type { PageInfo } from "../templateTypes/PageInfo";
import type { TextInfo } from "../templateTypes/TextInfo";
import * as TextInfoBank from "./TextInfoBank";

function repeatedInfo(textInfo: TextInfo) {
  return {...textInfo, transitionIn: "none"};
}
export const pageInfos: PageInfo[] = [
  {
    textBlocks: [TextInfoBank.c0_title1, TextInfoBank.c0_title2, TextInfoBank.c0_title3, TextInfoBank.c0_title4],
    bgColor: "#ffffff",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_1_1, TextInfoBank.c0_1_2],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_2_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_2_1r, TextInfoBank.c0_2_2],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_2_1r, TextInfoBank.c0_2_2, TextInfoBank.c0_2_3],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_2_1r, TextInfoBank.c0_2_2, TextInfoBank.c0_2_3, TextInfoBank.c0_2_4],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_2_1r, TextInfoBank.c0_2_2, TextInfoBank.c0_2_3, TextInfoBank.c0_2_4, TextInfoBank.c0_2_5],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_3_1, TextInfoBank.c0_3_3, TextInfoBank.c0_3_4, TextInfoBank.c0_3_5],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_4_1, TextInfoBank.c0_4_2, repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_5_2, repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_6_2, repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_7_2, repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_7_2), TextInfoBank.c0_8_2, repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_9_2, repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_9_3, repeatedInfo(TextInfoBank.c0_9_2), repeatedInfo(TextInfoBank.c0_4_1), repeatedInfo(TextInfoBank.c0_3_3), repeatedInfo(TextInfoBank.c0_3_4), repeatedInfo(TextInfoBank.c0_3_5)],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_10_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_11_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_12_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_12_1), TextInfoBank.c0_12_2],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_13_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_13_1), TextInfoBank.c0_13_2a],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_13_1), TextInfoBank.c0_13_2b],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_13_1), TextInfoBank.c0_13_2c],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_13_1), TextInfoBank.c0_13_2cr, TextInfoBank.c0_13_3],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_14_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_15_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_16_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_16_1), TextInfoBank.c0_16_2],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_16_1), repeatedInfo(TextInfoBank.c0_16_2), TextInfoBank.c0_16_3],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_16_1), repeatedInfo(TextInfoBank.c0_16_2), repeatedInfo(TextInfoBank.c0_16_3), TextInfoBank.c0_16_4],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_16_1), repeatedInfo(TextInfoBank.c0_16_2), repeatedInfo(TextInfoBank.c0_16_3), repeatedInfo(TextInfoBank.c0_16_4), TextInfoBank.c0_16_5],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_17_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c0_18_1],
    bgColor: "#f0f0f0",
    bgSnapIn: false
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c0_18_1), TextInfoBank.c0_18_2, TextInfoBank.c0_18_3],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false
  },
  {
    textBlocks: [TextInfoBank.c1_1_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_2_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_2_1), TextInfoBank.c1_2_2],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_3_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_3_1), TextInfoBank.c1_quote1_1, TextInfoBank.c1_cite_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_4_1, TextInfoBank.c1_quote1_2],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_5_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_6_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_7_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_7_1), TextInfoBank.c1_quote2_1 ,TextInfoBank.c1_cite_2],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_8_1, repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_8_2, repeatedInfo(TextInfoBank.c1_8_1), repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_9_1, repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_10_1, repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_11_1, repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_11_1), TextInfoBank.c1_11_2, repeatedInfo(TextInfoBank.c1_quote2_1)],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_12_1],
    bgColor: "#fdc5b4ff",
    bgSnapIn: false,
  },
  {
    textBlocks: [TextInfoBank.c1_segmentedQuote1, TextInfoBank.c1_13_1],
    bgColor: "#fdc5b4ff", 
  },
  {
    textBlocks: [TextInfoBank.c1_segmentedQuote2, TextInfoBank.c1_13_2, TextInfoBank.c1_13_1b],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_segmentedQuote3, TextInfoBank.c1_13_3, TextInfoBank.c1_13_2b, TextInfoBank.c1_13_1c],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_segmentedQuote4, TextInfoBank.c1_13_4, TextInfoBank.c1_13_3b, TextInfoBank.c1_13_2c],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_13_5],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_13_6],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_13_7],
    bgColor: "#84584bff",
  },
  {
    textBlocks: [TextInfoBank.c1_13_8],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_14_1],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_15_1, TextInfoBank.c1_15_2, TextInfoBank.c1_quote2_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_quote2_3, TextInfoBank.c1_16_1, TextInfoBank.c1_16_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_17_1],
    bgColor: "#fdc5b4ff",
  },




]