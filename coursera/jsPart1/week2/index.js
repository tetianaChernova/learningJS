/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let result = [];
    tweet.split(' ').filter(v => v.startsWith('#')).forEach(list => {
        result.push(list.slice(1));
    });
    return result;
};





