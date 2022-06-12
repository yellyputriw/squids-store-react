const Rating = ({ value }) => {
  const getStar = (value) => {
    switch (value) {
      case 0:
        return "/icons/star.svg";
      case 50:
        return "/icons/star-half.svg";
      case 100:
        return "/icons/star-fill.svg";
      default:
        return "/icons/star.svg";
    }
  };

  const getStars = (value) => {
    if (parseFloat(value) <= 0.5) {
      return [0, 0, 0, 0, 0];
    } else if (parseFloat(value) <= 1.0) {
      return [50, 0, 0, 0, 0];
    } else if (parseFloat(value) <= 1.5) {
      return [100, 0, 0, 0, 0];
    } else if (parseFloat(value) <= 2.0) {
      return [100, 50, 0, 0, 0];
    } else if (parseFloat(value) <= 2.5) {
      return [100, 100, 0, 0, 0];
    } else if (parseFloat(value) <= 3.0) {
      return [100, 100, 50, 0, 0];
    } else if (parseFloat(value) <= 3.5) {
      return [100, 100, 100, 0, 0];
    } else if (parseFloat(value) <= 4.0) {
      return [100, 100, 100, 50, 0];
    } else if (parseFloat(value) <= 4.5) {
      return [100, 100, 100, 100, 0];
    } else if (parseFloat(value) <= 5.0) {
      return [100, 100, 100, 100, 50];
    } else {
      return [100, 100, 100, 100, 100];
    }
  };
  return (
    <div className="rating">
      {getStars(value).map((value) => (
        <img src={getStar(value)} alt="star" />
      ))}
      {/* <p>({product.rating.count} Ulasan)</p> */}
    </div>
  );
};

export default Rating;
