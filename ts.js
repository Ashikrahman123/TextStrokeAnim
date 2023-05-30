const restartButton =
document.querySelector(".reset");
restartButton.addEventListener("click",()=> {
    const textAnimation = document.querySelector(".text-stroke");
    setAnimationName(textAnimation,"none");
  }
)