import dotVV from './dotVV';

export default function dotMV(x, y) {
  const p = x.length;
  const q = y.length;
  let i;
  const ret = Array(p);
  for (i = p - 1; i >= 0; i--) {
    ret[i] = dotVV(x[i], y);
  }
  return ret;
}
