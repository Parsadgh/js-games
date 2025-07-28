let userScore = 0
let computerScore = 0

function game(userChoice) {
    // computer choice
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    // chose the winner
    if (userChoice === computerChoice) {
        winner = 'Tie!'
    } else {
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            winner = 'You win! 🎉'
            userScore++
        } else {
            winner = 'Computer win :('
            computerScore++
        }
    }

    // show the winner
    document.getElementById('user-choice').textContent = 'your choice: ' + userChoice
    document.getElementById('computer-choice').textContent = 'computer choice: ' + computerChoice
    document.getElementById('winner').textContent = 'result: ' + winner

    document.getElementById('userScore').textContent = 'your score: ' + userScore
    document.getElementById('computerScore').textContent = 'computer score: ' + computerScore
}








const board = document.getElementsByClassName('board')
    const cell = document.querySelectorAll('.cell')

    // popup
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");
    const popupBox = popup.querySelector(".box");

    let xScore = 0
    let oScore = 0

    let winner

    let x = 0
    let gameOver = false
    let full = false



    cell.forEach((val, i) => {
        val.addEventListener('click', (e) => {
            // age az ghabl click shode click nashe
            if (val.innerText !== '') return

            // yeki dar mion 
            if (x % 2 == 0) {
                e.target.innerText = 'X'
                x++
            } else {
                e.target.innerText = 'O'
                x++
            }


            // aya por shode ya na 
            full = true

            for (let i = 0; i < 9; i++) {
                if (cell[i].innerText == '') {
                    full = false
                    break
                }
            }

            // baresi barande
            checkTheWinner()

            if (gameOver) {
                document.getElementById('popup').style.display = 'flex'
                document.querySelector('.pop h2').innerText = winner + ' won'

                // score
                if (winner == 'X') {
                    xScore++
                    document.getElementById('x-score').innerText = xScore
                } else if (winner == 'O') {
                    oScore++
                    document.getElementById('o-score').innerText = oScore
                }
            }



            if (full && !gameOver) {
                document.getElementById('popup').style.display = 'flex'
                document.querySelector('.pop h2').innerText = "Tie!!"
            }
        })
    })


    function reastartGame() {
        document.getElementById('popup').style.display = 'none'

        cell.forEach(i => i.innerText = '')
        x = 0
        gameOver = false
    }


    function checkTheWinner() {

        if (full) {
            document.getElementById('popup').style.display = 'none'
        }

        if (
            cell[0].innerText !== '' &&
            cell[0].innerText === cell[1].innerText &&
            cell[1].innerText === cell[2].innerText
        ) {
            gameOver = true
            winner = cell[0].innerText
        }

        if (
            cell[3].innerText !== '' &&
            cell[3].innerText === cell[4].innerText &&
            cell[4].innerText === cell[5].innerText
        ) {
            gameOver = true
            winner = cell[3].innerText

        }

        if (
            cell[6].innerText !== '' &&
            cell[6].innerText === cell[7].innerText &&
            cell[7].innerText === cell[8].innerText
        ) {
            gameOver = true
            winner = cell[6].innerText

        }

        if (
            cell[0].innerText !== '' &&
            cell[0].innerText === cell[3].innerText &&
            cell[3].innerText === cell[6].innerText
        ) {
            gameOver = true
            winner = cell[0].innerText
        }

        if (
            cell[1].innerText !== '' &&
            cell[1].innerText === cell[4].innerText &&
            cell[4].innerText === cell[7].innerText
        ) {
            gameOver = true
            winner = cell[1].innerText
        }

        if (
            cell[2].innerText !== '' &&
            cell[2].innerText === cell[5].innerText &&
            cell[5].innerText === cell[8].innerText
        ) {
            gameOver = true
            winner = cell[2].innerText
        }

        if (
            cell[0].innerText !== '' &&
            cell[0].innerText === cell[4].innerText &&
            cell[4].innerText === cell[8].innerText
        ) {
            gameOver = true
            winner = cell[0].innerText
        }

        if (
            cell[2].innerText !== '' &&
            cell[2].innerText === cell[4].innerText &&
            cell[4].innerText === cell[6].innerText
        ) {
            gameOver = true
            winner = cell[2].innerText
        }


    }









    let target = Math.floor(Math.random() * 100) + 1
        let attempts = 0

        function checkGuess() {
            const geuss = parseInt(document.getElementById('guessInput').value)
            const msg = document.getElementById("message");
            const score = document.getElementById("score");

            if (geuss < 1 || geuss > 100 || isNaN(geuss)) {
                msg.innerText = "Enter a valid number between 1 and 100!"
                return;
            }

            attempts++
            score.innerText = 'Attemps: ' + attempts

            if (geuss == target) {
                msg.innerText = `🎉 You got it! The number was ${target}`;
                document.body.style.background = "#27ae60";
            } else if (geuss < target) {
                msg.innerText = "Too low ⬆️";
            } else {
                msg.innerText = "Too high ⬇️";

            }
        }

        function restartGame() {
            target = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById("message").innerText = "";
            document.getElementById("score").innerText = "Attempts: 0";
            document.getElementById("guessInput").value = "";
            document.body.style.background = "#111";
        }
