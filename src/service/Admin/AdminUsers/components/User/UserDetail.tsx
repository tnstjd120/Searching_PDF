import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import UserMessagesPanel from './UserMessagesPanel';
import UserFeedbackPanel from './UserFeedbackPanel';

const UserDetail = () => {
  const [value, setValue] = useState(0);

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChangeTab}>
          <Tab label="메시지" />
          <Tab label="피드백" />
        </Tabs>
      </Box>

      <Box sx={{ height: 'calc(100% - 48px)', overflow: 'auto' }}>
        <UserMessagesPanel value={value} index={0} />
        <UserFeedbackPanel value={value} index={1} />
      </Box>
    </Box>
  );
};

export default UserDetail;
