import Logo from '@/assets/images/logo-single.png';
import * as S from './ProfileImage.styled';

const ProfileImage = () => {
  return <S.StyledProfileImage src={Logo} sizes="small" variant="rounded" />;
};

export default ProfileImage;
