function fibonacciIteration(n) {
    // fibonacci sequence via iteration
    let fibonacciSequence = [0, 1];

    for (let i = 0; i < n - 2; i++) {
        fibonacciSequence.push(
            fibonacciSequence[fibonacciSequence.length - 2] +
                fibonacciSequence[fibonacciSequence.length - 1]
        );
    }
    return fibonacciSequence;
}

function fibonacciRecursion(n, i = 0, fibSeq = [0, 1]) {
    // fibonacci sequence via recursion
    if (i >= n) return fibSeq;

    if (i > 1)
        fibSeq.push(fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1]);

    return fibonacciRecursion(n, i + 1, fibSeq);
}

console.log(fibonacciIteration(8));
console.log(fibonacciRecursion(8));
