import MessageList from '@/service/searchPdf/Chat/components/MessageList/MessageList';
import { Box } from '@mui/material';

interface IUserMessagePanel {
  value: number;
  index: number;
}

const UserMessagesPanel = ({ value, index }: IUserMessagePanel) => {
  return (
    <Box
      component="div"
      hidden={value !== index}
      sx={{ width: '100%', maxWidth: '500px', margin: '0 auto', borderInline: '1px solid #ddd' }}
    >
      <MessageList readOnly />
    </Box>
  );
};

export default UserMessagesPanel;
