<template>
  <div id="app">
    <InputJs value="JavaScript-Komponente" />
    <br />
    <Input
      value="SFC-Komponente"
      :label="'SFC-Komponente'"
      @new-event="newEventHandler"
    />
    <br />
    <p>
      <Search v-model:query.trim="query">
        <label>Suche:</label>
      </Search>
      <p>{{ query }}</p>
    </p>
  </div>
</template>

<script>
import InputJs from './components/Input.js';
import Input from './components/Input.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    InputJs,
    Input,
    Search,
  },
  data() {
    return { name: 'Test-Komponente', query: 'Suche...' };
  },
  methods: {
    newEventHandler(data) {
      console.log('new event handler:', data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
