'use strict';

export default {
    getNewDeck
}

// const card = {id: num: 5 , suit: s}

function getNewDeck() {
    var deck = createDeck();
    return shuffleDeck(deck);
}

function shuffleDeck(deck) {

    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * 52));
        var location2 = Math.floor((Math.random() * 52));
        var tmp = deck[location1];
        // console.log(deck[0]);

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    return deck;
}

function createDeck() {
    // const suits = ['C', 'D', 'H', 'S'];
    const suits = ['♣', '♦', '♥', '♠'];
    const nums = ['A', '2', '3', '4', '5','6', '7', '8', '9','10', 'J', 'Q', 'K'];
    var newDeck = [];
    var card;
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            card = createCard((i * 13) + j, nums[j], suits[i])
            newDeck.push(card)
        }
    }
    return newDeck;
}

function createCard(id, num, suit) {
    const card = { id, num, suit };
    return card;
}
