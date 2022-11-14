import {SERVER_ADDRESS} from "./constants";

const protocol = 'http://';
const URI='/colectiv/';

function createRequest(httpMethod, path, headers){
    let xhttp = new XMLHttpRequest();
    xhttp.open(httpMethod, `${protocol}${SERVER_ADDRESS}${URI}${path}`, true);
    headers.forEach( (header) => {
        xhttp.setRequestHeader(header.name, header.value)
    });
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            return xhttp.responseText;
        }
    };
    return xhttp;
}

export function postFavorite(userId, product){
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let request = createRequest("POST", `${userId}/favorites`, headers);
    const payload = JSON.stringify(product);
    request.send(payload);
}

export function postReview(userId, review){
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let request = createRequest("POST", `${userId}/review`, headers);
    request.send(review);
}