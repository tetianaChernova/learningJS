/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let dateFromString = date.split(' ')[0].split('-');
    let hoursFromString = date.split(' ')[1].split(':');
    let d = new Date(Date.UTC(dateFromString[0], dateFromString[1] - 1, dateFromString[2], hoursFromString[0], hoursFromString[1]));

    return {
        add: function (value, key) {
            if (value > 0) {
                //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
                if (key === ("years")) {
                    console.log("Year", d.getUTCFullYear());
                    d.setUTCFullYear(d.getUTCFullYear() + value);
                } else if (key === ("months")) {
                    console.log("months", d.getUTCMonth());
                    d.setUTCMonth(d.getUTCMonth() + value);
                } else if (key === ("days")) {
                    console.log("days", d.getUTCDate());
                    d.setUTCDate(d.getUTCDate() + value);
                } else if (key === ("hours")) {
                    console.log("hours", d.getUTCHours());
                    d.setUTCHours(d.getUTCHours() + value);
                } else if (key === ("minutes")) {
                    console.log("minutes", d.getUTCMinutes());
                    d.setUTCMinutes(d.getUTCMinutes() + value);
                } else throw new TypeError();
            } else throw new TypeError();

            console.log(d);
            return this;
        },
        subtract: function (value, key) {
            if (value > 0) {
                //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
                if (key === ("years")) {
                    console.log("Year", d.getUTCFullYear());
                    d.setUTCFullYear(d.getUTCFullYear() - value);
                } else if (key === ("months")) {
                    console.log("months", d.getUTCMonth());
                    d.setUTCMonth(d.getUTCMonth() - value);
                } else if (key === ("days")) {
                    console.log("days", d.getUTCDate());
                    d.setUTCDate(d.getUTCDate() - value);
                } else if (key === ("hours")) {
                    console.log("hours", d.getUTCHours());
                    d.setUTCHours(d.getUTCHours() - value);
                } else if (key === ("minutes")) {
                    console.log("minutes", d.getUTCMinutes());
                    d.setUTCMinutes(d.getUTCMinutes() - value);
                } else throw new TypeError();
            } else throw new TypeError();
            return this;
        }
    }
};
