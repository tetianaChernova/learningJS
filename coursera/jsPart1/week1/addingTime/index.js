/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    minutes += interval;
    hours += Math.floor(minutes / 60);

    hours %= 24;
    minutes %= 60;

    let formattedHours = ("0" + hours).slice(-2);
    let formattedMinutes = ("0" + minutes).slice(-2);
    // console.log(formattedHours + ':' + formattedMinutes);
    return formattedHours + ':' + formattedMinutes;
};
