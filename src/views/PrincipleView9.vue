<template>
  <!--时间节奏 -->
  <h1>Principle 9: Timing</h1>
  <article class="principle nine">
    <div class="shape a"></div>
    <div class="shape b"></div>
  </article>
</template>

<style scoped>
.nine .shape.a {
  animation: nine 4s infinite cubic-bezier(0.93, 0, 0.67, 1.21);
  left: calc(50% - 12em);
  transform-origin: 100% 6em;
}

.nine .shape.b {
  animation: nine 2s infinite cubic-bezier(1, -0.97, 0.23, 1.84);
  left: calc(50% + 2em);
  transform-origin: 100% 100%;
}

@keyframes nine {
  0%,
  10% {
    /*原地静止*/
    transform: translateX(0);
  }
  40%,
  60% {
    transform: rotateZ(90deg);
  }

  90%,
  100% {
    transform: translateX(0);
  }
}
</style>
