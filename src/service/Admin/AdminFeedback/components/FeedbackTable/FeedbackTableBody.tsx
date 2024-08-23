import FeedbackModal from '@/service/Admin/AdminUsers/components/User/FeedbackModal';
import usePatchFeedback from '@/service/Admin/AdminUsers/hooks/usePatchFeedback';
import { IFeedbackResponse } from '@/types/Feedback';
import { Box, TableBody, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

interface IFeedbackBody {
  data?: IFeedbackResponse[];
  refetch: () => void;
}

const FeedbackBody = ({ data, refetch }: IFeedbackBody) => {
  if (!data) return <TableBody></TableBody>;

  const [currentFeedbackId, setCurrentFeedbackId] = useState<string | number | null>(null);

  const handleOpenModal = (feedbackId: string | number) => setCurrentFeedbackId(feedbackId);
  const handleCloseModal = () => setCurrentFeedbackId(null);

  const { mutate } = usePatchFeedback();

  const handleClickFeedback = (feedbackId: string | number) => {
    mutate(feedbackId, {
      onSuccess: () => {
        refetch();
        setCurrentFeedbackId(feedbackId);
        handleOpenModal(feedbackId);
      },
    });
  };

  return (
    <TableBody sx={{ backgroundColor: '#fff' }}>
      {data.map((feedback, index) => (
        <TableRow key={feedback.id} hover sx={{ cursor: 'pointer' }} onClick={() => handleClickFeedback(feedback.id)}>
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

      <FeedbackModal feedbackId={currentFeedbackId} onClose={handleCloseModal} />
    </TableBody>
  );
};

export default FeedbackBody;
