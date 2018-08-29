<template>
  <div class="main-page">
    <h1><span class="title-1">Travel </span><span class="title-2">With </span><span class="title-3">kids</span></h1>
    <p>Destination / Location</p>
    <div class="input-wrapper">
      <img class="loaction-icon" src="../assets/location-icon.svg" alt="location">
      <input class="search-input" type="text">
    </div>
    <div class="button-wrapper">
      <button>Optimal Way Search</button>
      <button>Facilities Nearby</button>
    </div>
    <div class="option-wrapper">
      <div class="option-item">
        <input type="checkbox" id="KidsToilet" name="feature"
               value="KidsToilet" checked />
        <label for="KidsToilet">Kids Toilet</label>
      </div>
      <div class="option-item">
        <input type="checkbox" id="ChildcareRoom" name="feature"
               value="ChildcareRoom" checked />
        <label for="ChildcareRoom">Childcare Room</label>
      </div>
      <div class="option-item">
        <input type="checkbox" id="Stroller" name="feature"
               value="Stroller" checked />
        <label for="Stroller">Stroller (Barrier-free)</label>
      </div>
      <div class="option-item">
        <input type="checkbox" id="EmergencyRoom" name="feature"
               value="EmergencyRoom" checked />
        <label for="EmergencyRoom">Emergency Room (Pediatric Doctor)</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page {
  padding: 50px 12px 0 12px;
}
h1 {
  font-family: 'Luckiest Guy';
  font-weight: 400;
  font-size: 38px;
  text-align: center;
  margin-bottom: 30px;
}
h1 .title-1 {
  color: #ffaa22;
}
h1 .title-2 {
  color: #2D343B;
}
h1 .title-3 {
  color: #35a4ee;
}
p {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 10px;
}
.search-input {
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 12px 10px 12px 34px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 40px;
}
.option-item {
  margin-bottom: 10px;
  margin-left: 10px;
}
label {
  font-weight: 400;
  border: 1px solid #ededed;
  padding:  20px 10px 20px 20px;
  margin-left: 8px;
  border-radius: 8px;
  width: calc(100% - 26px);
  display: inline-block;
  background-color: #fafafa;
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
button {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 16px 20px;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 12px;
  font-weight: 600;
  background-color: #ffaa22;
  border: none;
}
button:last-child {
  margin-right: 0;
  background-color: #35a4ee;
}
.input-wrapper {
  position: relative;
}
.loaction-icon {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
}
</style>
