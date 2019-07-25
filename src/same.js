export default function same(x, y) {
  let i;
  let n;
  if (!(x instanceof Array) || !(y instanceof Array)) {
    return false;
  }
  n = x.length;
  if (n !== y.length) {
    return false;
  }
  for (i = 0; i < n; i++) {
    if (x[i] === y[i]) {
      continue;
    }
    if (typeof x[i] === 'object') {
      if (!same(x[i], y[i])) return false;
    } else {
      return false;
    }
  }
  return true;
}
