let num = 90;
let nums = [20,30,40];
console.log(nums[1]);
console.log(nums.length);
nums[1] = 69;
console.log(nums[1]);
console.log(nums[5]);
nums[5] = 100;
console.log(nums.length);
console.log(nums[5]);
let x;
console.log(x);
//int y =10;
let arr = [10, "amish",30,true,undefined,[1,"chiya",false]];
console.log(arr.length);
console.log(arr[5][1]);

//methods in arrarys=> Dynamic in nature
let brr = [10,20];
console.log(brr);
let result = brr.push(40,50,60);
console.log(brr);
console.log(result);

//remove elements=> pop
console.log(brr);
let res = brr.pop();
console.log(brr);
console.log(res);

//adding elements from front
//unshift()

let r = brr.unshift(-10,34);
console.log(r);
console.log(brr);

//delete elements from front
//shift()

let deleteted = brr.shift();
console.log(deleteted,brr);

//insert or delete elemnts from anywhere in array
//splice(position,number of elements to be deleted)
//delete 10,20
//splice(start index, delete count, ...new elements)

brr.splice(1,2);
console.log(brr);
let lassun = brr.splice(2,0,5,8,9);
console.log(brr);
console.log(lassun);

let err = [10,[2,4,1],90,88];
console.log(err[1]);
let ans = err[1].splice(1,1,99);
console.log(ans);
console.log(err);
err[1].splice(1,1);
err[1].splice(1,0,4);
console.log(err);
err[1].splice(2,0,36);
console.log(err);

let drr = [3,4,2,8];
let segment = drr.slice(1,3);
console.log(segment);

let obj = {
    name: "Amish",
    age: 30
};
console.log(obj);
console.log(obj.age,obj["name"]);
obj.age=25;
console.log(obj.age);
obj["age"]=26;
console.log(obj["age"]);
delete obj.age;
console.log(obj);
obj.role = "SDE";
console.log(obj);
obj["domain"] = "Fullstack";
console.log(obj);