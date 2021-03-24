const range = document.getElementById("range"),
  rangeV = document.getElementById("rangeV"),
  setValue = () => {
    const e = Number((100 * (range.value - range.min)) / (range.max - range.min)),
      s = 10 - 0.2 * e;
    (rangeV.innerHTML = `<span>${range.value}</span>`), (rangeV.style.left = `calc(${e}% + (${s}px))`);
  };
document.addEventListener("DOMContentLoaded", setValue),
  range.addEventListener("input", setValue),
  (clickCopy = (e) => {
    let s = $("<textarea></textarea>"),
      a = "#" + e.target.id,
      n = $(a).text();
    $(s).val(n), $("#myPassword").append(s), $(s).select(), document.execCommand("copy"), $(s).remove();
  });
let numbers = [2, 3, 4, 5, 6, 7, 8, 9],
  lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"],
  symbols = ["@", "#", "$", "%", "@", "#", "$", "%"],
  password = [],
  passwords = [],
  pass = [];
$(document).ready(function () {
  function e() {
    (aaa = ""), (bbb = ""), (ccc = ""), (ddd = ""), (pass = []), (password = []), (passwords = []);
  }
  $(document).on("click", "#generate", function () {
    e(), $(".hideUntilClick").addClass("visible").removeClass("invisible");
    let s = $("#gridCheck1:checked").val(),
      a = $("#gridCheck2:checked").val(),
      n = $("#gridCheck3:checked").val(),
      o = $("#gridCheck4:checked").val(),
      t = $("#range").val();
    "on" !== s && "on" !== a && "on" !== n && "on" !== o && (pass = numbers), "on" === s && (pass = pass.concat(numbers)), "on" === a && (pass = pass.concat(lowerCase)), "on" === n && (pass = pass.concat(upperCase)), "on" === o && (pass = pass.concat(symbols)), (passwords = pass);
    for (let e = 0; e < t; e++) {
      let e = Math.floor(Math.random() * passwords.length),
        s = passwords[e];
      password.push(s);
    }
    (password = password.join("")),
      $("#myPassword")
        .text(password)
        .click((e) => {
          clickCopy(e);
        });
  });
});

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/