const sdim = function dim(A, ret, k) {
  if (typeof ret === 'undefined') {
    ret = [];
  }
  if (typeof A !== 'object') return ret;
  if (typeof k === 'undefined') {
    k = 0;
  }
  if (!(k in ret)) {
    ret[k] = 0;
  }
  if (A.length > ret[k]) ret[k] = A.length;
  let i;
  for (i in A) {
    if (A.hasOwnProperty(i)) dim(A[i], ret, k + 1);
  }
  return ret;
};

export default function clone(A, k, n) {
  if (typeof k === 'undefined') {
    k = 0;
  }
  if (typeof n === 'undefined') {
    n = sdim(A).length;
  }
  let i;
  const ret = Array(A.length);
  if (k === n - 1) {
    for (i in A) {
      if (A.hasOwnProperty(i)) ret[i] = A[i];
    }
    return ret;
  }
  for (i in A) {
    if (A.hasOwnProperty(i)) ret[i] = clone(A[i], k + 1, n);
  }
  return ret;
}
