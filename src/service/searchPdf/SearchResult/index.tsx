import { CardHeader } from '@mui/material';
import * as S from './SearchResult.styled';
import AnswerRankList from './AnswerRankList/AnswerRankList';

const SearchResult = () => {
  return (
    <S.SearchResultCard>
      <CardHeader title="검색 결과물" />

      <AnswerRankList />
    </S.SearchResultCard>
  );
};

export default SearchResult;
