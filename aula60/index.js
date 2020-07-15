function recursiva(max) {
  console.log(max);
  if (max >= 700) return;
  max++;
  recursiva(max);
}

recursiva(0);
