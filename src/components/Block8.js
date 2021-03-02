import React from 'react'

function Block8() {
    return (
        <div>
            <div>
 
  <main>
 
    <section id="portfolio" className="container main-section">
      <div className="filters row js-dis">
        <h4 className="filters__title"> <i className="fa fa-tags" /> </h4>
        <ul className="filters__list">
          <li className="filters__label is-active"> all </li>
          <li className="filters__label" data-cat="fcc"> free code camp </li>
          <li className="filters__label" data-cat="personal"> personal projects </li>
        </ul>
      </div>
      <div className="portfolio__project-wrapper row">

        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="fcc">
          <a href="https://codepen.io/eevu/full/YQjeNM/" target="_blank" title="view live">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/weather.svg" alt="weather app" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name">Weather App</h3>
                <p className="portfolio__project__category">#free code camp</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="fcc">
          <a href="https://codepen.io/eevu/full/mEyLPx" target="_blank" title="view live">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/wiki.svg" alt="wikipedia viewer" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name">Wikipedia Viewer</h3>
                <p className="portfolio__project__category">#free code camp</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="fcc">
          <a href="#" title="coming soon">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/calc.svg" alt="javascript calculator" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name">JavaScript Calculator</h3>
                <p className="portfolio__project__category"> #free code camp</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="personal">
          <a href="#" title="coming soon">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/txt.svg" alt="text editor" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name">Text Editor</h3>
                <p className="portfolio__project__category">#personal project</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="personal">
          <a href="https://en.wikipedia.org/wiki/Bacteriophage" target="_blank" title="what's a becteriophage?">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/bacteriophage.svg" alt="random placeholder" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name"> Bacteriophage </h3>
                <p className="portfolio__project__category">#placeholder</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="personal">
          <a href="#" title="coming soon">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/desktop.svg" alt="random placeholder" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name"> Desktop </h3>
                <p className="portfolio__project__category">#placeholder</p>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio__project col-xs-12 col-sm-6 col-lg-4" data-cat="personal">
          <a href="#" title="coming soon">
            <div className="portfolio__project__preview">
              <img src="https://eevu.github.io/img/laptop.svg" alt="random placeholder" />
            </div>
            <div className="portfolio__project__description">
              <div className="info-wrapper">
                <h3 className="portfolio__project__name"> Laptop </h3>
                <p className="portfolio__project__category">#placeholder</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="about" className="main-section">
      <div className="wrapper">
        <p className="about__intro">
          Hi, I'm Ivana, an aspiring web developer with an interest in UX/UI design. <br /> I'm majoring in Physics by day and teaching myself web development and design by night. <br /> I was born and raised many worlds away from the Silicon Valley, on a pebble
          called Sardinia, floating amid the Mediterranean Sea. <br /> I love almost anything under the sun, apart from spiders and coconuts.
        </p>
        <a href="#portfolio" className="global-button rotated scroll"> see my work </a>
      </div>
    </section>
  </main>

</div>
        </div>
    )
}

export default Block8
