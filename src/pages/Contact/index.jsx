import ContactForm from "./ContactForm";
import Layout from "../../components/Layout";

const ContactSection = () => {
  return (
    <Layout>
      <section id="contact">
        <div className="contact-wrapper">
          <h1>Hubungi Kami</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
            vel, quis eget eget ipsum blandit eget amet, faucibus. Velit est id
            viverra lectus a vulputate. Viverra gravida non mus etiam cras
            pellentesque. Sed enim porttitor mattis duis curabitur sem leo
            proin. Integer sed felis sit lectus faucibus nunc, sed. Ac enim,
            posuere arcu turpis scelerisque aliquam elementum. Velit est id
            viverra lectus a vulputate. Viverra gravida non mus etiam cras
            pellentesque. Sed enim porttitor mattis duis.
          </p>
          <div className="contact-detail">
            <div className="contact">
              <img
                src="/icons/map-pin-fill.svg"
                alt="map"
                width="17"
                height="17"
              />
              <p>
                Jalan Batu Indah XI No. 34 Batununggal, Bandung Kidul, Kota
                Bandung 40266
              </p>
            </div>
            <div className="contact">
              <img src="/icons/phone.svg" alt="phone" width={17} height={17} />
              <p>
                (022) 7380123 <br />
                (022) 993029
              </p>
            </div>
            <div className="contact">
              <img src="/icons/mail.svg" alt="mail" width={17} height={17} />
              <p>
                store@storelogo.com <br />
                info@storelogo.com
              </p>
            </div>
          </div>
          <div className="social-media">
            <p>Ikuti kami :</p>
            <img
              src="/icons/fb-fill.png"
              alt="Facebook"
              width={23}
              height={23}
            />
            <img
              src="/icons/twiter-fill.png"
              alt="Twitter"
              width={23}
              height={23}
            />
            <img
              src="/icons/ig-fill.png"
              alt="Instagram"
              width={23}
              height={23}
            />
          </div>
        </div>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default ContactSection;
