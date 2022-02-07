export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  template: '<input type="text" :value="value" />',
};
