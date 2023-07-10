<template>
  <div class="purchase-form-page">
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Ivan"
          required
        />
      </div>
      <div class="form-group">
        <label for="familyname">Family Name:</label>
        <input
          type="text"
          id="familyname"
          v-model="familyName"
          placeholder="Ivanov"
          required
        />
      </div>
      <div class="form-group">
        <label for="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          v-model="cardNumber"
          placeholder="0000000000000000"
          required
        />
      </div>
      <div class="form-group">
        <label for="cardDate">Expires date:</label>
        <input
          type="text"
          id="cardDate"
          v-model="cardDate"
          placeholder="MM/YY"
          required
        />
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          v-model="cvv"
          placeholder="000"
          required
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      familyName: '',
      cardNumber: '',
      cardDate: '',
      cvv: '',
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

.purchase-form-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  background-color: transparent;
  color: #fff;
  border: 1px solid hsla(102, 63%, 60%, 1);
  border-radius: $radius;
}

input::placeholder {
  color: #fff; 
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: hsla(102, 63%, 60%, 1);
  color: black;
  border: none;
  border-radius: $radius;
  cursor: pointer;
}
</style>
