const options = {
    apiVersion: 'v1', // default
    endpoint: 'http://localhost:8200', // default
    token: '' // optional client token; can be fetched after valid initialization of the server
}

const vault = require("node-vault")(options);


function getSecret(path) {
    return vault.read(path);
}
function setSecret(path, data) {
    return vault.write(path, data);
}
function deleteSecret(path) {
    return vault.delete(path);
}
function listSecrets(path) {
    return vault.list(path);
}

export default {
    getSecret,
    setSecret,
    deleteSecret,
    listSecrets
}