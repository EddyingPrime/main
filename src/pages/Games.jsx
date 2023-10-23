import NavBar from '../Components/NavBar';
import image1 from "../assets/Images/1.jpg";
import image2 from "../assets/Images/2.jpg";
import image3 from "../assets/Images/3.jpg";
import image4 from "../assets/Images/4.jpg";

export default function Games() {
  const images = [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image4,
    image1,
    image2,
    image3,
  ];
  return (
    <>
      <NavBar />
      <div className="grid grid-row-3 col-4 gap-4 mt-5 mb-20 mx-40">
        <div className="bg-gray p-4 border text-center col-span-4">
          <img src={image2} alt="" />
        </div>
        <div className="grid grid-rows-2 col-span-1 gap-4">
          <div className="bg-gray p-2 text-center">
            <img src="#" alt="" />
          </div>
          <div className="bg-gray p-2 text-center">
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="col-span-3">
          <div className=" grid grid-cols-3 row-3 gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="bg-gray p-2 text-center">
                <img src={image} alt={`Card ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

