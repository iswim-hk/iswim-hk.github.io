function mob_ver() {
    var z = document.getElementById("mobNav");
    if (z.className === "nav") {
      z.className += " responsive";
    } else {
      z.className = "nav";
    }
  }