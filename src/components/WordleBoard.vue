<template>
      <h1> Wordlen't</h1>
    <div id="game-board">
    </div>
</template>

<script>
export default {
  data: () => ({
    number_of_guesses: 6,
  }),
  methods:{
    initBoard() {
      const board = document.getElementById("game-board")
      for (let i = 0; i < this.number_of_guesses; i++) {
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
  border: 2px solid #e0e0e0;
  border-radius: 3px;
  margin: 2px;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.filled-box {
  border: 2px solid #e0e0e0;
}
.letter-row {
  display: flex;
}


</style>