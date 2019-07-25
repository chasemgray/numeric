export default function parseDate(d) {
  function foo(d) {
    if (typeof d === 'string') {
      return Date.parse(d.replace(/-/g, '/'));
    }
    if (!(d instanceof Array)) {
      throw new Error('parseDate: parameter must be arrays of strings');
    }
    let ret = [];
      var k;
    for (k = 0; k < d.length; k++) {
      ret[k] = foo(d[k]);
    }
    return ret;
  }
  return foo(d);
}
