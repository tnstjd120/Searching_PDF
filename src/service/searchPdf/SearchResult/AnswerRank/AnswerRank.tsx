import { TQuantumAnswerRank } from '@/types/Chat';
import * as S from './AnswerRank.styled';
import { useIsActive, useSetActiveChatRank } from '@/store/useChatStore';
import { useEffect } from 'react';

interface IAnswerRank {
  rankValue: TQuantumAnswerRank;
  index: number;
}

const AnswerRank = ({ rankValue, index }: IAnswerRank) => {
  const { text } = rankValue;

  const isActive = useIsActive(index);
  const setActiveChatRank = useSetActiveChatRank();

  useEffect(() => {
    if (index === 0) {
      setActiveChatRank({ ...rankValue, index: index });
    }
  }, []);

  const handleClickActiveChatRank = () => {
    setActiveChatRank({ ...rankValue, index: index });
  };

  return (
    <S.StyledAnswerRank isActive={isActive} onClick={handleClickActiveChatRank}>
      <S.AnswerTop>
        <S.AnswerRankChip label={`${index + 1} 순위`} size="small" color="primary" variant="outlined" />
      </S.AnswerTop>

      <S.AnswerText>{text}</S.AnswerText>
    </S.StyledAnswerRank>
  );
};

export default AnswerRank;
