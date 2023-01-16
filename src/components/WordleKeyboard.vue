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
export default {
}
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
  background-color: #e2e8f0;
}

.keyboard-button:hover{
  filter: brightness(90%)
}
.send{
    width: 5rem;
}

.del{
    width: 3.8rem;
}
</style>