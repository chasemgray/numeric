export default function dotVM(x, y) {
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
  let s1;
  let s2;
  let s3;
  let baz;
  let accum;
  p = x.length;
  q = y[0].length;
  ret = Array(q);
  for (k = q - 1; k >= 0; k--) {
    woo = x[p - 1] * y[p - 1][k];
    for (j = p - 2; j >= 1; j -= 2) {
      i0 = j - 1;
      woo += x[j] * y[j][k] + x[i0] * y[i0][k];
    }
    if (j === 0) {
      woo += x[0] * y[0][k];
    }
    ret[k] = woo;
  }
  return ret;
}
