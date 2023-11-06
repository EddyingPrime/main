import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

// const Carousel = ({ items }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slidesToShow = 5; // Number of images to display in one view

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % (items.length - slidesToShow + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (currentSlide - 1 + (items.length - slidesToShow + 1)) %
//         (items.length - slidesToShow + 1)
//     );
//   };

//   const visibleItems = items.slice(currentSlide, currentSlide + slidesToShow);

//   return (
//     <>
//       <div
//         className="carousel"
//         style={{ display: "flex", alignItems: "center" }}
//       >
//         <div style={{ order: 1 }}>
//           <button onClick={prevSlide} className="carousel-button">
//             <ChevronLeft />
//           </button>
//         </div>
//         <div
//           className="carousel-content"
//           style={{
//             display: "flex",
//             flex: "1",
//             justifyContent: "space-between",
//           }}
//         >
//           {visibleItems.map((item, index) => (
//             <img
//               key={index}
//               src={item}
//               alt={`Item ${index}`}
//               style={{ width: "300px", height: "200px", marginRight: "10px" }}
//             />
//           ))}
//         </div>
//         <div style={{ order: 3 }}>
//           <button onClick={nextSlide} className="carousel-button">
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

export default function Gallery() {
  // const items = [
  //   "src/assets/Images/img1.png",
  //   "src/assets/Images/img2.png",
  //   "src/assets/Images/img3.png",
  //   "src/assets/Images/img4.png",
  //   "src/assets/Images/img5.png",
  //   "src/assets/Images/img6.png",
  //   "src/assets/Images/img7.png",
  //   "src/assets/Images/img8.png",
  //   "src/assets/Images/img9.png",
  //   "src/assets/Images/img10.png",
  // ];

  return (
    <>
      <div
        className="w-full bg-parallax bg-cover bg-fixed bg-no-repeat h-40 mt-8
                flex items-center justify-center
                text-[22px] font-Ops text-accent text-shadow
                tablet:text-[40px]
                desktop:text-[70px]"
      >
        WITNESS OUR EPIC COMMUNITY!
      </div>
      {/* <div className="mt-10 h-40">
        <h3 className="font-Titilium text-lg">Gallery</h3>
        <div>
          <Carousel items={items} />
        </div>
      </div> */}
    </>
  );
}
