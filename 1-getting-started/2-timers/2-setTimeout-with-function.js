const rocks = who => {
  console.log(who  + ' rocks')
};
setTimeout(rocks, 4 * 1000, "Pluralsight");
// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)
