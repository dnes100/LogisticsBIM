function Main(){
    othis = this;
    console.log("main.js loaded!");

    $(".applicationContent").load("/NewIfcParser/jsp/login.html", function(){
        othis.current = new Login(othis);
    });
    
    this.apiCall = function(url, method, data, successCallback, errorCallback){
        console.log("main.js apiCall");
        $.ajax({
            url: url,
            method: method,
            data: data,
            error: othis.errorCallback,
            success: successCallback
        });
    };
    
    this.bimserverApiCall = function(url, method, data, successCallback, errorCallback){
        bimserverBaseUrl = "http://localhost:8080";
        console.log("main.js Bimserver apiCall");
        $.ajax({
            url: bimserverBaseUrl + url,
            method: method,
            data: JSON.stringify(data),
            error: othis.errorCallback,
            success: successCallback
        });
    };
    
    this.errorCallback = function(jqxhr, status, error){
        console.log(error);
        console.log(jqxhr);
        console.log("Failure");
    };
}

main = new Main();
