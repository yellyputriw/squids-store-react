import { CarouselListData } from './CarouselListData';

const CarouselList = () => {
  const carousels = CarouselListData();

  return (
    <div className='carousel-wrapper'>
      {carousels.map((carousel) => (
        <div className='carousel-item' key={carousel.id}>
          <img src={carousel.image} alt='' />
          <div className='carousel-caption'>
            <h1>{carousel.carouselTitle}</h1>
            <button>Belanja Sekarang</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselList;
