import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";


function CarouselList() {
    const a = [
        {url: 'https://images.slivcdn.com/videoasset_images/kbc23_2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/videoasset_images/vanshaj_foreground.png?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/0/balh_merged_image_web_1700000190.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/videoasset_images/cp2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/videoasset_images/qoty2_foreground.png?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/videoasset_images/tkss2023_sunday_special_2july_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
        {url: 'https://images.slivcdn.com/0/kathaa_ankaee_merged_image_web_1700001091.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'},
];
  return (
    <div style={{zIndex: '-1'}}>
    <SimpleImageSlider
        style={{objectFit: 'fill'}}
        width={'100%'}
        height={600}
        loop={true}
        autoPlay={true}
        images={a}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default CarouselList;