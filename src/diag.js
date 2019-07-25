export default (diag = function diag(d) {
  let i;
    var i1;
    var j;
    var n = d.length;
    var A = Array(n);
    var Ai;
  for (i = n - 1; i >= 0; i--) {
    Ai = Array(n);
    i1 = i + 2;
    for (j = n - 1; j >= i1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }
    if (j > i) {
      Ai[j] = 0;
    }
    Ai[i] = d[i];
    for (j = i - 1; j >= 1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }
    if (j === 0) {
      Ai[0] = 0;
    }
    A[i] = Ai;
  }
  return A;
});
