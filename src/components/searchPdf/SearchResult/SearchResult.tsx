import { CardHeader } from '@mui/material';
import * as S from './SearchResult.styled';

const SearchResult = () => {
  return (
    <S.SearchResultCard>
      <CardHeader title="검색 결과물" />
    </S.SearchResultCard>
  );
};

export default SearchResult;
