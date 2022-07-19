<template>
  <!--次要动作-->
  <h1>Principle 8: Secondary Action</h1>
  <article class="principle eight">
    <div class="shape a"></div>
    <div class="shape b"></div>
    <div class="shape c"></div>
  </article>
</template>

<style scoped>
.eight .shape.a {
  transform: translateX(-6em);
  animation: eight-shape-a 4s cubic-bezier(0.57, -0.5, 0.43, 1.53) infinite;
}

.eight .shape.b {
  top: calc(50% + 6em);
  opacity: 0;
  animation: eight-shape-b 4s linear infinite;
}

.eight .shape.c {
  transform: translateX(6em);
  animation: eight-shape-c 4s cubic-bezier(0.57, -0.5, 0.43, 1.53) infinite;
}

@keyframes eight-shape-a {
  0%,
  50% {
    transform: translateX(-5.5em);
  }
  70%,
  100% {
    transform: translateX(-10em);
  }
}

@keyframes eight-shape-b {
  0% {
    transform: none;
  }
  20%,
  30% {
    transform: translateY(-1.5em);
    opacity: 1;
    animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
  }
  32% {
    transform: translateY(-1.25%);
    opacity: 1;
  }
  34% {
    transform: translateY(-1.75em);
    opacity: 1;
  }
  36%,
  38% {
    transform: translateY(-1.25em);
    opacity: 1;
  }
  42%,
  60% {
    transform: translateY(-1.5em);
    opacity: 1;
  }
  75%,
  100% {
    transform: translateY(-8em);
    opacity: 1;
  }
}

@keyframes eight-shape-c {
  0%,
  50% {
    transform: translateX(5.5em);
  }
  70%,
  100% {
    transform: translateX(10em);
  }
}
</style>
