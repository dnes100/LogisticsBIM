function Main(){
    othis = this;
    this.bimserverBaseUrl = "http://localhost:8080";
    this.uoid = "131074"; //user object id
    this.bimApiToken = "51d53903399651e5e94693e451e3014241fa1d9bf50111973d0022b8ec29299a7ce9c0c10d934827b691334ae703e042";
    this.serializerOid = "3670054"; //serializer oid for ifc step serializer
    
    console.log("main.js loaded!");

    $(".applicationContent").load("/LogisticsBIM/jsp/login.html", function(){
        othis.current = new Login(othis);
    });
    
    this.apiCall = function(url, method, data, successCallback, errorCallback){
        console.log("main.js apiCall");
        url = "/LogisticsBIM" + url;
        $.ajax({
            url: url,
            method: method,
            data: data,
            error: othis.errorCallback,
            success: successCallback
        });
    };
    
    this.bimserverApiCall = function(url, method, data, successCallback, errorCallback){
        console.log("main.js Bimserver apiCall");
        
        data.token = othis.bimApiToken;
        $.ajax({
            url: othis.bimserverBaseUrl + url,
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
