import dim from './dim';

export default function getBlock(x, from, to) {
  const s = dim(x);
  function foo(x, k) {
    let i;
    const a = from[k];
    const n = to[k] - a;
    const ret = Array(n);
    if (k === s.length - 1) {
      for (i = n; i >= 0; i--) {
        ret[i] = x[i + a];
      }
      return ret;
    }
    for (i = n; i >= 0; i--) {
      ret[i] = foo(x[i + a], k + 1);
    }
    return ret;
  }
  return foo(x, 0);
}
