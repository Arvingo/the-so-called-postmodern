import type { PageInfo } from "../templateTypes/PageInfo";
import * as TextInfoBank from "./TextInfoBank";

export const pageInfos: PageInfo[] = [
  {
    textBlocks: [TextInfoBank.info1, TextInfoBank.info1_2],
    bgColor: "#ffffff",
    bgSnapIn: true
  },
  {
    textBlocks: [TextInfoBank.info2, TextInfoBank.info2_2],
    bgColor: "#f0f0f0"
  },
  {
    textBlocks: [TextInfoBank.info3, TextInfoBank.info3_2,TextInfoBank.info3_3],
    bgColor: "rgba(106, 40, 40, 1)"
  },
  {
    textBlocks: [TextInfoBank.info3_2],
    bgColor: "rgba(106, 40, 40, 1)"
  }
]
