window.onload = function () {
  const paragraphs = document.querySelectorAll(".paragraph")

  function setBGColor(color) {
    const content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color)
  }

  function setFontColor(color) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
    localStorage.setItem("fontColor", color)
  }

  function setFontSize(size) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }

  function setLineHeight(height) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
    localStorage.setItem("lineHeight", height)
  }

  function setFontFamily(family) {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    localStorage.setItem("fontFamily", family)
  }

  const backgroundColorButtons = document.querySelectorAll("#background-color button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function (event) {
      setBGColor(event.target.id)
    })
  }

  const fontColorButtons = document.querySelectorAll("#font-color button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function (event) {
      setFontColor(event.target.id)
    })
  }

  const fontSizeButtons = document.querySelectorAll("#font-size button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function (event) {
      setFontSize(event.target.id)
    })
  }

  const lineHeightButtons = document.querySelectorAll("#line-height button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function (event) {
      setLineHeight(event.target.id)
    })
  }

  const fontFamilyButtons = document.querySelectorAll("#font-family button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function (event) {
      setFontFamily(event.target.id)
    })
  }

  function loadPreferences() {
    const backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) {
      setBGColor(backgroundColor)
    }
    const fontColor = localStorage.getItem("fontColor")
    if (fontColor) {
      setFontColor(fontColor)
    }
    const fontSize = localStorage.getItem("fontSize")
    if (fontSize) {
      setFontSize(fontSize)
    }
    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) {
      setLineHeight(lineHeight)
    }
    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) {
      setFontFamily(fontFamily)
    }
  }
  loadPreferences();
}
