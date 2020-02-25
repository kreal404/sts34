// https://codepen.io/KIRILL_VASILEVICH/pen/YzXNozb

const anchors = document.querySelectorAll('a[href^="#"]');
const section = document.querySelectorAll('#catalog-product, #company, #about');

(function Scrolling_main() { 
  anchors.forEach( (el,i) => { 
    el.onclick = () => { 
      const y = section[i].offsetTop;
      wrapper.setAttribute('style' , `
        transform: translate( 0 , -${y}px);
        transition: 0.8s;
        transition-timing-function: ease-in;
      `);
      reference(i)
    }
  })
})();

function reference (data){
  window.onresize = () => {
    const y = section[data].offsetTop;
    wrapper.setAttribute('style' , `
      transform: translate( 0 ,-${y}px);
      transition: 0s;
    `);
  }
} 
