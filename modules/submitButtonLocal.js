
export default function submitButtonLocal(selectElementInput, nameForValue){
    let listArr = JSON.parse(localStorage.getItem(`${nameForValue}`)) || [];
    let inputValue = selectElementInput.value;
    let objArr = {
        name : `${inputValue}`,
        checkBox : false ,

    }
    listArr.push(objArr)


    localStorage.setItem(`${nameForValue}`, JSON.stringify(listArr));
    localStorage.setItem(`Temp`,`${inputValue}`);

}


