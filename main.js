import './style.css';
import Lenis from '@studio-freight/lenis'
import Rellax from 'rellax';

var rellax = new Rellax('.rellax');

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: 'vertical',
})

//get scroll value
lenis.on('scroll', ({ scroll, limit }) => {
  console.log({ scroll, limit })
})

function raf() {
  lenis.raf()
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


