// "use client";
// import React from 'react';
// import Slider from 'react-slick';

// const Carousel = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,  // Number of cards to show in a row
//         slidesToScroll: 1,
//         draggable: true,
//         arrows: false,  // Corrected the 'arrow' prop to 'arrows'
//     };

//     return (
//         <div className="page-width">
//             <div style={{ width: '80%', margin: '0 auto' }}>
//                 <Slider {...settings}>
//                     <div>
//                         <Card content="Card 1" />
//                     </div>
//                     <div>
//                         <Card content="Card 2" />
//                     </div>
//                     <div>
//                         <Card content="Card 3" />
//                     </div>
//                     <div>
//                         <Card content="Card 4" />
//                     </div>
//                     <div>
//                         <Card content="Card 5" />
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// const Card = ({ content }) => (
//     <div style={{ padding: 20, background: '#eee', textAlign: 'center', borderRadius: 10, margin: '0 10px' }}>
//         <h3>{content}</h3>
//         <p>This is a card content.</p>
//     </div>
// );

// export default Carousel;
