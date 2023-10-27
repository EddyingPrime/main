import NavBar from '../Components/NavBar';
import Carousel from '../Components/Carousel';
import Article from '../Components/Article';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';
import demoVideo from '../assets/Images/demoVideo.mp4'

const slides = [
  'src/assets/Images/image.png',
  'src/assets/Images/image2.png',
  'src/assets/Images/image3.png',
  'src/assets/Images/image4.png',
  'src/assets/Images/image5.png',
];

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel autoSlide={true} autoSlideInterval={78000}>
        {[
          <video key="video" src={demoVideo} autoPlay muted loop />,
          ...slides.map((s, index) => <img key={index} src={s} alt={`Slide ${index}`} />),
        ]}
      </Carousel>
      <Article />
      <Gallery />
      <Footer />
    </>
  )
};



