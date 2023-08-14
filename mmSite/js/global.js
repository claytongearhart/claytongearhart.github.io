window.onload = () => {
  resizePattern();
};

window.addEventListener("resize", resizePattern);

function resizePattern() {
  let sEle = document.getElementsByTagName('svg')[0]
  let aWidth =  document.getElementsByTagName('nav')[0].clientWidth + 128
  console.log(document.getElementsByTagName('nav')[0])
  let zeroEdge = aWidth + (sEle.clientHeight  * 0.7494); 
  let oneEdge = aWidth + (sEle.clientHeight * 0.4987);
  if (window.innerWidth < oneEdge) {
    document
      .getElementsByClassName("pattern")[0]
      .setAttribute("viewBox", "335.5804 0 168.7396 672.91");
      [...document.getElementsByClassName('hide')].forEach(element => {
        element.style.display = 'block';
      });
      [...document.querySelectorAll('svg > g > g > path:not(.hide), svg > g > g > circle:not(.hide)')].forEach(ele=> {
        ele.style.display = 'none';
      })

  } else if (window.innerWidth < zeroEdge) {
    document
      .getElementsByClassName("pattern")[0]
      .setAttribute("viewBox", "0 0 335.5804 672.91");
      [...document.getElementsByClassName('hide')].forEach(element => {
        element.style.display = 'none';
      });
      [...document.querySelectorAll('svg > g > g > path:not(.hide), svg > g > g > circle:not(.hide)')].forEach(ele=> {
        ele.style.display = 'block';
      })
  } else if (window.innerWidth > zeroEdge) {
    document
      .getElementsByClassName("pattern")[0]
      .setAttribute("viewBox", "0 0 504.32 672.91");
      [...document.getElementsByClassName('hide')].forEach(element => {
        element.style.display = 'block';
      });
  }
  console.table({
    aWidth: aWidth,
    ZeroEdge: zeroEdge,
    OneEdge: oneEdge
  })
  
}