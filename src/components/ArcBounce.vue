<template>
  <!-- 弧线运动 -->
  <h1>Principle 7: Arc</h1>
  <article class="principle sevena">
    <div class="shape-container">
      <div class="shape a"></div>
    </div>
  </article>
</template>

<style scoped>
.principle {
  position: relative;
}

.sevena .shape-container {
  animation: move-right 6s infinite cubic-bezier(0.37, 0.55, 0.49, 0.67);
  position: absolute;
  left: calc(50% - 4em);
  top: calc(50% - 4em);
}

.sevena .shape {
  animation: bounce 6s infinite linear;
  border-radius: 50%;
  position: relative;
  left: auto;
  top: auto;
}

@keyframes move-right {
  0% {
    /*初始位置*/
    transform: translateX(-20em);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  90%,
  100% {
    transform: translateX(20em);
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-8em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  15% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
  25% {
    transform: translateY(-4em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  32.5% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
  40% {
    transform: translateY(0em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  45% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
  50% {
    transform: translateY(3em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  56% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
  60% {
    transform: translateY(6em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  64% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
  66% {
    transform: translateY(7.5em);
    animation-timing-function: cubic-bezier(0.51, 0.01, 0.79, 0.02);
  }
  70%,
  100% {
    transform: translateY(8em);
    animation-timing-function: cubic-bezier(0.19, 1, 0.7, 1);
  }
}
</style>
