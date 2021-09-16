import { select, templates } from '../settings.js';


class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidget();
  }


  render(element){
    const thisHome = this;
    const generatedHTML = templates.homePage();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.home = thisHome.dom.wrapper.querySelector(select.home.upper);
  }

  initWidget() {
    const thisHome = this;
  }
}

export default Home;