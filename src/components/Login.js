export default {
  data() {
    return { checked: false, title: 'Check me' };
  },
  template:
    '<div><label for="username">Username:</label><input id="username" type="text" /><br /><label for="password">Password:</label><input id="password" type="password" /></div>',
  methods: {
    check() {
      this.checked = !this.checked;
    },
  },
};
