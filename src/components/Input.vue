<template>
  <label for="input">{{ label }}</label>
  <input type="text" :value="value" @input="handleInput" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 3;
      },
    },
  },
  emits: ['new-event'],
  created() {
    console.log('created input:', this.label);
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;

      this.$emit('new-event', 'Testdaten');

      console.log('handleInput: ', value);
    },
  },
};
</script>
