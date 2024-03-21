
let cards = []
let sum = 0
let HasBalckJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") works the same but is more dynamic
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

// creating an object, similar to array
let player = {
    playerName: "player1",
    playerChips: 145
}



// calling the object objname with "." similar to class
playerEl.textContent = player.playerName + ": $ " + player.playerChips



function getRandomCard(){

    let randomCard = Math.floor(Math.random()*13) + 1
    
    if(randomCard===1){
        return 11;
    }

    else if(randomCard > 10){
        return 10;
    }
    else{
        return randomCard;
    }
} 
 

function startGame(){

    isAlive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2
    renderGame()
}

function renderGame(){


    if (sum <= 20){
        message = "Do you want to draw a new card?";
        
    }
    
    else if(sum===21){
        message = "Wow! you have a black jack";
        HasBlackJack = true;
        //playerEl.textContent = moneyNew

    }

    else {
        message = "You're out of the game";
        isAlive = false;
        
        //playerEl.textContent = moneyNew
        
    }
    
    messageEl.textContent = message
    console.log(message)

    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        
        cardsEl.textContent += cards[i] + " "
    }  
    sumEl.textContent = "Sum: " + sum
}




function newCard(){

    if(HasBalckJack===false && isAlive === true){
  
    let card3 = getRandomCard()
    cards.push(card3)
    sum += card3
    
    console.log(cards)
    renderGame()

    }


}

console.log(cards)



