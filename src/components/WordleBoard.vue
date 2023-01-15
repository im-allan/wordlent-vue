<template>
      <h1> Wordle Clone </h1>
    
    <div id="game-board">
    </div>
    <!-- {{ initBoard }} -->
</template>

<script>
export default {
  methods:{
    initBoard() {
      const board = document.getElementById("game-board")
      for (let i = 0; i < import.meta.env.VITE_NUMBER_OF_GUESSES; i++) {
          let row = document.createElement("div")
          row.className = "letter-row"

        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
      }
    }
  },
  mounted(){
    this.initBoard()
  }
}
</script>

<style >

h1 {
 text-align: center;
}

#game-board {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.letter-box {
  border: 1px solid gray;
  border-radius: 3px;
  margin: 2px;
  font-size: 2.5rem;
  font-weight: 700;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.filled-box {
  border: 2px solid black;
}
.letter-row {
  display: flex;
}


</style>