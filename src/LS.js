import clone from './clone';

export default function(A, fast) {
  fast = fast || false;

  const { abs } = Math;
  let i;
  let j;
  let k;
  let absAjk;
  let Akk;
  let Ak;
  let Pk;
  let Ai;
  let max;
  const n = A.length;
  const n1 = n - 1;
  const P = new Array(n);
  if (!fast) A = clone(A);

  for (k = 0; k < n; ++k) {
    Pk = k;
    Ak = A[k];
    max = abs(Ak[k]);
    for (j = k + 1; j < n; ++j) {
      absAjk = abs(A[j][k]);
      if (max < absAjk) {
        max = absAjk;
        Pk = j;
      }
    }
    P[k] = Pk;

    if (Pk != k) {
      A[k] = A[Pk];
      A[Pk] = Ak;
      Ak = A[k];
    }

    Akk = Ak[k];

    for (i = k + 1; i < n; ++i) {
      A[i][k] /= Akk;
    }

    for (i = k + 1; i < n; ++i) {
      Ai = A[i];
      for (j = k + 1; j < n1; ++j) {
        Ai[j] -= Ai[k] * Ak[j];
        ++j;
        Ai[j] -= Ai[k] * Ak[j];
      }
      if (j === n1) Ai[j] -= Ai[k] * Ak[j];
    }
  }

  return {
    LU: A,
    P,
  };
}
