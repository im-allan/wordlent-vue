<template>
     <div id="keyboard-cont">
        <div class="first-row">
            <button value="q" class="keyboard-button">q</button>
            <button value="w" class="keyboard-button">w</button>
            <button value="e" class="keyboard-button">e</button>
            <button value="r" class="keyboard-button">r</button>
            <button value="t" class="keyboard-button">t</button>
            <button value="y" class="keyboard-button">y</button>
            <button value="u" class="keyboard-button">u</button>
            <button value="i" class="keyboard-button">i</button>
            <button value="o" class="keyboard-button">o</button>
            <button value="p" class="keyboard-button">p</button>
        </div>
        <div class="second-row">
            <button value="a" class="keyboard-button">a</button>
            <button value="s" class="keyboard-button">s</button>
            <button value="d" class="keyboard-button">d</button>
            <button value="f" class="keyboard-button">f</button>
            <button value="g" class="keyboard-button">g</button>
            <button value="h" class="keyboard-button">h</button>
            <button value="j" class="keyboard-button">j</button>
            <button value="k" class="keyboard-button">k</button>
            <button value="l" class="keyboard-button">l</button>
            <button value="ñ" class="keyboard-button">ñ</button>
        </div>
        <div class="third-row">
            <button value="Enter" class="keyboard-button send">Enviar</button>
            <button value="z" class="keyboard-button">z</button>
            <button value="x" class="keyboard-button">x</button>
            <button value="c" class="keyboard-button">c</button>
            <button value="v" class="keyboard-button">v</button>
            <button value="b" class="keyboard-button">b</button>
            <button value="n" class="keyboard-button">n</button>
            <button value="m" class="keyboard-button">m</button>
            <button value="Backspace" class="keyboard-button del">Del</button>
        </div>
    </div>
</template>

<script>
// export default {
//   methods:{
//     insertLetter (pressedKey) {
//       if (import.meta.env.VITE_nextLetter === 5) {
//           return
//       }
//       pressedKey = pressedKey.toLowerCase()

//       let row = document.getElementsByClassName("letter-row")[6 - import.meta.env.VITE_guessesRemaining]
//       let box = row.children[import.meta.env.VITE_nextLetter]
//       box.textContent = pressedKey
//       box.classList.add("filled-box")
//       import.meta.env.VITE_currentGuess.push(pressedKey)
//       import.meta.env.VITE_nextLetter += 1
//     },
//     deleteLetter () {
//       let row = document.getElementsByClassName("letter-row")[6 - import.meta.env.VITE_guessesRemaining]
//       console.log(row);
//       let box = row.children[import.meta.env.VITE_nextLetter - 1]
//       box.textContent = ""
//       box.classList.remove("filled-box")
//       import.meta.env.VITE_currentGuess.pop()
//       import.meta.env.VITE_nextLetter -= 1
//     },


//     checkGuess () {
//       let row = document.getElementsByClassName("letter-row")[6 - import.meta.env.VITE_guessesRemaining]
//       let guessString = ''
//       let rightGuess = Array.from(import.meta.env.VITE_rightGuessString)

//       for (const val of import.meta.env.VITE_currentGuess) {
//           guessString += val
//       }

//       if (guessString.length != 5) {
//           toastr.error("Not enough letters!")
//           return
//       }

//       if (!WORDS.includes(guessString)) {
//           toastr.error("Word not in list!")
//           return
//       }

      
//       for (let i = 0; i < 5; i++) {
//           let letterColor = ''
//           let box = row.children[i]
//           let letter = import.meta.env.VITE_currentGuess[i]
          
//           let letterPosition = rightGuess.indexOf(import.meta.env.VITE_currentGuess[i])
//           // is letter in the correct guess
//           if (letterPosition === -1) {
//               letterColor = 'grey'
//           } else {
//               // now, letter is definitely in word
//               // if letter index and right guess index are the same
//               // letter is in the right position 
//               if (import.meta.env.VITE_currentGuess[i] === rightGuess[i]) {
//                   // shade green 
//                   letterColor = 'green'
//               } else {
//                   // shade box yellow
//                   letterColor = 'yellow'
//               }

//               rightGuess[letterPosition] = "#"
//           }

//           let delay = 250 * i
//           setTimeout(()=> {
//               //shade box
//               box.style.backgroundColor = letterColor
//               shadeKeyBoard(letter, letterColor)
//           }, delay)
//       }

//       if (guessString === import.meta.env.VITE_rightGuessString) {
//           alert("You guessed right! Game over!")
//           import.meta.env.VITE_guessesRemaining = 0
//           return
//       } else {
//           import.meta.env.VITE_guessesRemaining -= 1;
//           import.meta.env.VITE_currentGuess = [];
//           import.meta.env.VITE_nextLetter = 0;

//           if (import.meta.env.VITE_guessesRemaining === 0) {
//               alert("You've run out of guesses! Game over!")
//               alert(`The right word was: "${import.meta.env.VITE_rightGuessString}"`)
//           }
//       }
//     },
//     onClick(e){
//       // console.log(e.key?e.key : e.target.value);
//       if (import.meta.env.VITE_guessesRemaining === 0) {
//         return
//     }
//       let pressedKey = String(e.key?e.key : e.target.value)
//       console.log(pressedKey);
//       if (pressedKey === "Backspace" && import.meta.env.VITE_nextLetter !== 0) {
//           this.deleteLetter()
//           return
//       }

//       if (pressedKey === "Enter") {
//           // checkGuess()
//           return
//       }

//       let found = pressedKey.match(/[a-z]/gi)
//       if (!found || found.length > 1) {
//           return
//       } else {
//           // this.insertLetter(pressedKey)
//       }
//     },

//     shadeKeyBoard(letter, color) {
//       for (const elem of document.getElementsByClassName("keyboard-button")) {
//           if (elem.textContent === letter) {
//               let oldColor = elem.style.backgroundColor
//               if (oldColor === 'green') {
//                   return
//               } 
//               if (oldColor === 'yellow' && color !== 'green') {
//                   return
//               }
//               elem.style.backgroundColor = color
//               break
//           }
//       }
//     }
//   },
//   mounted(){

//     ['click','keyup'].forEach( evt => 
//     window.addEventListener(evt, e => {
//       this.onClick(e)})
//     );
//     window.addEventListener("keyup", e => {
//       // console.log(String.fromCharCode(e.key));
//   })
//   }
// }
</script>

<style>
#keyboard-cont {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#keyboard-cont div {
  display: flex;
}

.second-row {
  margin: 0.5rem 0;
}

.keyboard-button {
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  height: 3.1rem;
  margin: 0 2px;
  text-transform: uppercase;
  width: 2.9rem;
}

.send{
    width: 5rem;
}

.del{
    width: 3.8rem;
}

</style>