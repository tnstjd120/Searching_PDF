import { Box, Table, TablePagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import FeedbackBody from './FeedbackTableBody';
import FeedbackBodyWithSkeleton from './FeedbackTableBodyWithSkeleton';
import FeedbackHead from './FeedbackTableHead';
import useGetFeedback from '../../hooks/useGetFeedback';

const FeedbackTable = () => {
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, error, refetch } = useGetFeedback(numberPerPage, pageNumber + 1);

  if (error) enqueueSnackbar('피드백 데이터를 불러오는데 실패했습니다.', { variant: 'error' });

  const handleChagePage = (_event: unknown, newPage: number) => {
    setPageNumber(newPage);
  };

  const handleChangeNumberPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberPerPage(parseInt(event.target.value, 10));
    setPageNumber(0);
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      <Table stickyHeader>
        <FeedbackHead />

        {isLoading ? <FeedbackBodyWithSkeleton /> : <FeedbackBody data={data?.feedbackList ?? []} refetch={refetch} />}
      </Table>

      {data && (
        <TablePagination
          component="div"
          count={data?.totalCount ?? 0}
          onPageChange={handleChagePage}
          page={pageNumber}
          rowsPerPage={numberPerPage}
          onRowsPerPageChange={handleChangeNumberPerPage}
        />
      )}
    </Box>
  );
};

export default FeedbackTable;
