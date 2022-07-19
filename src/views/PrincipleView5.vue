<template>
  <!-- 跟随和重叠动作 -->
  <h1>
    Principle 5: Follow Through and Overlapping ActionFollow Through and
    Overlapping Action
  </h1>
  <article class="principle five">
    <div class="shape-container">
      <div class="shape"></div>
    </div>
  </article>
</template>

<style scoped>
.five .shape {
  animation: five 4s infinite cubic-bezier(0.64, -0.36, 0.1, 1);
  position: relative;
  left: auto;
  top: auto;
}

.five .shape-container {
  animation: five-container 4s infinite cubic-bezier(0.64, -0.36, 0.1, 2);
  position: absolute;
  left: calc(50% - 4em);
  top: calc(50% - 4em);
}

@keyframes five {
  0%,
  15% {
    opacity: 0;
    transform: translateX(-12em);
  }
  15%,
  25% {
    /*从左边一点的位置*/
    transform: translateX(-12em);
    opacity: 1;
  }

  85%,
  90% {
    transform: translateX(12em);
    opacity: 1;
  }

  100% {
    transform: translateX(12em);
    opacity: 0;
  }
}

@keyframes five-container {
  0%,
  35% {
    transform: none;
  }

  50%,
  60% {
    transform: skewX(20deg);
  }

  90%,
  100% {
    transform: none;
  }
}
</style>
