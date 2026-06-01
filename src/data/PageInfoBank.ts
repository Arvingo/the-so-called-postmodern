import type { PageInfo } from "../templateTypes/PageInfo";
import type { TextInfo } from "../templateTypes/TextInfo";
import * as TextInfoBank from "./TextInfoBank";

function repeatedInfo(textInfo: TextInfo) {
  return {...textInfo, transitionIn: "none"};
}
function faintInfo(textInfo: TextInfo) {
  return {...textInfo, opacity: 0.3};
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
  {
    textBlocks: [TextInfoBank.c1_18_1],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_19_1],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_19_1), TextInfoBank.c1_19_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_19_1), repeatedInfo(TextInfoBank.c1_19_2), TextInfoBank.c1_19_3],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_19_1), repeatedInfo(TextInfoBank.c1_19_2), repeatedInfo(TextInfoBank.c1_19_3), TextInfoBank.c1_19_4],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_20_1, TextInfoBank.c1_20_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_21_1, TextInfoBank.c1_quote3_1, TextInfoBank.c1_cite_3],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_21_2, TextInfoBank.c1_quote3_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_22_1, TextInfoBank.c1_quote3_3],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_23_1, TextInfoBank.c1_quote3_4],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_24_1, repeatedInfo(TextInfoBank.c1_quote3_4)],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_25_1],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_26_1],
    bgColor: "#fdc5b4ff",
  },
    {
    textBlocks: [TextInfoBank.c1_26_1b,TextInfoBank.c1_26_2],
    bgColor: "#fdc5b4ff",
  },
  {
    textBlocks: [TextInfoBank.c1_27_1],
    bgColor: "#f0f0f0",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c1_27_1), TextInfoBank.c1_27_2, TextInfoBank.c1_27_3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_1_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_1_1b, TextInfoBank.c2_1_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_1_1b), TextInfoBank.c2_1_2b, TextInfoBank.c2_1_3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_2_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_2_1b, TextInfoBank.c2_quote1_1, TextInfoBank.c2_cite_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_3_1, TextInfoBank.c2_quote1_2, TextInfoBank.c2_3_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_4_1, TextInfoBank.c2_quote1_3, TextInfoBank.c2_4_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_5_1, TextInfoBank.c2_segmentedQuote1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_segmentedQuote1b, TextInfoBank.c2_segmentedQuote2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_segmentedQuote1b), TextInfoBank.c2_segmentedQuote2b, TextInfoBank.c2_segmentedQuote3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_segmentedQuote1b), repeatedInfo(TextInfoBank.c2_segmentedQuote2b), TextInfoBank.c2_segmentedQuote3b, TextInfoBank.c2_segmentedQuote4],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_segmentedQuote5],
    bgColor: "#000000ff",
    bgSnapIn: true,
  },
  {
    textBlocks: [TextInfoBank.c2_segmentedQuote6],
    bgColor: "#000000ff",
    bgSnapIn: true,
  },
  {
    textBlocks: [TextInfoBank.c2_segmentedQuote7],
    bgColor: "#000000ff",
    bgSnapIn: true,
  },
  {
    textBlocks: [TextInfoBank.c2_segmentedQuote8],
    bgColor: "#000000ff",
    bgSnapIn: true,
  },
  {
    textBlocks: [TextInfoBank.c2_6_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_7_1, TextInfoBank.c2_quote1_4, TextInfoBank.c2_7_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_8_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_9_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_9_1b, TextInfoBank.c2_9_2, TextInfoBank.c2_9_3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_9_1b), TextInfoBank.c2_9_2b, TextInfoBank.c2_9_3b],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_10_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_11_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_11_1r, TextInfoBank.c2_11_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_11_1r, TextInfoBank.c2_12_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_quote2_1, TextInfoBank.c2_quote2_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_1), repeatedInfo(TextInfoBank.c2_quote2_2), TextInfoBank.c2_quote2_3, TextInfoBank.c2_quote2_4],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_1), repeatedInfo(TextInfoBank.c2_quote2_2), 
      repeatedInfo(TextInfoBank.c2_quote2_3), repeatedInfo(TextInfoBank.c2_quote2_4), TextInfoBank.c2_quote2_5, TextInfoBank.c2_quote2_6],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_1), repeatedInfo(TextInfoBank.c2_quote2_2), 
      repeatedInfo(TextInfoBank.c2_quote2_3), repeatedInfo(TextInfoBank.c2_quote2_4), repeatedInfo(TextInfoBank.c2_quote2_5), 
      repeatedInfo(TextInfoBank.c2_quote2_6), TextInfoBank.c2_quote2_7, TextInfoBank.c2_quote2_8],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_2), 
      repeatedInfo(TextInfoBank.c2_quote2_3), repeatedInfo(TextInfoBank.c2_quote2_4), repeatedInfo(TextInfoBank.c2_quote2_5), 
      repeatedInfo(TextInfoBank.c2_quote2_6), repeatedInfo(TextInfoBank.c2_quote2_7), repeatedInfo(TextInfoBank.c2_quote2_8), 
      TextInfoBank.c2_quote2_9, TextInfoBank.c2_quote2_10],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_4), repeatedInfo(TextInfoBank.c2_quote2_5), 
      repeatedInfo(TextInfoBank.c2_quote2_6), TextInfoBank.c2_13_1, 
      repeatedInfo(TextInfoBank.c2_quote2_9), repeatedInfo(TextInfoBank.c2_quote2_10), TextInfoBank.c2_quote2_11],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_4), repeatedInfo(TextInfoBank.c2_quote2_5), 
      repeatedInfo(TextInfoBank.c2_quote2_6), TextInfoBank.c2_14_1, TextInfoBank.c2_14_2, 
      repeatedInfo(TextInfoBank.c2_quote2_9), repeatedInfo(TextInfoBank.c2_quote2_10), repeatedInfo(TextInfoBank.c2_quote2_11)],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote2_4), repeatedInfo(TextInfoBank.c2_quote2_5), 
      repeatedInfo(TextInfoBank.c2_quote2_6), TextInfoBank.c2_15_1, 
      repeatedInfo(TextInfoBank.c2_quote2_9), repeatedInfo(TextInfoBank.c2_quote2_10), repeatedInfo(TextInfoBank.c2_quote2_11)],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_16_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_16_1b, TextInfoBank.c2_16_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_17_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_18_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_18_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_19_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_19_1), TextInfoBank.c2_19_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_19_1), TextInfoBank.c2_19_2b],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_20_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_20_1), TextInfoBank.c2_quote3_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_20_1), repeatedInfo(TextInfoBank.c2_quote3_1), TextInfoBank.c2_quote3_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_20_1), repeatedInfo(TextInfoBank.c2_quote3_1), repeatedInfo(TextInfoBank.c2_quote3_2), TextInfoBank.c2_quote3_3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [repeatedInfo(TextInfoBank.c2_quote3_1), repeatedInfo(TextInfoBank.c2_quote3_2), repeatedInfo(TextInfoBank.c2_quote3_3), TextInfoBank.c2_quote3_4],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [faintInfo(repeatedInfo(TextInfoBank.c2_quote3_1)), faintInfo(repeatedInfo(TextInfoBank.c2_quote3_2)), 
      faintInfo(repeatedInfo(TextInfoBank.c2_quote3_3)), faintInfo(repeatedInfo(TextInfoBank.c2_quote3_4)), TextInfoBank.c2_quote3_5],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_21_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_21_1b, TextInfoBank.c2_21_2, TextInfoBank.c2_21_3, TextInfoBank.c2_21_4],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_22_1, TextInfoBank.c2_22_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_23_1],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_23_1b, TextInfoBank.c2_23_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_24_1, TextInfoBank.c2_24_2, TextInfoBank.c2_24_3],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_25_1, TextInfoBank.c2_25_2],
    bgColor: "#8da18fff",
  },
  {
    textBlocks: [TextInfoBank.c2_26_1],
    bgColor: "#000000ff",
  },

  
  




  


  






]