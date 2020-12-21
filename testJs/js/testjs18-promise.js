function getToken() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve("Xdl586655zeEszzs");
        }
        else {
            reject("Erreur dans l'obtention du token");
        }
    });

}
function getUser() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve({ "login": "bob", "uid": "158" });
        }
        else {
            reject("Erreur dans l'obtention des informations concernant l'utilisateur");
        }
    });

}
getToken()
    .then(function (data) {
        console.log("Cas favorable, token : ", data);
        // chaînage possible car getUser renvoie également une promesse
        return getUser();
    })
    .then(function (data) {
        console.log("Cas favorable, user : ", data);
    })
    .catch(function (error) {
        console.error(error);
    });

