/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {

    const vowel = {
        a: true,
        e: true,
        i: true, 
        o: true, 
        u: true
    };

    const prefixSumResult = words.reduce((acc, cur, index) => {
        const prevSumResult = acc[index - 1] ?? 0;

        acc.push(
            vowel[cur[0]] && vowel[cur[cur.length - 1]] ? prevSumResult + 1 : prevSumResult
        );

        return acc;
    }, []);
    
    const ans = queries.map((range) => {
        const [start, end] = range;
    
        return prefixSumResult[end] - (prefixSumResult[start - 1] ?? 0);
    });

    return ans;
};
