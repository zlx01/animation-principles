<template>
  <!-- 预备动作 -->
  <h1>Principle 2: Anticipation</h1>
  <article class="principle two">
    <div class="shape"></div>
    <div class="surface"></div>
  </article>
</template>

<style scoped>
.two .shape {
  animation: two 5s infinite ease-out;
  transform-origin: 50% 7em;
}

.two .surface {
  background: #000;
  width: 8em;
  height: 1em;
  position: absolute;
  top: calc(50% + 4em);
  left: calc(50% - 3em);
}

@keyframes two {
  0%,
  15% {
    opacity: 0;
    transform: none;
  }

  15%,
  25% {
    opacity: 1;
    transform: none;
    animation-timing-function: cubic-bezier(0.5, 0.05, 0.91, 0.47);
  }

  28%,
  38% {
    transform: translateX(-2em);
  }

  40%,
  45% {
    transform: translateX(-4em);
  }

  50%,
  52% {
    /*往左倒*/
    transform: translateX(-4em) rotateZ(-20deg);
  }

  70%,
  75% {
    /*往回倒一点*/
    transform: translateX(-4em) rotateZ(-10deg);
  }

  78% {
    /*刹不住了*/
    transform: translateX(-4em) rotateZ(-24deg);
    /*透明度为1保持到78%的位置，否则会从25%的位置就开始向透明度0变化*/
    opacity: 1;
  }

  86%,
  100% {
    /*往下掉*/
    transform: translateX(-6em) translateY(4em) rotateZ(-90deg);
    /*消失*/
    opacity: 0;
  }
}
</style>
