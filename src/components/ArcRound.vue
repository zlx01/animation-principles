<template>
  <article class="principle sevenb">
    <div class="shape a"></div>
    <div class="shape b"></div>
  </article>
</template>

<style scoped>
.principle {
  position: relative;
}

.sevenb .shape.a {
  animation: sevenb 3s infinite linear;
  top: calc(50% - 2em);
  left: calc(50% - 9em);
  /*设置一个在对象之外的原点来作为它的旋转中心*/
  /*外框宽度是6em，间隔2em，内框宽度4em*/
  /*x-offset 10em刚好偏移到内框中心*/
  /*y-offset 自身高度50%即可*/
  transform-origin: 10em 50%;
}

.sevenb .shape.b {
  animation: sevenb 6s infinite linear reverse;
  background-color: yellow;
  width: 2em;
  height: 2em;
  left: calc(50% - 1em);
  top: calc(50% - 1em);
}

@keyframes sevenb {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
