<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>

    <button @click="setNewData">Change Inform</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed } from 'vue';
export default {
  setup() {
    const user = reactive({
      name: 'Hyun',
      age: 26,
    });
    const firstName = ref('');
    const lastName = ref('');

    const setNewData = () => {
      user.name = 'Choi';
      user.age = 17;
    };

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    return {
      user,
      setNewData,
      firstName,
      lastName,
      fullName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
