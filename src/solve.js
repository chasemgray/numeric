import LUsolve from './LUSolve';

export default function solve(A, b, fast) {
  return LUsolve(numeric.LU(A, fast), b);
}
