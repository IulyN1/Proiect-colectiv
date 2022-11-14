import {SERVER_ADDRESS} from "./constants";

const protocol = 'http://';
const URI='/colectiv/';

export function postFavorite(userId, product){
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${protocol}${SERVER_ADDRESS}${URI}${userId}/favorite`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            return xhttp.responseText;
        }
    };
    xhttp.send(product);
}