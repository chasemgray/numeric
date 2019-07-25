import clone from './clone';

export default function LUsolve(LUP, b) {
  let i;
  let j;
  const { LU } = LUP;
  const n = LU.length;
  const x = clone(b);
  const { P } = LUP;
  let Pi;
  let LUi;
  let LUii;
  let tmp;

  for (i = n - 1; i !== -1; --i) x[i] = b[i];
  for (i = 0; i < n; ++i) {
    Pi = P[i];
    if (P[i] !== i) {
      tmp = x[i];
      x[i] = x[Pi];
      x[Pi] = tmp;
    }

    LUi = LU[i];
    for (j = 0; j < i; ++j) {
      x[i] -= x[j] * LUi[j];
    }
  }

  for (i = n - 1; i >= 0; --i) {
    LUi = LU[i];
    for (j = i + 1; j < n; ++j) {
      x[i] -= x[j] * LUi[j];
    }

    x[i] /= LUi[i];
  }

  return x;
}
