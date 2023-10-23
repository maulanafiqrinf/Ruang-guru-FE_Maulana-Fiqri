function hollyKnight(name, stamina, undead) {
  if (stamina > undead) {
    return "Holly Knight " + name + " memenangkan pertempuran dengan mudah!";
  } else if (stamina < undead) {
    return "Holly knight "+name + " mengalahkan " +stamina+" undead, namun sayang holly knight "+ name +" gugur di medan perang!"
  } else {
    return "Beruntung Holly knight " + name + " berhasil mengalahkan " + undead + " undead!";
  }
}

console.log(hollyKnight('Lancelot', 30, 20)); 
console.log(hollyKnight('Gallahad', 10, 10)); 
console.log(hollyKnight('Tristan', 100, 110));

module.exports = hollyKnight;