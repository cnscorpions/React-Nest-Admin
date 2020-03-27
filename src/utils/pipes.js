const numberToTime = number => {
  var time = new Date(number),
    y = time.getFullYear(),
    m = time.getMonth() + 1,
    d = time.getDate();
  return (
    y +
    "-" +
    (m < 10 ? "0" + m : m) +
    "-" +
    (d < 10 ? "0" + d : d) +
    " " +
    time.toTimeString().substr(0, 8)
  );
};

const kbToMb = kb => {
  const size =
    kb / (1024 * 1024) > 1
      ? Math.floor(kb / (1024 * 1024)) + "m"
      : Math.floor(kb / 1024) + "k";
  return size;
};

export { numberToTime, kbToMb };
