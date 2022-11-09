


//  class employee{
//     admin(){
//         console.log("Hello Admin");
//     }
// }
// export default employee;

//  function project()
// {
//     console.log("Hello Project");
// }
// export default project;

//  const a=20;
//  export default a;

//--Named Export examples

//  class employee{
//     admin()
//     {
//         console.log("Hello Admin");
//     }
// }
// export {employee};

//  function project(){
//     console.log("Hello Project");
// }
// export {project}

//export const a=50;
// const a=50;
// export {a}

//export all exampless

export default class employee{
    admin(){
        console.log("Hello Admin");
    }
}

function project(){
    console.log("Hello Project");
}

export const a=100;

export {project}