<template>
  <!--扎实的描绘 -->
  <h1>Principle 11: Solid drawing</h1>
  <article class="principle eleven">
    <div class="shape">
      <div class="container">
        <!--六个面-->
        <span class="front"></span>
        <span class="back"></span>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.eleven .shape {
  background: none;
  border: none;
  perspective: 400px;
  perspective-origin: center;
}

.eleven .shape .container {
  animation: eleven 4s infinite cubic-bezier(0.6, -0.44, 0.37, 1.44);
  transform-style: preserve-3d;
}

.eleven .shape span {
  display: block;
  position: absolute;
  opacity: 1;
  width: 4em;
  height: 4em;
  border: 1em solid #fff;
  background: #2d97db;
}
.eleven .shape span.front {
  transform: translateZ(3em);
}
.eleven .shape span.back {
  transform: translateZ(-3em);
}
.eleven .shape span.left {
  transform: rotateY(-90deg) translateZ(-3em);
}
.eleven .shape span.right {
  transform: rotateY(-90deg) translateZ(3em);
}
.eleven .shape span.top {
  transform: rotateX(-90deg) translateZ(-3em);
}
.eleven .shape span.bottom {
  transform: rotateX(-90deg) translateZ(3em);
}

@keyframes eleven {
  0% {
    opacity: 0;
  }
  10%,
  40% {
    transform: none;
    opacity: 1;
  }
  60%,
  75% {
    transform: rotateX(-20deg) rotateY(-45deg) translateY(4em);
  }
  100% {
    transform: translateZ(-180em) translateX(20em);
    opacity: 0;
  }
}
</style>
