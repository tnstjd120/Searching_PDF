import Chat from '@/service/Chat/Chat';
import SearchPdfViewer from '@/service/searchPdf/SearchPdfViewer/SearchPdfViewer';
import SearchResult from '@/service/searchPdf/SearchResult/SearchResult';
import { Box, styled } from '@mui/material';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';

import 'react-reflex/styles.css';

const SearchPdf = () => {
  return (
    <StyledSearchPdf>
      <Chat />

      <RightArea>
        <ReflexContainer orientation="vertical">
          <ReflexElement flex={0.5}>
            <SearchResult />
          </ReflexElement>

          <StyledReflexSplitter />

          <ReflexElement flex={0.5}>
            <SearchPdfViewer />
          </ReflexElement>
        </ReflexContainer>
      </RightArea>
    </StyledSearchPdf>
  );
};

export default SearchPdf;

const RightArea = styled(Box)`
  width: 100%;
  height: 100%;

  .reflex-element {
  }
`;

const StyledSearchPdf = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

const StyledReflexSplitter = styled(ReflexSplitter)`
  width: 6px !important;
  border-left: 0 !important;
  border-right: 0 !important;
  border-top: 1px solid #ddd !important;
  border-bottom: 1px solid #ddd !important;
  transition: 0.1s !important;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(50% - 3px);
    transform: translate(-50%, -50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
  &::after {
    top: calc(50% + 3px);
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[400]} !important;
    transform: scaleX(1.2) !important;
    border: 0 !important;

    &::before,
    &::after {
      background-color: ${({ theme }) => theme.palette.grey[700]};
    }
  }
`;
