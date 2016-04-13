import React from 'react';
import Gallery from 'react-photo-gallery';
import { prefixLink } from 'gatsby-helpers'
 
export default class foodPictures extends React.Component {
    render() {
      var imageElements = [];
      for (var i = 15; i <= 21; i++) {
        var path = '/images/'+i+'.jpg';
        imageElements.push(<img src={prefixLink(path)} width="300"/>);
      }
      return (
        <div>
          {imageElements}
        </div>
      );
    }
}






/*
export default class foodPictures extends React.Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} />
	);
    }
}

var imageElements = [];
for (var i = 15; i <= 21; i++) {
  var path = '/images/'+i+'.jpg';
  imageElements.push(<img src={prefixLink(path)}/>);
}
 
const PHOTO_SET = [
  {
    src: '/images/15.jpg',
    width: 100,
    lightboxImage:{
    	src: '/images/15.jpg',
    	srcset: [
    	]
    }
  },
  {
    src: '/images/16.jpg',
    aspectRatio: 0.8
    lightboxImage:{
    	src: '/images/16.jpg',
    	srcset: [
    	]
    }
  }
];
*/