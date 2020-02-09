import { createStore } from "redux";

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countReducer = (count = 0, action) => { //2.리듀서 정의
    switch (action.type) {
        case "ADD":
            count++
            break;
        case "MIN":
            count--
            break;
        default:
    }
    return count
}

const countStore = createStore(countReducer)   //1. 전역스토어 생성


const onChange=()=>{
    console.log("countStore의 상태가 바뀌면 실행될 함수")
    number.innerHTML = countStore.getState()
}
countStore.subscribe(onChange) //3. countStore의 값이 dispatch->{action}->reducer로 인해 리듀서가 실행되면 발생하는 메서드


const handleAdd = () => {
    countStore.dispatch({                 
        type: "ADD",
    })
}

const handleMinus = () => {
    countStore.dispatch({               
        type: "MIN",
    })
}



add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)