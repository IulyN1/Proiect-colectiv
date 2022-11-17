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
            console.log(xhttp.response);
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

export function postReview(userId, productReview){
    // NOTE : this implementation relies heavily on the REST endpoint on the backend and might require future changes
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let request = createRequest("POST", `${userId}/review`, headers);
    const payload =JSON.stringify(productReview);
    request.send(payload);
}

export async function getReviewAverage(product, callback){
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let request = createRequest("POST", `reviews/avg`, headers, callback);
    const payload = JSON.stringify(product);
    request.send(payload);
    return request.response;
}

export async function getProducts(){
    return await fetch(`${protocol}${SERVER_ADDRESS}${URI}products/`);
}

export async function getFavorites(userId){
    return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/favorites`);
}