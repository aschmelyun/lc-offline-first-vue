<template>
  <div class="flex w-screen h-screen text-gray-700">
    <div v-if="isOffline" class="absolute top-0 left-0 opacity-75 z-10 w-full text-center py-2 bg-red-300 border-b border-red-500 text-red-800">
      Sorry, it looks like you're offline.
    </div>
    <sidebar></sidebar>
    <editor v-if="Object.keys(activeNote).length"></editor>
    <notes v-else></notes>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Notes from './components/Notes';
export default {
  name: 'App',
  components: {
    Sidebar,
    Editor,
    Notes
  },
  mounted() {
    window.addEventListener('offline', () => {
      this.$store.commit('updateIsOffline', true);
    });
    window.addEventListener('online', () => {
      this.$store.commit('updateIsOffline', false);

      // sync up a user's data with an external api
      this.syncUserData();
    });
  },
  beforeUnmount() {
    this.$store.state.dispatch('destroyEditor');
  },
  methods: {
    syncUserData() {
      if (this.isOffline) {
        return;
      }

      // make my api request to an external server
    }
  },
  computed: {
    activeNote() {
      return this.$store.state.activeNote;
    },
    isOffline() {
      return this.$store.state.isOffline;
    }
  }
}
</script>
<style lang="postcss">
  button.save-note {
    @apply bg-none border border-gray-900 rounded py-1 px-4 mr-4 mt-3 hover:bg-gray-900 hover:text-white;
  }
  button.add-note {
    @apply flex items-center justify-center h-6 w-6 ml-1 rounded hover:bg-gray-300;
  }
</style>