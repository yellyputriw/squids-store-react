import UserMenu from '../UserMenu';
import ProfileImage from './ProfileImage';
import ProfileAccount from './ProfileAccount';

const ProfileSection = () => {
  return (
    <main className='profile'>
      <ProfileImage />
      <ProfileAccount />
      <UserMenu />
    </main>
  );
};

export default ProfileSection;
