const convertToWords = (arr) =>{

    let len = arr.length;
    if(len===0){

        return "";
    }

    if(len>4){

        return "Length more than 4 is not supported";
    }

    const singleDigits = [" zero ", " one ", " two ",   " three ", " four ",
    " five ", " six ", " seven ", " eight ", " nine "];

    const twoDigits = ["",          " ten ",      " eleven ",  " twelve ",
    " thirteen ",  " fourteen ", " fifteen ", " sixteen ",
    " seventeen ", " eighteen ", " nineteen "];

    const tensMultiple = ["",       "",        " twenty ",
    " thirty ", " forty ",   " fifty ",
    " sixty ",  " seventy ", " eighty ",
    " ninety "]; 

    const tensPower = [" hundred ", " thousand "];

    let string = '';

    if(len===1){

        console.log("len is 1",len);
        return `${singleDigits[arr[len-1] - '0']}`;
    }

    for(let index=0;index<arr.length;index++){

        if(len>=3){

            if(arr[index]-'0' !==0){

                string = string + singleDigits[arr[index]-'0'] + tensPower[len - 3] ;

            }
            len = len-1;
        }

        else{

            if(arr[index] === '1'){

            
                let x = arr[index]-'0' ;
                let y = arr[index+1]-'0';
                let sum = x + y;
            
                string = string + twoDigits[sum];
                return string;
            }

            else if(arr[index] === '2' && arr[index+1] === '0'){

                string = string + "twenty";
                return string;
            }

            else{

                let i = arr[index]-'0';
                string = string + (i?tensMultiple[i]:"");
                index++;
                if(arr[index]!=='0'){

                    string = string + singleDigits[arr[index] - '0'];

                }

                return string;
            }
        }
    }


}

function myFunction() {
    var x = document.getElementById("myInput").value;
    const arr = x.split('');
    
    let string = convertToWords(arr);    
    document.getElementById("demo").innerHTML = string;
  }