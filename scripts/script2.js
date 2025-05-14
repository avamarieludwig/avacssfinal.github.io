
    document.body.addEventListener("click", function () {
      const audio = document.getElementById("bg-music");
      audio.play();
    }, { once: true }); // ensures it only plays on the first click
