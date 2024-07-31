import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { CardHeader, Typography } from '@mui/material';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import CircularProgressWithLabel from '@/components/common/Progress/CircularProgressWithLabel';
import PdfFile from '@/assets/test_pdf.pdf';
import * as S from './SearchPdfViewer.styled';

const SearchPdfViewer = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel, NumberOfPages, GoToNextPageButton, GoToPreviousPageButton } = pageNavigationPluginInstance;

  return (
    <S.SearchPdfCard>
      <CardHeader
        title="본문 내용"
        action={
          <S.ActionLayout>
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
          </S.ActionLayout>
        }
      />

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={PdfFile}
          renderLoader={(percentages: number) => <CircularProgressWithLabel value={percentages} />}
          defaultScale={SpecialZoomLevel.PageWidth}
          plugins={[pageNavigationPluginInstance]}
        />
      </Worker>
    </S.SearchPdfCard>
  );
};

export default SearchPdfViewer;
