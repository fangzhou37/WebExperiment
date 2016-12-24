import React from 'react';
import Slider from 'react-slick';
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  getInitialState: function () {
    return {count: 10};
  },
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      waitForAnimate: false,
      autoplay: true,
      autoplaySpeed: 1500
    };

    var imageElements = [];
    for (var i = 1; i <= 50; i++) {
      var path = '/images/'+i+'.jpg';
      imageElements.push(<img src={prefixLink(path)}/>);
    }

    return (
      <span>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
      <div>
        <Slider {...settings}>
          {imageElements}
        </Slider>
      </div>
      </span>
    );
  }
});