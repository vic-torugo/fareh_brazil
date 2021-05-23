document.querySelector("#containerCarrossel")
  .addEventListener("wheel", event => {
    if (event.deltaY > 0) {
      event.target.scrollBy(-414, 0)
    }
    else {
      event.target.scrollBy(414, 0)
    }
  })