export default function parseFloat(d) {
  function foo(d) {
    if (typeof d === 'string') {
      return parseFloat(d);
    }
    if (!(d instanceof Array)) {
      throw new Error('parseFloat: parameter must be arrays of strings');
    }
    const ret = [];
    let k;
    for (k = 0; k < d.length; k++) {
      ret[k] = foo(d[k]);
    }
    return ret;
  }
  return foo(d);
}
