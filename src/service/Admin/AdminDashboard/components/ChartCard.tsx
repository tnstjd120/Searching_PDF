import { Card, CardContent, CardHeader, Typography, styled } from '@mui/material';

const ChartCard = () => {
  return (
    <StyledCard>
      <CardHeader subheader="당월 Q&F" />
      <CardContent>Charts</CardContent>
    </StyledCard>
  );
};

export default ChartCard;

const StyledCard = styled(Card)`
  background-color: #fff;
  width: 100%;
  flex: 1;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgba(210, 210, 210, 0.2), 0px 8px 10px 1px rgba(210, 210, 210, 0.14),
    0px 3px 14px 2px rgba(210, 210, 210, 0.12);
`;
