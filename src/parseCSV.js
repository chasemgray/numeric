import parseFloat_ from './parseFloat';

export default function parseCSV(t) {
  const foo = t.split('\n');
  let j;
  let k;
  const ret = [];
  const pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
  const patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
  const stripper = function(n) {
    return n.substr(0, n.length - 1);
  };
  let count = 0;
  for (k = 0; k < foo.length; k++) {
    const bar = `${foo[k]},`.match(pat);
    var baz;
    if (bar.length > 0) {
      ret[count] = [];
      for (j = 0; j < bar.length; j++) {
        baz = stripper(bar[j]);
        if (patnum.test(baz)) {
          ret[count][j] = parseFloat_(baz);
        } else ret[count][j] = baz;
      }
      count++;
    }
  }
  return ret;
}
