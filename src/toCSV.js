export default function toCSV(A) {
  let s = numeric.dim(A);
  let i; var j; var m; var n; var row; var ret;
  m = s[0];
  n = s[1];
  ret = [];
  for (i = 0; i < m; i++) {
    row = [];
    for (j = 0; j < m; j++) {
      row[j] = A[i][j].toString();
    }
    ret[i] = row.join(', ');
  }
  return `${ret.join('\n')  }\n`;
}
