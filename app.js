// import emp from './company.js';

// const x=new emp();
// x.admin();

// import project from './company.js';
// project();

// import a from './company.js';
// console.log(a);

//--Named Import examples

// import {employee} from './company.js';
// const obj=new employee();
// obj.admin();

// import {project} from './company.js';
// project();

// import {a} from './company.js';
// console.log(a);

//--Importing All

// import {employee,project,a} from './company.js';
// const obj=new employee();
// obj.admin();
// project();
// console.log(a);

// import * as comp from './company.js';
// const obj=new comp.employee();
// obj.admin();
// comp.project();
// console.log(comp.a);


// import employee, * as comp from './company.js';
// const obj=new employee();
// obj.admin();
// comp.project();
// console.log(comp.a);

import employee, {project,a}  from './company.js';
const obj=new employee();
obj.admin();
project();
console.log(a);