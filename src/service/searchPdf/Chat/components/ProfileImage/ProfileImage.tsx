import * as S from './ProfileImage.styled';
import QuantumLogo from '@/assets/images/logo-single.png';
import ChatGPTLogo from '@/assets/images/chatGPT-logo.svg';
import { TEngine } from '@/types/Chat';
import { useActiveEngine } from '@/store/useChatStore';
import { EngineType } from '@/types/Engine';

interface IProfileImage {
  color?: string;
  engineType?: TEngine;
}

const ProfileImage = ({ color, engineType }: IProfileImage) => {
  const activeEngine = useActiveEngine();

  const profilePath = engineType
    ? ['answerEngineQt', 'limeEngineQt'].includes(engineType)
      ? QuantumLogo
      : ChatGPTLogo
    : activeEngine === EngineType.Quantum
    ? QuantumLogo
    : ChatGPTLogo;

  return <S.StyledProfileImage src={profilePath} sizes="small" variant="rounded" color={color} />;
};

export default ProfileImage;
