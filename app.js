function value(num){
    var inputdata = document.getElementById("inputdata")
    // console.log("inputdata" , inputdata)
    inputdata.value += num 
}

function allvalueclear(){
    var inputdata = document.getElementById("inputdata")
inputdata.value = ""
}

function valueclear(){
    var inputdata = document.getElementById("inputdata")
inputdata.value =  inputdata.value.slice(0 , -1)
}

function equalsvalue(){
    var inputdata = document.getElementById("inputdata")
inputdata.value  = eval(inputdata.value)
} 