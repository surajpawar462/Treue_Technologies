

var input = document.getElementById('input');
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

var from,to;

input.addEventListener("keyup",myResult);

inputType.addEventListener("change",myResult);

resultType.addEventListener("change",myResult);

from = inputType.value;

to = resultType.value;

function myResult(){
                    from = inputType.value;
                    to = resultType.value;

                    if(from === "m" && to ==="km"){
                                        result.value = Number(input.value) * 0.001;
                    }
                    else if(from === "m" && to ==="cm"){
                                        result.value = Number(input.value) *100;

                    }
                    else if(from === "m" && to === "m"){
                                        result.value = input.value
                    }
                    
                    if(from === "km" && to ==="m"){
                                        result.value = Number(input.value) * 1000;
                    }
                    else if(from === "km" && to ==="cm"){
                                        result.value = Number(input.value) *10000;

                    }
                    else if(from === "km" && to === "km"){
                                        result.value = input.value
                    }

                    if(from === "cm" && to ==="km"){
                                        result.value = Number(input.value) * 0.00001;
                    }
                    else if(from === "cm" && to ==="m"){
                                        result.value = Number(input.value) *0.01;

                    }
                    else if(from === "cm" && to === "cm"){
                                        result.value = input.value
                    }
}

