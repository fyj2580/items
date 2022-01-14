<template>
  <div>
    <div class="tic-tac-toe">
      <Cell
        v-for="(i, id) in datas"
        :key="id"
        @updatePalyer="updata"
        :id="id"
        :n="n"
      ></Cell>
    </div>
    <div class="box">
      <span class="box-left">{{ hint }}</span>
    </div>
    <div class="start">go to game start</div>
    <ul>
      <li class="history" v-for="(i, idx) in history" :key="idx">
        <input
          type="button"
          :value="'go to step' + (idx + 1)"
          @click="jump(idx)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Table",
  components: {
    Cell,
  },
  data() {
    return {
      n: true,
      x: "",
      winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      datas: Array(9).fill(""),
      player: "",
      history: [],
    };
  },
  methods: {
    updata(msg) {
      this.player = msg[0];
      this.$set(this.datas, msg[1], msg[0]);
      this.history.push({
        status: [...this.datas],
      });
      if (this.is_winner()) {
        this.winner = this.player;
      }
      this.n = !this.n;
    },
    is_winner() {
      return this.winConditions.some((arr) =>
        arr.every((el) => this.datas[el] === this.player)
      );
    },
    jump(idx) {
      const val = this.history[idx].status;
      this.$set(this, "datas", val);
      console.log(this.datas);
    },
  },
  computed: {
    next_player() {
      return this.player === "x" ? "o" : "x";
    },
    hint() {
      return this.winner
        ? "winner: " + this.winner
        : "nextPlayer: " + this.next_player;
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: stretch;
  align-items: stretch;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
  width: 150px;
  height: 150px;
  background-color: #fff;
}

.tic-tac-toe li {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 36px;
  cursor: pointer;
}

.box {
  display: flex;
  align-items: center;
}

.box-right {
  font-size: 20px;
  margin: 0;
}

.start {
  cursor: pointer;
}

.history {
  display: flex;
}

.history li {
  list-style: decimal;
}
</style>
