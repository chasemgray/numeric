export default function rep(s, v, k) {
  if (typeof k === 'undefined') {
    k = 0;
  }
  const n = s[k];
  const ret = Array(n);
  let i;
  if (k === s.length - 1) {
    for (i = n - 2; i >= 0; i -= 2) {
      ret[i + 1] = v;
      ret[i] = v;
    }
    if (i === -1) {
      ret[0] = v;
    }
    return ret;
  }
  for (i = n - 1; i >= 0; i--) {
    ret[i] = rep(s, v, k + 1);
  }
  return ret;
}
