import { useChatRanks } from '@/store/useChatStore';
import * as S from './AnswerRankList.styled';
import AnswerRank from '../AnswerRank/AnswerRank';

const AnswerRankList = () => {
  const chatRank = useChatRanks();

  return (
    <S.StyledAnswerRankList>
      {chatRank && chatRank.map((rank, index) => <AnswerRank key={index} rankValue={rank} index={index} />)}
    </S.StyledAnswerRankList>
  );
};

export default AnswerRankList;
