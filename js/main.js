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

        // per 64 volte faccio qualcosa
        for (let i = 0; i < 100; i++) {

            const box = createElementWithClass("div", "square");
            console.log(box);

            // gestire il click sul singolo elemento
            box.addEventListener("click",

                function () {
                    this.classList.toggle("clicked");
                }
            )

            grid.append(box);

        }

    }
)










