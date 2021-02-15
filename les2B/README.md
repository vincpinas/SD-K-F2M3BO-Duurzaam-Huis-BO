## Les2B

Het HTTP request wordt met Javascript Ajax gedaan ```function makeAjaxCall(url, methodType)``` gedaan, de ingevoerde tekst wordt met JS uit het Input veld gehaald. Het HTML Form heeft geen action meer ```<form class="myForm">```


### het HTML form
```
    <form class="myForm">
        <fieldset>
            <legend>Data verzenden met HTTP GET protocol</legend>
            <label>Data</label>
            <input type = "text" name = "data" id="myTextInput">
            <input type = "button" id = "myButton" value = "Submit HTTP GET AJAX ">
            <img src="duurzaam_huis_logo.png" width="200" alt="logo" title="logo">
       </fieldset>
    </form>
 ```

### het JS waarmee de AJAX function wordt aangeroepen
```
      let controlScript = "myApi.php"; // adres van de Api
      let myTextInput = document.getElementById('myTextInput'); // bind element text invoerveld
      let myButton = document.getElementById('myButton'); // bind element button
      
      //click handler voor de button
      myButton.addEventListener('click', doHttpGet);
      
      function doHttpGet(){
          // maak de HTTP string
          let http_Get_String = controlScript + '?data=' + myTextInput.value; 
          // voorbeeld http_Get_String = myApi.php?data=qwerty 
          console.log(http_Get_String); // debug
          makeAjaxCall(http_Get_String, 'GET'). then (writeData); // doe het HTTP request
      }

      function writeData(dataVanServer){
        console.log(dataVanServer); // debug
        document.getElementById('antwoordHier').innerHTML = dataVanServer;
      }
    </script>
```
