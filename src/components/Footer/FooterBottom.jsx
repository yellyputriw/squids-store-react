const FooterBottom = () => {
  return (
    <div className='footer-wrapper'>
      <p>IKUTI KAMI</p>
      <div className='social-media'>
        <a href='/#'>
          <img src='/icons/facebook.png' alt='Facebook' />
        </a>
        <a href='/#'>
          <img src='/icons/twitter.png' alt='Twitter' />
        </a>
        <a href='/#'>
          <img src='/icons/instagram.png' alt='Instagram' />
        </a>
        <a href='/#'>
          <img src='/icons/youtube.png' alt='Youtube' />
        </a>
      </div>
      <ul>
        <li>
          <a href='/#'>Blog</a>
        </li>
        <li>
          <a href='/#'>Tentang Kami</a>
        </li>
        <li>
          <a href='/#'>Lacak Order</a>
        </li>
        <li>
          <a href='/#'>Kontak</a>
        </li>
        <li>
          <a href='/#'>FAQ</a>
        </li>
      </ul>
      <p className='copyright'>
        Copyright © 2020. All right reserved. Design by DotERB.
      </p>
    </div>
  );
};

export default FooterBottom;
