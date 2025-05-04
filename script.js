document.addEventListener("DOMContentLoaded", function() {
  const text = "Aspiring Software Developer | AI/ML Enthusiast | Innovator";
  let i = 0;

  function type() {
      if (i < text.length) {
          document.getElementById("typing-text").innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 100);
      }
  }

  type();
});
