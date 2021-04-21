<template>
<div>
    <h2>.....Virtual Deck.....</h2>
    <div class="game-btns">
        <button @click="isListShownToggle">Active Tables</button>
        <button>New Table</button>
    </div>
    <active-tables v-show="isListShown" />
</div>
</template>

<script>
import ActiveTables from '@/cmps/ActiveTables'
import tableService from '@/services/tableService.js'

export default {
    data() {
        return {
            tables: null,
            isListShown: false
        };
    },
    async created() {
      this.tables = await tableService.query();

    },
    methods: {
        isListShownToggle() {
            this.isListShown = !this.isListShown
        },
    },
    components: {
        ActiveTables,
    },
};
</script>
