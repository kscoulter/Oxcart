// OOJS for the win
var Deck = {
  suits: ["♠", "♦", "♥", "♣"],
  cards: [],
  addCard: function(value, suit){
    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML = "<div class='topwrapper'><p class='topleft' class ='value'>"+value+"</p><p class='topleft' class ='suit'>"+suit+"</p></div><div><p class='center' class ='suit'>"+suit+"</p></div><div class='bottomwrapper'><p class='bottomright' class ='suit'>"+suit+"</p><p class='bottomright' class ='value'>"+value+"</p></div>"
    document.body.appendChild(div);
  },
  cardValue: function(val){
    return this.suits[Math.floor((val-1)/13)]
  },
  generate: function(){
    for (i=1; i <= 52; i++){
      switch (i % 13) {
      case 1:
        this.addCard("A", this.cardValue(i))
        break;
      case 11:
        this.addCard("J", this.cardValue(i))
        break;
      case 12:
        this.addCard("Q", this.cardValue(i))
        break;
      case 0:
        this.addCard("K", this.cardValue(i))
        break;
      default:
        this.addCard(i % 13, this.cardValue(i))
        break;
      }
    }
  }
}
Deck.generate();
