export default function(A) {
  const n = Math.min(A.length, A[0].length);
  let i;
  let ret = Array(n);
  for (i = n - 1; i >= 1; --i) {
    ret[i] = A[i][i];
    --i;
    ret[i] = A[i][i];
  }
  if (i === 0) {
    ret[0] = A[0][0];
  }
  return ret;
}
