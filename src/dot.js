import dim from './dim';
import dotMMsmall from './dotMMSmall';
import dotMMbig from './dotMMBig';
import dotMV from './dotMV';
import dotVM from './dotVM';
import dotVV from './dotVV';

export default function dot(x, y) {
  switch (dim(x).length * 1000 + dim(y).length) {
    case 2002:
      if (y.length < 10) return dotMMsmall(x, y);
      return dotMMbig(x, y);
    case 2001:
      return dotMV(x, y);
    case 1002:
      return dotVM(x, y);
    case 1001:
      return dotVV(x, y);
    case 1000:
      return mulVS(x, y); // don't exist in numeric
    case 1:
      return mulSV(x, y); // don't exist in numeric
    case 0:
      return x * y;
    default:
      throw new Error('numeric.dot only works on vectors and matrices');
  }
}
