<template>
  <img
    class="ttt-logo"
    alt="Two To Tango"
    src="/ttt_header_logo.webp"
  >
</template>

<style>
.ttt-logo {
  margin-top: 10px;
  height: 26px;
  width: 185px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
