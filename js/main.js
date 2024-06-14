/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// seleziono bottone dall html 
const button = document.getElementById("generate_grid");


// gestisco l'interazione al click
button.addEventListener("click",
    function () {

        // seleziono il contenitore dei blocchi
        const grid = document.getElementById("grid");

        // per 100 volte aggiungo l'elemento al contenitore
        for (let i = 1; i <= 100; i++) {

            const box = createElementWithClass("div", "square");

            // gestire il click sul singolo elemento
            box.addEventListener("click",

                function () {

                    this.classList.toggle("clicked");
                    // Ogni cella ha un numero progressivo, da 1 a 100.
                    const squaresArray = document.getElementsByClassName("square");

                    let number = i;    
                    
                    console.log("La cella cliccata è la numero", number);

                    box.innerHTML = `<span>${number}</span>`
                    
                }
            )

            grid.append(box);

        }

    }
)










