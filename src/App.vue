<script setup>
import UserData from './component/UserData.vue';
import { reactive, ref, computed, watch } from 'vue';

const user = reactive({
  name: 'Hyun',
  age: 26,
});
const firstName = ref('');
const lastName = ref('');
const numberInput = ref(null);
const number = ref(0);

const setNewData = () => {
  user.name = 'Choi';
  user.age = 17;
};

const numberInputHandler = () => {
  number.value = numberInput.value.value;

  console.log(number.value);
};

watch([firstName, lastName], (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});
</script>
<template>
  <section class="container">
    <UserData :fullName="fullName" :age="user.age" />

    <button @click="setNewData">Change Inform</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input ref="numberInput" />
      <button @click="numberInputHandler"></button>
      <button @click="postQuiz">Post Data</button>
    </div>
  </section>
</template>

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
