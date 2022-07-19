<template>
  <!-- 缓入缓出 -->
  <h1>Principle 6: Slow In and Slow Out</h1>
  <article class="principle six">
    <div class="shape a"></div>
  </article>
</template>

<style scoped>
.six .shape {
  /*animation: six 3s infinite cubic-bezier(0.5, 0, 0.5, 1);*/
  animation: six 3s infinite ease-in-out;
}

@keyframes six {
  0%,
  5% {
    transform: translate(-12em);
  }
  45%,
  55% {
    transform: translate(12em);
  }
  95%,
  100% {
    transform: translate(-12em);
  }
}
</style>
