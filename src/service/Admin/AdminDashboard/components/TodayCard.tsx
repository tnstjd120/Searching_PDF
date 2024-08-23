import { Card, CardContent, Typography, styled } from '@mui/material';

interface ITodayCard {
  title: string | number;
  caption: string;
  bgColor?: string;
  textColor?: string;
}

const TodayCard = ({ title, caption, ...restStyles }: ITodayCard) => {
  return (
    <StyledCard {...restStyles}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography component="h6" variant="body2">
          {caption}
          <Typography fontSize="10px" color="#999">
            (당일)
          </Typography>
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TodayCard;

const StyledCard = styled(Card, { shouldForwardProp: (props) => props !== 'bgColor' && props !== 'textColor' })<{
  bgColor?: string;
  textColor?: string;
}>(
  ({ bgColor, textColor }) => `
background-color: ${bgColor || '#fff'};
min-width: 150px;
text-align: center;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0px 5px 5px -3px rgba(210, 210, 210, 0.2), 0px 8px 10px 1px rgba(210, 210, 210, 0.14),
  0px 3px 14px 2px rgba(210, 210, 210, 0.12);

  .MuiTypography-h5 {
    color: ${textColor || '#333'};

  }
`,
);
