import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="my-account-edit">
        <div className="profil-img-wrapper">
          <p>Foto Profil</p>
          <div className="profil-img">
            <img
              src="/images/account/profile.png"
              alt="Profil"
              width={278}
              height={278}
            />
            <button>
              <img
                src="/icons/camera.svg"
                alt="Camera"
                width={29}
                height={29}
              />
            </button>
          </div>
        </div>
        <div className="profil-identity-wrapper">
          <h2>Ubah Data Saya</h2>
          <form>
            <div className="form-box">
              <label htmlFor="name-edit">Nama</label>
              <input type="text" id="name-edit" />
            </div>
            <div className="form-box">
              <label htmlFor="phone-edit">Nomor HP/Whatsapp</label>
              <input type="text" id="phone-edit" />
            </div>
            <div className="form-box">
              <label htmlFor="email-edit">Email</label>
              <input type="email" id="email-edit" />
            </div>
            <div className="btn-box">
              <button
                className="cancel btn"
                onClick={() => navigate("/profile")}
              >
                Batal
              </button>
              <button className="save btn">Simpan</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default EditProfile;
