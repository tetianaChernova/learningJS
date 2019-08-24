/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let d= new Date(date);
    let getValue = function(){
        return `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(
            -2)} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
    };
    return {
        add: function (value, key) {
            if (value > 0) {
                //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
                if (key === ("years")) {
                    d.setFullYear(d.getFullYear() + value);
                } else if (key === ("months")) {
                    d.setMonth(d.getMonth() + value);
                } else if (key === ("days")) {
                    d.setDate(d.getDate() + value);
                } else if (key === ("hours")) {
                    d.setHours(d.getHours() + value);
                } else if (key === ("minutes")) {
                    d.setMinutes(d.getMinutes() + value);
                } else throw new TypeError();
            } else throw new TypeError();
            this.value = getValue();
            return this;
        },
        subtract: function (value, key) {
            if (value > 0) {
                //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
                if (key === ("years")) {
                    d.setFullYear(d.getFullYear() - value);
                } else if (key === ("months")) {
                    d.setMonth(d.getMonth() - value);
                } else if (key === ("days")) {
                    d.setDate(d.getDate() - value);
                } else if (key === ("hours")) {
                    d.setHours(d.getHours() - value);
                } else if (key === ("minutes")) {
                    d.setMinutes(d.getMinutes() - value);
                } else throw new TypeError();
            } else throw new TypeError();
            this.value = getValue();
            return this;
        }
    }
};
