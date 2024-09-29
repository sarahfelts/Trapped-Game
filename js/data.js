const gameData = {
    byronicEvents: [
        {
            category: "Byron's Recreations",
            events: [
                { description: "Is he aware the walls are exceptionally thin?", effect: { stress: 1 } },
                { description: "He's made a mess of your desk in the process of his debauchery.", effect: { masterpiece: -1 } },
                { description: "May he borrow your husband? Of course.", effect: { stress: -1, scandal: 1 } },
                { description: "His half-sister is here, and they are far too intimate.", effect: {scandal: 2} },
                { description: "You weary of listening to tales of his exploits.", effect: { stress: 1 } }, 
                { description: "He makes an excellent muse on occasion.", effect: { stress: -1, masterpiece: 2} }
            ]
        },
        {
            category: "Byron's Drama",
            events: [
                { description: "He needs help reading his fan mail.", effect: { stress: 1 } },
                { description: "He's brought his pet bear. It is not trained.", effect: { stress: 2 } },
                { description: "He wants to read you his poetry.", effect: { stress: 3 } },
                { description: "He's in the papers. Again. Which means you are, too.", effect: { scandal: 1 } },
                { description: "He's broken up with his latest fling.", effect: { scandal: 2 } },
                { description: "He's found a new skull to use as a goblet.", effect: { scandal: 3 } }
            ]
        },
        {
            category: "A Brief Redoubt...",
            events: [
                { description: "Time alone. Blissful time", effect: { masterpiece: 1} },
                { description: "He's busy with a paramour.", effect: { stress: -1} },
                { description: "A walk around the house! Underwear on our heads!", effect: { scandal: 1 } },
                { description: "He has an excellent supply of contraband substances.", effect: { scandal: 1, masterpiece: 1 } },
                { description: "Wine! A chest of wine!", effect: { masterpiece: -1 } },
                { description: "He passed out in his study.", effect: { masterpiece: 1 } }
            ]
        }
    ]
};