export default function dotVV(x, y) {
  let i;
    var n = x.length;
    var i1;
    var ret = x[n - 1] * y[n - 1];
  for (i = n - 2; i >= 1; i -= 2) {
    i1 = i - 1;
    ret += x[i] * y[i] + x[i1] * y[i1];
  }
  if (i === 0) {
    ret += x[0] * y[0];
  }
  return ret;
}
