export default function dotMMsmall(x, y) {
  let i;
  let j;
  let k;
  let p;
  let q;
  let r;
  let ret;
  let foo;
  let bar;
  let woo;
  let i0;
  let k0;
  let p0;
  let r0;
  p = x.length;
  q = y.length;
  r = y[0].length;
  ret = Array(p);
  for (i = p - 1; i >= 0; i--) {
    foo = Array(r);
    bar = x[i];
    for (k = r - 1; k >= 0; k--) {
      woo = bar[q - 1] * y[q - 1][k];
      for (j = q - 2; j >= 1; j -= 2) {
        i0 = j - 1;
        woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
      }
      if (j === 0) {
        woo += bar[0] * y[0][k];
      }
      foo[k] = woo;
    }
    ret[i] = foo;
  }
  return ret;
}
