import React from 'react';
import Slider from 'react-slick';

module.exports = React.createClass({
  getInitialState: function () {
    return {count: 10};
  },
  click: function () {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      },
    };

    var imageElements = [];
    for (var i = 1; i <= 14; i++) {
      var path = '/images/'+i+'.jpg';
      imageElements.push(<img src={path}/>);
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