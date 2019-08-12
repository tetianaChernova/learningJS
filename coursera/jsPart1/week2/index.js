/**
 * @param {String} tweet
 * @returns {String[]}
 */
let result = [];
module.exports = function (tweet) {
    tweet.split(" ").filter(isHashtag).forEach(deletingHash);
    return result;
};

function isHashtag(word) {
    return word.charAt(0) === "#";
}

function deletingHash(word, index) {
    result.push(word.slice(1));
}


