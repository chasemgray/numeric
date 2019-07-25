import dotVV from './dotVV';

const _getCol = function _getCol(A, j, x) {
  const n = A.length;
  let i;
  for (i = n - 1; i > 0; --i) {
    x[i] = A[i][j];
    --i;
    x[i] = A[i][j];
  }
  if (i === 0) x[0] = A[0][j];
};

export default function dotMMbig(x, y) {
  const gc = _getCol;
  let p = y.length;
  const v = Array(p);
  let m = x.length;
  let n = y[0].length;
  const A = new Array(m);
  let xj;
  const VV = dotVV;
  let i;
  let j;
  let k;
  let z;
  --p;
  --m;
  for (i = m; i !== -1; --i) A[i] = Array(n);
  --n;
  for (i = n; i !== -1; --i) {
    gc(y, i, v);
    for (j = m; j !== -1; --j) {
      z = 0;
      xj = x[j];
      A[j][i] = VV(xj, v);
    }
  }
  return A;
}
