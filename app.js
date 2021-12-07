$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }
  });
});

$(".list").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// filterSelection("all");
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("itemBox");
//   if (c == "all") c = "";

//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }

// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
