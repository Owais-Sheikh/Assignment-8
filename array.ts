// ----------------------------Array Exercise----------------------------
// ------------------------------- Q # 1 ----------------------------------
//     1. Write a ts program to read and print elements of array.

// var arr: number[] = [10, 15, 20, 25, 30];
// arr.forEach(element => {
//     console.log(element);
// });

// ------------------------------- Q # 2 ----------------------------------
//     2. Write a ts program to print all negative elements in an array.

// var arr: number[] = [10, -13, 14, -20, -25, 30, -32];
// var negativeArr: number[] = arr.filter((items) => {
//     if (items < 0) {
//         console.log(items);
//     }
// })

// ------------------------------- Q # 3 ----------------------------------
//     3. Write a ts program to find sum of all array elements.

// var arr: number[] = [5, 34, 67, 89, 90, 95];
// var sumOfArr = arr.reduce(function (a, b): number {
//     return a + b;
// })
// console.log("Sum of element of array is : ", sumOfArr);

// ------------------------------- Q # 4 ----------------------------------
//     4. Write a ts program to find maximum and minimum element in an array.

// var maxMin: number[] = [3, 10, 25, 2, 13, 17];
// var sort = maxMin.sort((a, b) => a - b);
// var max: number = maxMin[0];
// var min: number = maxMin[maxMin.length - 1];
// console.log("Maximum is : ", max);
// console.log("Minimum is : ", min);

// ------------------------------- Q # 5 ----------------------------------
//     5. Write a ts program to find second largest element in an array.

// var secondLarge: number[] = [2, 56, 34, 15, 1, 53];
// var heavy = secondLarge.sort((a, b) => a - b)
// console.log(heavy[heavy.length - 2]);

// ------------------------------- Q # 6 ----------------------------------
//     6. Write a ts program to count total number of even and odd elements in an array.

// var evenOddArr: number[] = [2, 5, 7, 10, 13, 16, 19, 20, 21, 30];
// var countEven: number = 0, countOdd: number = 0;
// evenOddArr.filter(element => {
//     if (element % 2 == 0) {
//         countEven++;
//     }
//     else {
//         countOdd++;
//     }
// })
// console.log("Total number of Even number is : ", countEven);
// console.log("Total number of Odd number is : ", countOdd);

// ------------------------------- Q # 7 ----------------------------------
//     7. Write a ts program to count total number of negative elements in an array.

// var negativeArr: number[] = [12, -23, -45, 67, 56, -34, -78, -90];
// var countNegative: number = 0;
// negativeArr.map(element => {
//     if (element < 0) {
//         countNegative++;
//     }
// })
// console.log("Total no. of negative number in an array is: ", countNegative);

// ------------------------------- Q # 8 ----------------------------------
//     8. Write a ts program to copy all elements from an array to another array.

// var arr1: string[] = ["Owais", "Ali", "Majid", "Ahsan", "Faran"];
// var arr2: string[] = arr1.filter((element) => {
//     return element;
// })
// console.log("Copied array is : ", arr2);

// ------------------------------- Q # 9 ----------------------------------
//     9. Write a ts program to insert an element in an array.

// var arr: string[] = ["Sheikh", "Owais"];
// arr.push("raza");
// console.log("Array after inserting any element is : ", arr);

// ------------------------------- Q # 10 ----------------------------------
//     10. Write a ts program to delete an element from an array at specified position.

// var arr: number[] = [10, 20, 40, 50, 60];
// arr.splice(2, 1);
// console.log(arr);

// ------------------------------- Q # 11 ----------------------------------
//     11. Write a ts program to count frequency of each element in an array.

// var arr: number[] = [1, 3, 4, 2, 3, 1, 1, 2, 3, 4, 3, 2];
// var count: number = 0, countNum: number = 0;
// var array = arr.map((element) => {
//     arr.map((a) => {
//         if (a == element) {
//             count++;
//             countNum = a;
//         }
//     })
//     console.log(`Total no. of ${element} is : `, count);
//     count = 0;
// })

// ------------------------------- Q # 12 ----------------------------------
//     12. Write a ts program to print all unique elements in the array.

// var arr: number[] = [2, 3, 4, 2, 3, 5, 6, 2, 3, 4, 5, 3, 6];
// var unique = arr.filter((item, i, ar) => ar.indexOf(item) == i);
// console.log(unique);

// ------------------------------- Q # 13 ----------------------------------
//     13. Write a ts program to count total number of duplicate elements in an array.

// var arr: number[] = [2, 3, 4, 2, 3, 5, 6, 2, 3, 4, 5, 3, 6];
// var count: number = 0;
// var arr3: number[];
// var unique = arr.filter((item, i, ar) => ar.indexOf(item) == i);
// var arr2 = arr.filter((element) => {
//     arr.filter((a) => {
//         if (element == a) {
//             count++;
//         }
//         arr3.push(count)
//     })
// })

// ------------------------------- Q # 14 ----------------------------------
//     14. Write a ts program to delete all duplicate elements from an array.

// var arr: number[] = [1, 6, 9, 1, 4, 3, 3, 6, 9, 8, 8, 9, 6, 3, 4, 1];
// var uniqueElement = arr.filter((item, i, ar) => ar.indexOf(item) == i);
// console.log(uniqueElement);

// ------------------------------- Q # 15 ----------------------------------
//     15. Write a ts program to merge two array to third array.

// var arr1: number[] = [10, 20, 30, 40, 50];
// var arr2: number[] = [60, 70, 80, 90, 100];
// var arr3: number[] = arr1.concat(arr2);
// console.log("After merging two array is : ", arr3);

// ------------------------------- Q # 16 ----------------------------------
//     16. Write a ts program to find reverse of an array.

// var array: number[] = [10, 20, 30, 40, 50];
// array.reverse();
// console.log("Reverse of array is : ", array);

// ------------------------------- Q # 17 ----------------------------------
//     17. Write a ts program to put even and odd elements of array in two separate array.

// var arr1: number[] = [1, 3, 6, 8, 9, 11, 13, 14, 16, 17, 19, 21, 22, 23];
// var evenArray = arr1.filter((element) => element % 2 == 0)
// console.log("Even array is : ", evenArray);
// var oddArray = arr1.filter((element) => element % 2 != 0)
// console.log("Odd array is : ", oddArray);

// ------------------------------- Q # 18 ----------------------------------
//     18. Write a ts program to search an element in an array.

// var array: number[] = [12, 45, 67, 34, 89];
// var a: number = 34, flag: number = 0;;
// array.forEach(element => {
//     if (element == a) {
//         flag = 1;
//     }
// });
// if (flag == 1) {
//     console.log("Your number is found!!!");
// }
// else {
//     console.log("Your number is not found!!!");
// }

// ------------------------------- Q # 19 ----------------------------------
//     19. Write a ts program to sort array elements in ascending or descending order.

// var array: number[] = [2, 89, 45, 67, 3, 4, 12, 78, 45, 90, 34, 17];
// var ascendingArr = array.sort((a, b) => a - b);
// console.log("Ascending Order of this array is : ", ascendingArr);
// var descendingArr = array.sort((a, b) => b - a);
// console.log("Descending Order of this array is : ", descendingArr);

// ------------------------------- Q # 20 ----------------------------------
//     20. Write a ts program to sort even and odd elements of array separately.

// var arr1: number[] = [1, 3, 6, 8, 9, 11, 13, 14, 16, 17, 19, 2, 4, 21, 22, 23];
// var evenArray = arr1.filter((element) => element % 2 == 0 )
// var ascendingEvenArr = evenArray.sort((a, b) => a - b)
// console.log("Ascending Order of Even array is : ", ascendingEvenArr);
// var descendingEvenArr = evenArray.sort((a, b) => b - a)
// console.log("Descending Order of Even array is : ", descendingEvenArr);
// var oddArray = arr1.filter((element) => element % 2 != 0)
// var ascendingOddArr = oddArray.sort((a, b) => a - b)
// console.log("Ascending Order of Odd array is : ", ascendingOddArr);
// var descendingOddArr = oddArray.sort((a, b) => b - a)
// console.log("Descending Order of Odd array is : ", descendingOddArr);

// ------------------------------- Q # 21 ----------------------------------
//     21. Write a ts program to left rotate an array.

// var array: number[] = [1, 2, 3, 4, 5, 6, 7];
// var d: number = 3;
// var temp = array.splice(0, d);
// console.log(array.concat(temp));

// ------------------------------- Q # 22 ----------------------------------
//     22. Write a ts program to right rotate an array.

// var array: number[] = [1, 2, 3, 4, 5, 6, 7];
// var d: number = 6;
// var temp = array.splice(d, array.length);
// console.log(temp.concat(array));

