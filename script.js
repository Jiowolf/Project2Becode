
import submitButtonLocal from "./modules/submitButtonLocal.js"

const CHECK_FORM__SELECT = document.getElementById("checkForm");

    const INPUT__SELECT = document.getElementById("ToDo")
    const SUBMIT__SELECT = document.getElementById("newCheck")

    const LIST__SELECT = document.getElementById("list");

        const TO_DO__SELECT = document.getElementById("checkListToDo");
        const DONE__SELECT = document.getElementById("checkListDone");

        function testFinal(){
            let arrToTransform = [];
            arrToTransform = JSON.parse(localStorage.getItem('Liste'));
            return arrToTransform;
        }


    // console.log('loczlArr : ',arrToTransform);
    // console.log('loczlArr : ',arrToTransform.length);
// function LiCreate(){
//     for(let i = 0; i < arrToTransform.length; i++){

//         if(arrToTransform.length > 0 ){
//             return console.log('zebi')
//         }
//         console.log(arrToTransform)
//         // arrToTransform[i].id = `Task${i}`;
//         const NEW_LI = document.createElement("li");
//         NEW_LI.id = `${arrToTransform[i].name}-${i}`;
//         TO_DO__SELECT.appendChild(NEW_LI);
//     }
// }



async function LiCreate(){

    try {
        let test = await testFinal();
        for(let i = 0; i < test.length; i++){


            // console.log(arrToTransform)
            // arrToTransform[i].id = `Task${i}`;
            const NEW_LI = document.createElement("li");
            NEW_LI.id = `${test[i].name}-${i}`;
            NEW_LI.innerHTML = test[i].name
    
            LIST__SELECT.appendChild(NEW_LI); // Ajouter le li à la liste
        }
    } catch (error) {
        console.log(error);
    }
    
}

// SUBMIT__SELECT.addEventListener("click",LiCreate)
SUBMIT__SELECT.addEventListener("click",() => {
    submitButtonLocal(INPUT__SELECT,"Liste")
    INPUT__SELECT.value='';
    let test = document.querySelector('#checkListToDo');
    console.log(test)
    let testtt = LiCreate();
    testtt;
})
