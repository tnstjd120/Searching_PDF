import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { CardHeader, Typography } from '@mui/material';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import CircularProgressWithLabel from '@/components/common/Progress/CircularProgressWithLabel';
import * as S from './SearchPdfViewer.styled';
import { useActiveChatRank } from '@/store/useChatStore';
import { useEffect } from 'react';

const SearchPdfViewer = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel, jumpToPage, NumberOfPages, GoToNextPageButton, GoToPreviousPageButton } =
    pageNavigationPluginInstance;

  const activeChatRank = useActiveChatRank();

  useEffect(() => {
    if (activeChatRank?.page) jumpToPage(activeChatRank?.page);
  }, [activeChatRank]);

  return (
    <S.SearchPdfCard>
      <CardHeader
        title="본문 내용"
        action={
          <S.ActionLayout>
            {activeChatRank?.pdfPath && (
              <>
                <S.PaginationLayout>
                  <Typography component="span" fontWeight="bold">
                    <CurrentPageLabel />
                  </Typography>
                  <span className="slash">/</span>
                  <Typography component="span" fontWeight="300">
                    <NumberOfPages />
                  </Typography>
                </S.PaginationLayout>

                <S.ButtonLayout>
                  <GoToPreviousPageButton />
                  <GoToNextPageButton />
                </S.ButtonLayout>
              </>
            )}
          </S.ActionLayout>
        }
      />
      {activeChatRank?.pdfPath ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`${import.meta.env.VITE_APP_BASE_STORAGE_URL}${activeChatRank.pdfPath}`}
            renderLoader={(percentages: number) => <CircularProgressWithLabel value={percentages} />}
            defaultScale={SpecialZoomLevel.PageWidth}
            plugins={[pageNavigationPluginInstance]}
            initialPage={activeChatRank?.page}
          />
        </Worker>
      ) : (
        <S.CenterBox>
          <Typography variant="caption" color="grey">
            참조 PDF가 없습니다.
          </Typography>
        </S.CenterBox>
      )}
    </S.SearchPdfCard>
  );
};

export default SearchPdfViewer;
