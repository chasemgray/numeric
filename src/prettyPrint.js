const _myIndexOf = function _myIndexOf(w) {
  const n = this.length;
  let k;
  for (k = 0; k < n; ++k) if (this[k] === w) return k;
  return -1;
};
const myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : _myIndexOf;

const precision = 4;
const largeArray = 50;

export default function prettyPrint(x) {
  function fmtnum(x) {
    if (x === 0) {
      return '0';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
    if (x < 0) {
      return `-${fmtnum(-x)}`;
    }
    if (isFinite(x)) {
      let scale = Math.floor(Math.log(x) / Math.log(10));
      let normalized = x / Math.pow(10, scale);
      let basic = normalized.toPrecision(precision);
      if (parseFloat(basic) === 10) {
        scale++;
        normalized = 1;
        basic = normalized.toPrecision(precision);
      }
      return `${parseFloat(basic).toString()}e${scale.toString()}`;
    }
    return 'Infinity';
  }
  const ret = [];
  function foo(x) {
    let k;
    if (typeof x === 'undefined') {
      ret.push(Array(precision + 8).join(' '));
      return false;
    }
    if (typeof x === 'string') {
      ret.push(`"${x}"`);
      return false;
    }
    if (typeof x === 'boolean') {
      ret.push(x.toString());
      return false;
    }
    if (typeof x === 'number') {
      let a = fmtnum(x);
      const b = x.toPrecision(precision);
      const c = parseFloat(x.toString()).toString();
      const d = [a, b, c, parseFloat(b).toString(), parseFloat(c).toString()];
      for (k = 1; k < d.length; k++) {
        if (d[k].length < a.length) a = d[k];
      }
      ret.push(Array(precision + 8 - a.length).join(' ') + a);
      return false;
    }
    if (x === null) {
      ret.push('null');
      return false;
    }
    if (typeof x === 'function') {
      ret.push(x.toString());
      var flag = false;
      for (k in x) {
        if (x.hasOwnProperty(k)) {
          if (flag) ret.push(',\n');
          else ret.push('\n{');
          flag = true;
          ret.push(k);
          ret.push(': \n');
          foo(x[k]);
        }
      }
      if (flag) ret.push('}\n');
      return true;
    }
    if (x instanceof Array) {
      if (x.length > largeArray) {
        ret.push('...Large Array...');
        return true;
      }
      var flag = false;
      ret.push('[');
      for (k = 0; k < x.length; k++) {
        if (k > 0) {
          ret.push(',');
          if (flag) ret.push('\n ');
        }
        flag = foo(x[k]);
      }
      ret.push(']');
      return true;
    }
    ret.push('{');
    var flag = false;
    for (k in x) {
      if (x.hasOwnProperty(k)) {
        if (flag) ret.push(',\n');
        flag = true;
        ret.push(k);
        ret.push(': \n');
        foo(x[k]);
      }
    }
    ret.push('}');
    return true;
  }
  foo(x);
  return ret.join('');
}
