<template>
  <slot><span>Search:</span></slot>
  <input type="text" :value="query" @input="onInput" />
</template>

<script>
export default {
  props: {
    query: String,
    queryModifiers: {
      default: () => ({}),
    },
  },
  emits: ['update:query'],
  created() {
    console.log('created search component:', this.query, this.queryModifiers);
  },
  methods: {
    onInput(event) {
      let value = event.target.value;

      if (this.queryModifiers.trim) {
        value = value.trim();
      }

      this.$emit('update:query', value);
    },
  },
};
</script>
