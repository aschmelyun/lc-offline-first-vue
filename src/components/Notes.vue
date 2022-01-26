<template>
  <div class="flex flex-col flex-grow">
    <!-- Main Content - Notes List -->
    <div class="flex flex-col flex-grow overflow-auto">
      <div v-for="note in notes" :key="note.created">
        <div class="flex px-4 pt-3 pb-4">
          <div class="prose my-2 mx-auto w-1/2">
            <div>
              <span class="ml-1 text-xs text-gray-500"
                >Created on {{ new Date(note.created).toLocaleString() }}</span
              >
            </div>
            <div v-html="note.content"></div>
          </div>
        </div>
        <hr class="w-full" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
        notes() {
            return this.$store.state.notes;
        }
    }
}
</script>