<template>
    <!-- TODO: Wordle board -->
    <WordleBoard />

    <!-- TODO: Wordle keyboard -->
    <WordleKeyboard/>

</template>

<script>

import WordleBoard from '@/components/WordleBoard.vue';
import WordleKeyboard from '@/components/WordleKeyboard.vue';
import {WORDS } from '@/data/words.js'
export default {
    data: () => ({
        currentGuess: [],
        guessesRemaining: 6,
        nextLetter: 0,
        result: '',
        rightGuessString: WORDS[Math.floor(Math.random() * WORDS.length)],
    })
    ,
    components: { WordleBoard, WordleKeyboard },
    methods:{
        insertLetter (pressedKey) {
        if (this.nextLetter === 5) {
            return
        }
        pressedKey = pressedKey.toLowerCase()

        let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
        let box = row.children[this.nextLetter]
        box.textContent = pressedKey
        box.classList.add("filled-box")
        this.currentGuess.push(pressedKey)
        this.nextLetter += 1
        },
        deleteLetter () {  
                let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
                let box = row.children[this.nextLetter - 1]
                box.textContent = ""
                box.classList.remove("filled-box")
                console.log(this.currentGuess);
                this.result = this.currentGuess.pop()
                this.nextLetter -= 1
                return
        },
        checkGuess () {
        let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
        let guessString = ''
        let rightGuess = Array.from(this.rightGuessString)

        for (const val of this.currenGuess) {
            guessString += val
        }

        if (guessString.length != 5) {
            toastr.error("Not enough letters!")
            return
        }

        if (!WORDS.includes(guessString)) {
            toastr.error("Word not in list!")
            return
        }

        
        for (let i = 0; i < 5; i++) {
            let letterColor = ''
            let box = row.children[i]
            let letter = this.currenGuess[i]
            
            let letterPosition = rightGuess.indexOf(this.currenGuess[i])
            // is letter in the correct guess
            if (letterPosition === -1) {
                letterColor = 'grey'
            } else {
                // now, letter is definitely in word
                // if letter index and right guess index are the same
                // letter is in the right position 
                if (this.currenGuess[i] === rightGuess[i]) {
                    // shade green 
                    letterColor = 'green'
                } else {
                    // shade box yellow
                    letterColor = 'yellow'
                }

                rightGuess[letterPosition] = "#"
            }

            let delay = 250 * i
            setTimeout(()=> {
                //shade box
                box.style.backgroundColor = letterColor
                shadeKeyBoard(letter, letterColor)
            }, delay)
        }

        if (guessString === this.rightGuessString) {
            alert("You guessed right! Game over!")
            this.guessesRemaining = 0
            return
        } else {
            this.guessesRemaining -= 1;
            this.currenGuess = [];
            this.nextLetter = 0;

            if (this.guessesRemaining === 0) {
                alert("You've run out of guesses! Game over!")
                alert(`The right word was: "${this.rightGuessString}"`)
            }
        }
        },
        onClick(e){
        // console.log(e.key?e.key : e.target.value);
        if (this.guessesRemaining === 0) {
            return
        }
        let pressedKey = String(e.key?e.key : e.target.value)
        if (pressedKey === "Backspace" && this.nextLetter !== 0) {
            this.deleteLetter()
            return
        }

        if (pressedKey === "Enter") {
            // checkGuess()
            return
        }

        let found = pressedKey.match(/[a-z]/gi)
        if (!found || found.length > 1) {
            return
        } else {
            this.insertLetter(pressedKey)
        }
        },

        shadeKeyBoard(letter, color) {
        for (const elem of document.getElementsByClassName("keyboard-button")) {
            if (elem.textContent === letter) {
                let oldColor = elem.style.backgroundColor
                if (oldColor === 'green') {
                    return
                } 
                if (oldColor === 'yellow' && color !== 'green') {
                    return
                }
                elem.style.backgroundColor = color
                break
            }
        }
        }
    },
    mounted(){

        ['click','keyup'].forEach( evt => 
        window.addEventListener(evt, e => {
        this.onClick(e)})
        );
  }
}



</script>

<style>

</style>