<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <h4>Please Register for an account</h4>

      <label for="">Name</label>
      <input type="text" v-model="name" />

      <label for="">Email Address</label>
      <input type="email" v-model="email" />

      <label for="">Password</label>
      <input type="password" v-model="password" />

      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin: 0.5rem;
}
span {
  color: #5cdb95;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
}
button {
  width: 180px;
  height: 30px;
  border-radius: 19px;
  border: none;
  background: #5cdb95;
  color: whitesmoke;
  font-weight: 800;
  letter-spacing: 0.6px;
  margin: 1rem;
}
h4 {
  margin-bottom: 2rem;
}
h1 {
  text-decoration: underline;
}
input {
  width: 70%;
  height: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 1rem;
  margin: 1rem auto;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
}
.form-container {
  height: 450px;
  width: 600px;
  border-radius: 25px;
  background-color: whitesmoke;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.5);
}
</style>
