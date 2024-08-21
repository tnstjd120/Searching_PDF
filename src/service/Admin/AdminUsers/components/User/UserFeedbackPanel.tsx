import { Box, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import useGetFeedback from '../../hooks/useGetFeedback';
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import usePatchFeedback from '../../hooks/usePatchFeedback';
import FeedbackModal from './FeedbackModal';

interface IUserFeedbackPanel {
  value: number;
  index: number;
}

const UserFeedbackPanel = ({ value, index }: IUserFeedbackPanel) => {
  const theme = useTheme();

  const { userId } = useParams();
  const { data, isLoading, error, refetch } = useGetFeedback(userId ?? 0);

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

  const handleOpenModal = () => setFeedbackModalOpen(true);
  const handleCloseModal = () => setFeedbackModalOpen(false);

  if (error) enqueueSnackbar('피드백 정보를 불러오는데 실패했습니다.', { variant: 'error' });

  const { mutate } = usePatchFeedback();

  const handleClickFeedback = (feedbackId: string | number) => {
    mutate(feedbackId, {
      onSuccess: (result) => {
        console.log('읽음처리: ', result);
        refetch();
        handleOpenModal();
      },
    });
  };

  return (
    <Box component="div" hidden={value !== index}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="30px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              #
            </TableCell>
            <TableCell width="150px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              Engine Type
            </TableCell>
            <TableCell sx={{ backgroundColor: theme.palette.greyBlue[100], maxWidth: '450px' }}>Content</TableCell>
            <TableCell width="100px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              Sender
            </TableCell>
            <TableCell width="120px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              Sender At
            </TableCell>
            <TableCell width="100px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              Reader
            </TableCell>
            <TableCell width="120px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
              Reader At
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: '#fff' }}>
          {data &&
            !isLoading &&
            data.map((feedback, index) => (
              <TableRow
                key={feedback.id}
                hover
                sx={{ cursor: 'pointer' }}
                onClick={() => handleClickFeedback(feedback.id)}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{feedback.engineType}</TableCell>
                <TableCell>
                  <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '600px', whiteSpace: 'nowrap' }}>
                    {feedback.message}
                  </Box>
                </TableCell>
                <TableCell>{feedback.sender.userName}</TableCell>
                <TableCell>{feedback.createdAt.split('T')[0]}</TableCell>
                <TableCell>{feedback.isRead ? feedback.readUser.userName : '-'}</TableCell>
                <TableCell>{feedback.readAt ? feedback.readAt.split('T')[0] : '-'}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <FeedbackModal open={feedbackModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default UserFeedbackPanel;
