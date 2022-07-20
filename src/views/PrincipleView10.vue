<template>
  <!--夸张手法 -->
  <h1>Principle 10: Exaggeration</h1>
  <article class="principle ten">
    <div class="shape"></div>
  </article>
</template>

<style scoped>
.ten .shape {
  animation: ten 4s infinite linear;
  transform-origin: 50% 8em;
  top: calc(50% - 6em);
}

@keyframes ten {
  0%,
  10% {
    transform: none;
    animation-timing-function: cubic-bezier(0.87, -1.05, 0.66, 1.31);
  }
  40% {
    transform: rotateZ(-45deg) scale(2);
    animation-timing-function: cubic-bezier(0.16, 0.54, 0, 1.38);
  }
  70%,
  100% {
    transform: rotateZ(360deg) scale(1);
  }
}
</style>
