var deckID = "error";
var remainingCards;

function shuffleDeck() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log(this.responseText);
                var text = JSON.parse(this.responseText);
                document.getElementById("status").className = "alert alert-success";
                document.getElementById("status").innerHTML = "Deck Shuffled";
                deckID = text.deck_id;
                remainingCards = text.remaining;
            }
            else if (this.status === 404) {}
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    }
    var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

function draw(cards) {
    var num = document.getElementById(cards).value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log(this.responseText);
                var text = JSON.parse(this.responseText);
                var display = "";
                document.getElementById("status").className = "alert alert-success";
                for (x = 0; x < text.cards.length; x++) {
                    display = display + text.cards[x].value + " OF " + text.cards[x].suit + ", ";
                }
                document.getElementById("status").className = "alert alert-success";
                document.getElementById("status").innerHTML = display;
            }
            else if (this.status === 404) {}
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    }
    var url = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=" + num;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
//    }
//function displayPlace(data) {
//    console.log(data); //For dev purposes
//    var place = JSON.parse(data);
//    if (place.country === "none") {
//        document.getElementById("place").className = "alert alert-warning";
//        document.getElementById("place").innerHTML = "No place matches that zip code."
//    }
//    else {
//        document.getElementById("place").className = "alert alert-success";
//        document.getElementById("place").innerHTML = "Deck Shuffled";
//    }
//}
//function findZip(zipId) {
//    // First get the zip code from the HTML textbo
//    // Now make a HTTP request
//    var httpRequest = new XMLHttpRequest();
//    httpRequest.onreadystatechange = function () {
//        if (this.readyState === 4) {
//            // We got a response from the server!
//            if (this.status === 200) {
//                // The request was successful!
//                displayPlace(this.responseText);
//            }
//            else if (this.status === 404) {
//                // No postal code found
//                displayPlace('{ "country" : "none" }');
//            }
//            else {
//                console.log("We have a problem...server responded with code: " + this.status);
//            }
//        }
//        else {
//            // Waiting for a response...
//        }
//    };
//    // Notice how the URL is appended with the zip code
//    var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
//    httpRequest.open("GET", url, true);
//    httpRequest.send();
//}
