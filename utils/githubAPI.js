const axios = require("axios");

function getInfo(param){
    const githubAPIUrl = `https://api.github.com/users/` + param;
    return axios 
    .get(githubAPIUrl)
    .then(function({data}){
    const objData = {
        "username": data.login,
        "name": data.name,
        "picture": data.avatar_url,
        "email": data.email
    }
    return objData
    })
}
module.exports = {
    getInfo: getInfo
}