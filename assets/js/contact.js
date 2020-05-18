let http = new XMLHttpRequest();
let url = 'https://cepegra-frontend.xyz/selection-wf/';
let params = 'orem=ipsum&name=binny';
let send = document.querySelector('input#submit');

http.open('POST', url, true);

send.addEventListener('click', function(e){
    

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
        }
    }

    

  }) 

