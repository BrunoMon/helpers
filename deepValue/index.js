export const deepValue = (...args) => o => args.reduce((xs, x) =>
    (xs != undefined && xs[x] != undefined) ? xs[x] : null, o)