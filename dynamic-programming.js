function fb_memo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fb_memo(n - 1, memo) + fb_memo(n - 2, memo);
    memo[n] = res;
    console.log(memo);
    return res;
}

// console.log(fb_memo(10));

function fb_table(n) {
    if (n <= 2) return 1;
    let fbNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fbNums[i] = fbNums[i - 1] + fbNums[i - 2];
    }

    return fbNums[n];
}

console.log(fb_table(100));