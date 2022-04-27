// ? Problem #1
function toBinary(n, a) {
  let res = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    res += n[i] * a ** (n.length - [i] - 1);
  }
  return res;
}

console.log(toBinary("10011011", 2));

// ?Problem #2
//   let newArr = [1, -3, 12, -1, 3, -4, -2, 1, -7];
// let n = true;
// if(newArr[0] < 0){
//   for(let i = 0; i < newArr.length; i++){
//     if(i % 2 == 0 && newArr[i] > 0){
//       n = i;
//       break
//     } else if(i % 2 != 0 && newArr[i] < 0){
//       n = i;
//       break;
//     }
//   }
// } else{
//   for(let i = 0; i < newArr.length; i++){
//     if(i % 2 == 0 && newArr[i] < 0){
//       n = i;
//       break
//     } else if(i % 2 != 0 && newArr[i] > 0){
//       n = i;
//       break;
//     }
//   }
// }
// console.log(n);

// ?Problem #3
// let Object = {
//   array: [15, 20, 12, 4, -13, 5],
//   at(index) {
//     if (this.array.length > 0) {
//       if (index >= 0) {
//         for (let i = 0; i < this.array.length; i++) {
//           if (i == index) {
//             console.log(this.array[i]);
//           }
//         }
//       } else {
//         for (let i = 0; i < this.array.length; i++) {
//           if (i == Math.abs(index)) {
//             console.log(this.array.reverse()[Math.abs(i)-1]);
//           }
//         }
//       }
//     }
//   },
// };
// Object.at(-2);

// ? Problem #4
// let i = 'hello'
// function revers(i) {
//     let l = "";
//     for (let k = i.length - 1; k >= 0; k--) {
//       l += i[k];
//     }
//     return l;
//   }
// console.log(revers(i));

// ? Problem 5
// let ob = { x: 1, y: 2 };
// function som(obj) {
//   let arr = [];
//   for (let index in obj) {
//     let dow = [index, obj[index]];
//     arr.push(dow);
//   }

//   console.log(arr);
// }
// som(ob);

// ?Problem #6

// ?Problem #7
// let a = [1, "t", 15, "t"];
// let b = [2, 4];
// let result = [...a, ...b]

// newArr = result.filter(function(item, pos, self) {
//   return self.indexOf(item) == pos;
// })

// console.log(newArr);

// ?Problem #8
// const matrix = [
//   [1, 1, 1, 1],
//   [5, 2, 2, 100],
//   [9, 4, 2, 1],
// ];

// const getMinimalCell = function (table, i, j) {
//   const top = table[i - 1]?.[j];
//   const left = table[i][j - 1];
//   let sum = 0;

//   if (top !== undefined && left !== undefined) {
//     sum += top > left ? left : top;
//   }
//   if (top !== undefined && left === undefined) {
//     sum = table[i - 1][j];
//   }

//   if (top === undefined && left !== undefined) {
//     sum = table[i][j - 1];
//   }
//   return sum;
// };

// const getMinRoute = function (matrix, i, j, res = []) {
//   res[res.length] = [i, j];
//   const left = matrix[i][j - 1];
//   const top = matrix[i - 1]?.[j];

//   if (top !== undefined && left !== undefined) {
//     if (left > top) {
//       getMinRoute(matrix, i - 1, j, res);
//     } else getMinRoute(matrix, i, j - 1, res);
//   }

//   if (top !== undefined && left === undefined) {
//     getMinRoute(matrix, i - 1, j, res);
//   }

//   if (top === undefined && left !== undefined) {
//     getMinRoute(matrix, i, j - 1, res);
//   }
//   return res;
// };

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] += getMinimalCell(matrix, i, j);
//   }
// }

// const res = getMinRoute(matrix, matrix.length - 1, matrix[0].length - 1);
// console.log(res.reverse());
// console.table(matrix);
