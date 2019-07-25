export default function bench(f, interval) {
  let t1;
  let t2;
  let n;
  let i;
  if (typeof interval === 'undefined') {
    interval = 15;
  }
  n = 0.5;
  t1 = new Date();
  while (1) {
    n *= 2;
    for (i = n; i > 3; i -= 4) {
      f();
      f();
      f();
      f();
    }
    while (i > 0) {
      f();
      i--;
    }
    t2 = new Date();
    if (t2 - t1 > interval) break;
  }
  for (i = n; i > 3; i -= 4) {
    f();
    f();
    f();
    f();
  }
  while (i > 0) {
    f();
    i--;
  }
  t2 = new Date();
  return (1000 * (3 * n - 1)) / (t2 - t1);
}
