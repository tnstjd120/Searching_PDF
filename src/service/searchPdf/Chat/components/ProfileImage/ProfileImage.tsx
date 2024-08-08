import * as S from './ProfileImage.styled';

import QuantumLogo from '@/assets/images/logo-single.png';
import ChatGPTLogo from '@/assets/images/chatGPT-logo.svg';
import { useActiveEngine } from '@/store/useChatStore';
import { EngineType } from '@/types/Engine';

const ProfileImage = () => {
  const activeEngine = useActiveEngine();

  return (
    <S.StyledProfileImage
      src={activeEngine === EngineType.Quantum ? QuantumLogo : ChatGPTLogo}
      sizes="small"
      variant="rounded"
    />
  );
};

export default ProfileImage;
