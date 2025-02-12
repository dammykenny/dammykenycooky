// fisher-yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);  // Logs the shuffled cards

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
         // Generate a random index between 0 and i (inclusive)
        const random = Math.floor(Math.random() * (i + 1));
        
          
        // Swap elements at index i and random
        [array[i], array[random]] = [array[random], array[i]]
    }
}

    



  