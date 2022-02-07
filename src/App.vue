<template>
  <div id="app">
    <InputJs value="JavaScript-Komponente" />
    <br />
    <Input
      value="SFC-Komponente"
      :label="'SFC-Komponente'"
      @new-event="newEventHandler"
    />
  </div>
</template>

<script>
import InputJs from './components/Input.js';
import Input from './components/Input.vue';

export default {
  name: 'App',
  components: {
    InputJs,
    Input,
  },
  data() {
    return { name: 'Test-Komponente' };
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
