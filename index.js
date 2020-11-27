var perm = require('array-permutation');
var iter = perm([1, 2, 3, 4,5,6,7,8,9,10]);
for (var p of iter) {
    let good = true;
    for (let i=0; i <10; i++) {
       if (p[i%10]+p[(i+1)%10]+p[(i+2)%10] > 18) {
         good = false;
       }
    }
    if (good === true) {
      console.log(p);
    }
}