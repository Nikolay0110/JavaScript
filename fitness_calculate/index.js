import { calcSummaryRate } from "./calcSummaryRate.js";

let mondayRation = {
    breakfast: 1240,
    lunch: 765,
    dinner: 564,
};

mondayRation = calcSummaryRate(mondayRation);

console.log(mondayRation.summary);

const tuesdayRation = {
    breakfast: 780,
    "coffee-break": 115,
    lunch: 975,
    "afternoon-tea": 230,
    dinner: 441,
    summary: 0,
};

calcSummaryRate(tuesdayRation);

console.log(tuesdayRation.summary);
