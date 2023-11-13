export const calcSummaryRate = function (dailyRation) {
    let summary = 0;
    for (let key in dailyRation) {
        summary += dailyRation[key]
    }
    dailyRation['summary'] = summary;
    return dailyRation
};