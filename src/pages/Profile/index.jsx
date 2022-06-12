import Layout from "../../components/Layout";
import UserMenu from "../../components/UserMenu";
import ProfileImage from "./ProfileImage";
import ProfileAccount from "./ProfileAccount";

const ProfileSection = () => {
  return (
    <Layout>
      <section className="profile">
        <ProfileImage />
        <ProfileAccount />
        <UserMenu />
      </section>
    </Layout>
  );
};

export default ProfileSection;
