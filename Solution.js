function miniMaxSum(arr) {
    // Write your code here
    console.log (arr.sort((a, b) => a - b).slice(0,-1).reduce((acc, curr) => acc + curr),
    arr.sort((a, b) => a - b).slice(1).reduce((acc, curr) => acc + curr));
}
