<template>
  <div
    class="
      flex flex-col flex-shrink-0
      w-64
      border-r border-gray-300
      bg-gray-100
    "
  >
    <!-- Sidebar -->
    <div class="h-0 overflow-auto flex-grow">
      <div class="flex items-center h-8 px-3 group mt-4">
        <div class="flex items-center flex-grow focus:outline-none">
          <a
            class="ml-2 leading-none font-medium text-sm hover:text-gray-900"
            href="#"
            @click.prevent="showAllNotes"
            >All Notes</a
          >
        </div>
        <button class="add-note" @click="addNewNote">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      <div class="mt-4">
        <a
          class="flex items-center h-8 text-sm pl-8 pr-3"
          href="#"
          v-for="note in notes"
          :key="note.created"
          @click.prevent="openNote(note)"
        >
          <span class="ml-2 leading-none">{{
            new Date(note.created).toLocaleString()
          }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        openNote(note) {
            this.$store.commit('updateActiveNote', note);
            this.$store.state.editor.commands.setContent(note.content);
        },
        showAllNotes() {
            this.$store.state.editor.commands.clearContent();

            // set the activeNote as an empty object
            this.$store.commit('updateActiveNote', {});
        },
        addNewNote() {
            this.$store.dispatch('addNewNote');
        }
    },
    computed: {
        notes() {
            return this.$store.state.notes;
        }
    }
}
</script>