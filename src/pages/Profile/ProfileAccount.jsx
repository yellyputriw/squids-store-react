import { useNavigate } from "react-router-dom";

const ProfileAccount = () => {
  const navigate = useNavigate();

  return (
    <section className="profile-account">
      <h2>Data Saya</h2>
      <div className="personal-info">
        <span>Nama Lengkap</span>
        <p>Haris Hermawan</p>
      </div>
      <div className="personal-info">
        <span>Nomor HP/WhatsApp</span>
        <p>08123456789</p>
      </div>
      <div className="personal-info">
        <span>Email</span>
        <p>harishermawan@gmail.com</p>
      </div>
      <div className="btn-wrapper">
        <button onClick={() => navigate("/edit-profile")}>Ubah</button>
      </div>
    </section>
  );
};

export default ProfileAccount;
