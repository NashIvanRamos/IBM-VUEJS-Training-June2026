<template>
  <div class="about-view">
    <h1>About</h1>
    <p>This is the Day 3 task app built with Vue Router and Pinia.</p>
    <RouterLink to="/home">← Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.about-view {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #1B2A4A;
  margin-bottom: 12px;
}

p {
  color: #4A5568;
  margin-bottom: 16px;
}

a {
  color: #42B883;
  text-decoration: none;
  font-weight: 600;
}
</style>