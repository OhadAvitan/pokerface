<template>
  <section class="warpper">
    <div class="card" v-for="card in deck" :key="card.id">
      <div :style="'color: ' + cardColor(card)" class="card-wrap">
        <p>{{ card.num }}</p>
        <p>{{ card.suit }}</p>
      </div>
      <!-- <h3 :class="cardColor">{{ card.suit }}</h3> -->
    </div>
  </section>
</template>

<script>
import deckService from "@/services/deckService.js";
export default {
  data() {
    return {
      deck: null,
    };
  },
  async created() {
    this.deck = await deckService.getNewDeck()
  },
  methods: {
    cardColor(card) {
      if (card.suit === '♠' || card.suit === '♣') {
        return 'black'
      } else return 'rgb(194, 16, 16)';
    },
  },
};
</script>


<!-- <h1>OMAHA or POKER</h1>
    <h1>Either way</h1>
    <h1>You gonna be the LOSER</h1> -->