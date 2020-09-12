let string = prompt("nhập vào chuỗi số tự nhiên cách nhau bởi dấu phẩy")
const arr = string.split(",")

dividebytwo(arr)

function checknumber (a){
    return a % 2 == 0
}

function dividebytwo (){
    newArr = []
    newArr.push(arr.filter(checknumber))
    console.log(`chuỗi số chẵn là: ${newArr}`)
}