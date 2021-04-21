<template>
  <div>
      <div v-show="true" class="table-list">
          <div class="table-preview">
               <p>Owner: Ohad</p>
              <p>Players: 5</p>
              <p>Mode: Omaha</p>
              <button>JOIN</button>
          </div>
          <div class="table-preview">
              <p>Owner: Noya</p>
              <p>Players: 6</p>
              <p>Mode: Poker</p>
              <button>JOIN</button>
          </div>
          <div class="table-preview">
              <p>Owner: Tal</p>
              <p>Players: 4</p>
              <p>Mode: Poker</p>
              <button>JOIN</button>
          </div>
      </div>
      <div class="TABLE-LIST" v-for="table in tables" :key="table.id">
      <div class="table-preview">
        <p>{{ table.users.length }}</p>
        <p>{{ table.owner }}</p>
      </div>
      <!-- <h3 :class="cardColor">{{ card.suit }}</h3> -->
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     name: 'fdfe'
  //   }
  // }

}
</script>
