<template>
  <!-- 连续运动和姿态对应 -->
  <h1>Principle 4: Straight Ahead Action and Pose to Pose</h1>
  <article class="principle four">
    <div class="shape a"></div>
    <div class="shape b"></div>
  </article>
</template>

<style scoped>
.four .shape.a {
  left: calc(50% - 8em);
  animation: four 6s infinite cubic-bezier(0.57, -0.5, 0.43, 1.53);
}

.four .shape.b {
  left: calc(50% + 8em);
  /*steps增加关键帧中间的过渡帧*/
  animation: four 6s infinite steps(4);
}

@keyframes four {
  0%,
  10% {
    transform: none;
  }
  26%,
  30% {
    transform: rotateZ(-45deg) scale(1.25);
  }
  40% {
    transform: rotateZ(-45deg) translate(2em, -2em) scale(1.8);
  }
  50%,
  75% {
    transform: rotateZ(-45deg) scale(1.1);
  }
  90%,
  100% {
    transform: none;
  }
}
</style>
