<template>
  <div>
    <label for="username">Username:</label>
    <input id="username" type="text" />
    <br />
    <label for="password">Password:</label>
    <input id="password" type="password" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
