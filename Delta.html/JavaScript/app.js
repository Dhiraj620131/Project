// for loop
// for (let i=1; i<=5;i++) {
//   console.log(i);
// }
// for (let i=0;i<=10;i++) {
//     console.log(i);
// }
// for (let i=10;i>=1;i-=3) {
//     console.log(i);
// }
// for (let i=1;i<=15;i+=2) {
//    console.log(i)
// }
// console.log("backwards");
// for (let i=15;i>=1;i-=2) {
//    console.log(i);
// }
// for (let i=2;i<=10;i+=2) {
//    console.log(i);
// }
// console.log("backwards");
// for (let i=10;i>=2;i-=2) {
//    console.log(i)
// }
// for (let i=1;i>=0; i++) {
//    console.log(i)
// }
// for (let i=1;i<=5; i--) {
//    console.log(i)
// }
// for (let i=1; i++) {
//    console.loglog(i)
// }
// for (i=5;i<=50;i+=5) {
//    console.log(i)
// }
// let n=prompt("write your number: ");
// n= parseInt(n);
// for (let i=n; i <=n * 10;i+=n) {
//    console.log(i);
// }
// for (let i=1;i<=3;i++){
//    console.log(`outer loop ${i}`);
//    for(let j=1;j<=3;j++) {
//       console.log(j);
//    }
// }
// for (let i=0;i<=5;i++) {
//    console.log(`outer loop ${i}`);
//    for(let j=1;j<=3;j+=2){
//    console.log(j);
// }
// }
// let i=1;
// while (i<=20) {
//    console.log(i);
//    i+=2
// }
// let favMovie="Avatar";
// let guess=prompt("guess my favourite movie");
// while(guess!=favMovie) {
//    if (guess == "quit" ){
//       console.log("you quit")
//    }
   
//    guess=prompt("wrong guess. Please try again");
// }
// if (guess==favMovie) {
//    console.log("congrats!!");


// }
// let i=1;
// while(i<=5) {
//    if (i==3) {
//       break;}

// console.log(i);
// i++;
// }
// console.log("we used break at 3");
// let fruits=["mango","apple","banana","litchi","papaya"];
// fruits.push("pineapple");

// // for (i=1;i<fruits.length;i+=2) {
// //    console.log(i,fruits[i]);
// // }
// for (let i=fruits.length-1;i>=0;i--) {
//    console.log(i,fruits[i]);
// }
// let heroes= [["ironman","spiderman","thor","blackpanther"],
// ["superman", "wonder woman", "falsh","panther"]];
// for (let i=0;i<heroes.length;i++) {
//    console.log(i,heroes[i],heroes[i].length);

//    for (let k=0; k<heroes[i].length;k++) {
//    console.log(`k=${k}, ${heroes[i][k]}`);
// }
// // }
// let student=[ ["Dhiraj",99],["aman",98],["shardha",87] ];
// for (let i=0; i<student.length; i++) {
//    console.log(`info of student  #${i+1}`);
//    for (let j=0; j<student[i].length; j++) {
   
//       console.log(student[i][j]);
//    }
// }
// let fruits=["mango","apple","banana","orange","litchi"];
// for (fruits of fruits) {
//    console.log(fruits);
// }
// for (char of "apnacollege") {
//    console.log(char);
// }
// let heroes=[["superman","batman","wonder women","thor"],["spiderman","ironman","bat","hgd"]];
// for (list of heroes) {
//    for(hero of list) {
//    console.log(hero);
// }
// }
//object 
// const profile= {
//  username:"Dhiraj Kumar",
//  age:17,
//  followers: 569,
//  following:4,
//  post:195,
//  isfollow:true,
// };
// console.log(profile);
//logical operators
// let a=3;
// let b=5;

// console.log(a>b || a!=3);
// Conditional Statements
// let age=18;
// if (age>=18) {
//     console.log("eligible for vote");

// }else {
//     console.log("not eligible for vote");
// }
// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// } else if (mode==="blue"){
//     color="blue";

// }
// else {
//     color="white";
// }
// console.log(color);
//ternary operator
// let age=15;
// let result= age>=18? "adult":"not adult";
// console.log(result);
// let num=prompt("Enter a number: ");
// if (num % 5===0) {
//     console.log(num,"is multiple of 5");
// }else {
//     console.log(num,"is not multiple of 5");
// }
// let marks=prompt("Enter your marks: ");
// if (marks>=90 && marks<=100) {
//     console.log("A Grade");
// }else if (marks >=70 && marks<=89) {
//     console.log("B Grade")

// }else if (marks >=60 && marks <=69) {
//     console.log("C Grade")
    
// }else if (marks >=50 && marks <= 59) {
//     console.log("D Grade")
    
// }else {
//     console.log("F Grade")
// }
// for (let i=1;i<=10;i++) {
//     console.log("apna College");
// }
// let sum=0;
// let n=100
// for (let i=1;i<=n;i++) {
//      sum=sum+i;
    
// }
// console.log(sum);
// let i=1;
// do {
//     console.log(i);
//     i++;
// }while (i<=5);
// let str="Dhiraj";
// let size=0;
// for (let i of str) {
//     console.log(i);
//     size++;
// }
// console.log(size);
// let student= {
//     name: "Dhiraj",
//     age:17,
//     cgpa:7.5,
//     isPass:true,

// };
// for (let key in student) {
//     console.log("key",key,"value=",student[key]);
// }
// for (i=0;i<=100;i+=2) {
//     console.log(i)
// }
// let gameNum=25;
// let userNum=prompt("Enter a number: ");
// while (userNum !=gameNum){
//     userNum=prompt("You entered wrong number. Guess again!");

// }
// console.log("congratulations,you entered the right number");
// let sentence=`This is a template literal`;
// console.log(sentence);
// console.log(sentence.length);
// console.log(typeof sentence);
//Template literal
// let obj= {
//     item: "pen",
//     price: 10,

// };
// let output =`The cost \t of ${obj.item} \n is ${obj.price} rupees.`;
// console.log(output);
// let str =" Dhiraj";
// let str1="Kumar";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(1,3));
// console.log(str.concat(str1));
// console.log(str.replace("D","N"));
// console.log(str.charAt(3));
// let fullName=prompt("Enter your name: ");
// console.log("@"+fullName+fullName.length);
// let arr=[97,98,97,76];
// console.log(arr.length);
// console.log(arr[0]);
// for (let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }
// for (let ar of arr) {
//     console.log(ar);
// }
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let val of marks ) {
//     sum +=val;
// }
// console.log(sum/marks.length);
// let items=[250,645,300,900,50];
// let i=0;
// for (let val of items ) { 
// let offer=val/10;
//   items[i]=items[i]-offer;
//   console.log(items[i]);
// }
// for (let i=0;i<items.length;i++) {
// let offer =items[i]/10;
// items[i]-=offer;
// }
// console.log(items);
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies.shift())

// console.log(companies.splice(2,1,"ola"))
// console.log(push("Amazon"))











