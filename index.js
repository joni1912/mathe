let ergebnis0;
let ergebnis;

let min = -12;
let max = 12;

let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];

let test;
let test2;
let test3;
let test4;

let toggle = true;

    window.onload = document.getElementById("rollButton").onclick = function(){

            let text = "</p>";
            arr = [];
            for (let i=0; i<3; i++){
                test = Math.floor(Math.random()*(max-min)) + min;
                arr.push(test);
                text+="<p>" + arr[i] +"</p>";
            }
            text+="</n>"
            document.getElementById("demo").innerHTML = text;

            let text2 = "</p>";
            arr2 = [];
            for (let i=0; i<3; i++){
                test2 = Math.floor(Math.random()*(max-min)) + min;
                arr2.push(test2);
                text2+="<p>" + arr2[i] +"</p>";
            }
            text2+="</n>"
            document.getElementById("demo2").innerHTML = text2;

            let text3 = "</p>";
            arr3 = [];
            for (let i=0; i<3; i++){
                test3 = Math.floor(Math.random()*(max-min)) + min;
                arr3.push(test3);
                text3+="<p>" + arr3[i] +"</p>";
            }
            text3+="</n>"
            document.getElementById("demo3").innerHTML = text3;

            let text4 = "</p>";
            arr4 = [];
            for (let i=0; i<3; i++){
                test4 = Math.floor(Math.random()*(max-min)) + min;
                arr4.push(test4);
                text4+="<p>" + arr4[i] +"</p>";
            }
            text4+="</n>"
            document.getElementById("demo4").innerHTML = text4;
 
            ergebnis0 = (arr[0]*arr2[0]+arr[1]*arr2[1]+arr[2]*arr2[2])/((Math.sqrt(Math.pow(arr[0], 2)+Math.pow(arr[1], 2)+Math.pow(arr[2], 2)))*(Math.sqrt(Math.pow(arr2[0], 2)+Math.pow(arr2[1], 2)+Math.pow(arr2[2], 2))));
            ergebnis = roundToTwo(Math.acos(ergebnis0)*(180/(Math.PI)));   

            if(toggle===false){
            document.getElementById("Ergebnis").innerHTML = ergebnis+"°";  
            }
    }

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    function showMessage()
    {
        if(toggle===true){
            document.getElementById("Ergebnis").innerHTML = ergebnis+"°";  
            
        }
        else{
            document.getElementById("Ergebnis").innerHTML = '';    
        
        }
        toggle = !toggle;
    }  
