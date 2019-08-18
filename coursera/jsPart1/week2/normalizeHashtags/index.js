/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    let smallHashes = hashtags.map(v => v.toLowerCase());
    console.log(smallHashes.indexOf('coursera'));
    return (smallHashes.filter((v, i) => smallHashes.indexOf(v) === i).join(', '));
};
