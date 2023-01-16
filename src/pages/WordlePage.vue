<template>
    <!-- TODO: Wordle board -->
    <WordleBoard />

    <!-- TODO: Wordle keyboard -->
    <WordleKeyboard/>
    <br>
        <button @click="newGame" type="button" class="keyboard-button new-game">Nuevo juego</button>
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
        this.animateCSS(box, "pulse")
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
                this.result = this.currentGuess.pop()
                this.nextLetter -= 1
                return
        },
        checkGuess () {
        let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
        let guessString = ''
        let rightGuess = Array.from(this.rightGuessString)
        for (const val of JSON.parse(JSON.stringify(this.currentGuess))) {
            guessString += val
        }
        if (guessString.length != 5) {
            this.$toast.show("No hay suficientes letras!",{
                type: 'error',
                position: 'top',
                duration: 1500,
            })
            return
        }
        if (!WORDS.includes(guessString)) {
            this.$toast.show("La palabra no está en la lista",{
                type: 'error',
                position: 'top',
                duration: 1500,
            })
            return
        }

        
        for (let i = 0; i < 5; i++) {
            let letterColor = ''
            let box = row.children[i]
            let letter = JSON.parse(JSON.stringify(this.currentGuess[i]))
            
            let letterPosition = rightGuess.indexOf(JSON.parse(JSON.stringify(this.currentGuess[i])))
            if (letterPosition === -1) {
                letterColor = 'grey'
            } else {
                if (JSON.parse(JSON.stringify(this.currentGuess[i])) === rightGuess[i]) {
                    letterColor = '#3F9629'
                } else {
                    letterColor = '#FFC403'
                }
                rightGuess[letterPosition] = "#"
            }
            let delay = 250 * i
            setTimeout(()=> {
                this.animateCSS(box, 'flipInX')
                box.style.backgroundColor = letterColor
                box.style.color = 'white'
                this.shadeKeyBoard(letter, letterColor)
            }, delay)
        }
        if (guessString === this.rightGuessString) {
            this.$toast.show("¡Lo adivinaste! ¡Juego terminado!",{
                    type: 'success',
                    position: 'top',
                    duration: 5000,
                })
            this.guessesRemaining = 0
            document.querySelector('.new-game').style.display = 'block'
            document.querySelector('.new-game').style.color = 'white'
            document.querySelector('.new-game').style.backgroundColor = '#43a047'
            return
        } else {
            this.guessesRemaining = this.guessesRemaining -= 1;
            this.currentGuess = this.currenGuess = [];
            this.result = this.result = '';
            this.nextLetter = this.nextLetter = 0;
            if (this.guessesRemaining === 0) {
                this.$toast.show("¡Te has quedado sin turnos! ¡Juego terminado!",{
                    type: 'error',
                    position: 'top',
                    duration: 5000,
                })
                this.$toast.show(`La palabra correcta era: "${this.rightGuessString}"`,{
                    type: 'info',
                    position: 'top',
                    duration: 5000,
                })
                document.querySelector('.new-game').style.display = 'block'
                document.querySelector('.new-game').style.backgroundColor = 'white'
                document.querySelector('.new-game').style.backgroundColor = '#43a047'
            }
        }
        },
        onClick(e){
        if (this.guessesRemaining === 0) {
            return
        }

        
        let pressedKey = String(e.key?e.key : e.target.value)
        if (pressedKey === "Backspace" && this.nextLetter !== 0) {
            this.deleteLetter()
            return
        }
        if (pressedKey === "Enter") {
            this.checkGuess()
            return
        }
        let found = pressedKey.match(/[a-z\u00f1]/gi)
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
                if (oldColor === '#3F9629') {
                    return
                } 
                if (oldColor === '#FFC403' && color !== '#3F9629') {
                    return
                }
                elem.style.backgroundColor = color
                elem.style.color = 'white'
                break
            }
        }
        },
        animateCSS (element, animation, prefix = 'animate__') {
            new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = element
            node.style.setProperty('--animate-duration', '0.3s');
            node.classList.add(`${prefix}animated`, animationName);
            function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            }
            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
        },
        newGame(){
            document.querySelector('.new-game').style.transition = 'all .5s ease';
            document.querySelector('.new-game').style.display = 'none';
            this.currentGuess = this.currentGuess = [],
            this.guessesRemaining = this.guessesRemaining = 6;
            this.nextLetter = this.nextLetter =  0;
            this.result = this.result = '';
            this.rightGuessString = this.rightGuessString =  WORDS[Math.floor(Math.random() * WORDS.length)];
            document.querySelectorAll('.letter-box').forEach(letter =>{
                letter.style.transition = "all .5s ease"
                letter.style.backgroundColor = 'white'
                letter.style.color = 'black'
                letter.textContent = ''
            })
            document.querySelectorAll('.keyboard-button').forEach(letter =>{
                letter.style.transition = "all .5s ease"
                letter.style.backgroundColor = '#e2e8f0';
                letter.style.color = 'black';
            })
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

.new-game{
  width: 8rem;
  background-color: #43a047;
  color: white;
  font-size: .9rem;
  justify-content: center;
  margin-left: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  display: none;
  transition: all .5s ease;
}


@media (max-width: 520px) {
    html, body{     
        font-size: 12px;
    }
}
</style>