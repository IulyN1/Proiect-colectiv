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
            return xhttp.response;
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

export async function postReview(userId, productId, text){
    if(!text){
        return;
    }
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let productReview = {
        userId: userId,
        productId: productId,
        id: 0,
        text: text
    }
    let request = createRequest("POST", `reviews`, headers);
    const payload =JSON.stringify(productReview);
    request.send(payload);
    return await request.response;
}

export async function getReviewAverage(product){
    // NOTE : this implementation relies heavily on the REST endpoint on the backend and might require future changes
    const headers = [];
    headers.push({name: 'Content-Type', value:'application/json'});
    let request = createRequest("POST", `reviews/avg`, headers);
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

export async function getReviews(productId){
    return await fetch(`${protocol}${SERVER_ADDRESS}${URI}product/${productId}/reviews`);
}