const _dim = function _dim(x) {
  const ret = [];
  while (typeof x === 'object') {
    ret.push(x.length);
    x = x[0];
  }
  return ret;
};

export default function dim(x) {
  let y;
  let z;
  if (typeof x === 'object') {
    y = x[0];
    if (typeof y === 'object') {
      z = y[0];
      if (typeof z === 'object') {
        return _dim(x);
      }
      return [x.length, y.length];
    }
    return [x.length];
  }
  return [];
}
