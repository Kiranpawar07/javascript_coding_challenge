
let Array1 = [1, 2, 3, 4, 5];
let N = Array1.length;
let K = 3;
RightRotateArray(Array1, N, K);

function RightRotateArray(a, n, k) {
  k = k % n;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      document.write(a[n + i - k] + ' ');
    } else {
      document.write(a[i - k] + ' ');
    }
  }
  document.write('<br>');
}
