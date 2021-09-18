/*global Flickity */
import { select, templates } from '../settings.js';
import {app} from '../app.js';


class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidget();
    thisHome.goToSubpage();
  }


  render(element){
    const thisHome = this;
    const generatedHTML = templates.homePage();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    // thisHome.dom.home = thisHome.dom.wrapper.querySelector(select.home.upper);

    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.home.order);
    thisHome.dom.booking = thisHome.dom.wrapper.querySelector(select.home.booking);
  }

  initWidget() {
    const thisHome = this;

    setTimeout(() => {
      thisHome.element = document.querySelector('.main-carousel');
      thisHome.flkty = new Flickity(thisHome.element, {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 4000,
        cellAlign: 'left',
        contain: true,
      });
    }, 2000);
  }

  goToSubpage() {
    const thisHome = this;

    thisHome.dom.order.addEventListener('click', function(){
      app.activatePage('order');
    });

    thisHome.dom.booking.addEventListener('click', function(){
      app.activatePage('booking');
    });
  }
}


export default Home;