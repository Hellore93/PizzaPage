import {select} from '../settings.js';

class Carousel {
  constructor(element) {
    const thisCarousel = this;
    thisCarousel.render(element);
    thisCarousel.initPlugin();
  }


  render(element) {
    // save element ref to this obj
    const thisCarousel = this;
    thisCarousel.dom = {};
    thisCarousel.dom.wrapper = element;
    thisCarousel.dom.dataFlickity = thisCarousel.dom.wrapper.querySelector(select.widgets.dataFlickity.wrapper);

  }
 
  initPlugin() {
    // use plugin to create carousel on thisCarousel.element
    thisCarousel.element=document.querySelector(select.dataFlickity.wrapper);
  }
}

export default Carousel;