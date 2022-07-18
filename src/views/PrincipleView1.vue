<template>
  <!-- 挤压和拉伸 -->
  <h1>Principle 1: Squash and stretch</h1>
  <article class="principle one">
    <div class="shape"></div>
    <div class="surface"></div>
  </article>
</template>

<style scoped>
.one .shape {
  /* ease-out 缓慢退出 */
  animation: one 4s infinite ease-out;
}

.one .surface {
  background: #000;
  height: 10em;
  width: 1em;
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% + 10em);
}

@keyframes one {
  0%,
  15% {
    opacity: 0;
  }

  15%,
  25% {
    transform: none;
    /* 产生拉伸效果，模拟蓄力效果 */
    animation-timing-function: cubic-bezier(1, -1.92, 0.95, 0.89);
    width: 4em;
    height: 4em;
    top: calc(50% - 2em);
    left: calc(50% - 2em);
    opacity: 1;
  }

  35%,
  45% {
    transform: translateX(8em);
    /*撞击墙面后变扁*/
    height: 6em;
    width: 2em;
    top: calc(50% - 3em);
    animation-timing-function: linear;
    opacity: 1;
  }

  70%,
  100% {
    /*往下掉*/
    transform: translateX(8em) translateY(5em);
    height: 6em;
    width: 2em;
    top: calc(50% - 3em);
    /*消失*/
    opacity: 0;
  }
}
</style>
