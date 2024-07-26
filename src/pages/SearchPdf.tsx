import Chat from '@/components/Chat/Chat';
import SearchPdfViewer from '@/components/searchPdf/SearchPdfViewer/SearchPdfViewer';
import SearchResult from '@/components/searchPdf/SearchResult/SearchResult';
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
    padding: 1px;
    /* padding: 10px; */
  }
`;

const StyledSearchPdf = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

const StyledReflexSplitter = styled(ReflexSplitter)`
  width: 8px !important;
  height: calc(100% - 4px) !important;
  border-radius: 2px;
  border: 0 !important;
  margin-top: 2px;
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
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    transform: scaleX(1.1) !important;
    border: 0 !important;

    &::before,
    &::after {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
