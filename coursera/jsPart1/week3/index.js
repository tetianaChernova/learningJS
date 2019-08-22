/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return {
        add: function (value, key) {

            let d = new Date(date);
            if (value > 0) {
                //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
                if (key.localeCompare("years")) {
                    d.setUTCFullYear(d.getUTCFullYear() + value);
                } else if (key.localeCompare("months")) {
                    d.setUTCMonth(d.getUTCMonth() + value);
                } else if (key.localeCompare("days")) {
                    d.setUTCDate(d.getUTCDate() + value);
                } else if (key.localeCompare("hours")) {
                    d.setUTCHours(d.getUTCHours() + value);
                } else if (key.localeCompare("minutes")) {
                    d.setUTCMinutes(d.getUTCMinutes() + value);
                }
                else throw new TypeError();
            } else throw new TypeError();

            console.log(d.toDateString());
            return this;
        },
        subtract: function () {
            return this;
        }
    }
};
