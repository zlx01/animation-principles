<template>
  <!-- 演出布局 -->
  <h1>Principle 3: Staging</h1>
  <article class="principle three">
    <div class="shape a"></div>
    <div class="shape b"></div>
    <div class="shape c"></div>
  </article>
</template>

<style scoped>
.three .shape.a {
  transform: translateX(-12em);
}

.three .shape.c {
  transform: translateX(12em);
}

.three .shape.a,
.three .shape.c {
  animation: three-blur 5s infinite linear;
}

.three .shape.b {
  animation: three 5s infinite ease-out;
  transform-origin: 0 6em;
}

@keyframes three {
  0%,
  10% {
    transform: none;
    animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
  }
  /*来回摇摆*/
  26%,
  30% {
    transform: rotateZ(-40deg);
  }
  32.5% {
    transform: rotateZ(-38deg);
  }
  35% {
    transform: rotateZ(-42deg);
  }
  37.5% {
    transform: rotateZ(-38deg);
  }
  40% {
    transform: rotateZ(-40deg);
  }
  42.5% {
    transform: rotateZ(-38deg);
  }
  45% {
    transform: rotateZ(-42deg);
  }
  47.5% {
    transform: rotateZ(-38deg);
    animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
  }
  58%,
  100% {
    transform: none;
  }
}

@keyframes three-blur {
  0%,
  20% {
    filter: none;
  }
  40%,
  50% {
    filter: blur(5px);
  }
  65%,
  100% {
    filter: none;
  }
}
</style>
