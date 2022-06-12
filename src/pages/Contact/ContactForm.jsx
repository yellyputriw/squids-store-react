const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <h2>Kirim Pertanyaan Anda</h2>
      <form action="#">
        <div className="form-box">
          <div className="message">
            <label htmlFor="contactus-name">Name</label>
            <input type="text" id="contactus-name" />
          </div>
          <div className="message">
            <label htmlFor="contactus-email">Email</label>
            <input type="email" id="contactus-email" />
          </div>
        </div>
        <div className="message">
          <label htmlFor="contactus-message">Pesan</label>
          <textarea
            name="message"
            id="contactus-message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="btn">
          <button>Kirim</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
