/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const checkedVowelStrings = words.map((word) => {
        return checkVowelString(word);
    });
    
    const ans = queries.map((range) => {
        const [start, end] = range;
    
        return checkedVowelStrings.filter((vowelString, index) => {
            return (index >= start && index <= end) && vowelString;
        }).length;
    });

    return ans;
};

function checkVowelString(word) {
    const vowel = {
        a: true,
        e: true,
        i: true, 
        o: true, 
        u: true
    };

    const startChar = word[0];
    const endChar = word[word.length - 1];

    return vowel[startChar] && vowel[endChar];
} 