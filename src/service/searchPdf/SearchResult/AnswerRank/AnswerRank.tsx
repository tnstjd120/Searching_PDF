import { TQuantumAnswerRank } from '@/types/Chat';
import * as S from './AnswerRank.styled';
import { useIsActive, useSetActiveChatRank } from '@/store/useChatStore';
import { Typography } from '@mui/material';

interface IAnswerRank {
  rankValue: TQuantumAnswerRank;
  index: number;
}

const AnswerRank = ({ rankValue, index }: IAnswerRank) => {
  const { text } = rankValue;

  const isActive = useIsActive(index);
  const setActiveChatRank = useSetActiveChatRank();

  const handleClickActiveChatRank = () => {
    setActiveChatRank({ ...rankValue, index: index });
  };

  const chipColors: Array<'primary' | 'success' | 'warning'> = ['primary', 'success', 'warning'];

  return (
    <S.StyledAnswerRank isActive={isActive} onClick={handleClickActiveChatRank}>
      <S.AnswerTop className="answer-top">
        <S.AnswerRankChip
          label={
            <>
              <Typography component="span" variant="caption" fontWeight="bold" fontSize="11px">
                {index + 1}
              </Typography>
              &nbsp;
              <Typography component="span" fontSize="inherit">
                순위
              </Typography>
            </>
          }
          size="small"
          color={chipColors[index]}
          variant={isActive ? 'filled' : 'outlined'}
        />
      </S.AnswerTop>
      <S.AnswerText>{text}</S.AnswerText>
    </S.StyledAnswerRank>
  );
};

export default AnswerRank;
