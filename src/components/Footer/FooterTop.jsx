const FooterTop = () => {
  return (
    <div className='tagline-wrapper'>
      <div className='tagline'>
        <img
          src='/icons/delivery.svg'
          alt='Pengiriman Cepat'
          width={51}
          height={51}
        />
        <p>PENGIRIMAN CEPAT</p>
      </div>
      <div className='tagline'>
        <img
          src='/icons/discount.svg'
          alt='Diskon Spesial'
          width={51}
          height={51}
        />
        <p>DISKON SPESIAL</p>
      </div>
      <div className='tagline'>
        <img
          src='/icons/checkout.svg'
          alt='Checkout Aman'
          width={51}
          height={51}
        />
        <p>CHECKOUT AMAN</p>
      </div>
      <div className='tagline'>
        <img
          src='/icons/transfer.svg'
          alt='Pengembalian Uang'
          width={51}
          height={51}
        />
        <p>PENGEMBALIAN UANG</p>
      </div>
    </div>
  );
};

export default FooterTop;
