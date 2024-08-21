import { Card, CardContent, CardHeader, Typography, styled } from '@mui/material';
import { BarDatum, ResponsiveBar } from '@nivo/bar';

interface ITotalChartCard {
  data: BarDatum[];
}

const TotalChartCard = ({ data }: ITotalChartCard) => {
  const colorByKey = {
    question: '#49a2fa',
    feedback: '#f46868',
  };

  return (
    <StyledCard>
      <CardHeader title={`${new Date().getMonth() + 1}월 일별 Total Q&F `} />
      <CardContent>
        <ResponsiveBar
          data={data}
          keys={['question', 'feedback']}
          indexBy="title"
          margin={{ top: 0, right: 95, bottom: 40, left: 50 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={({ id }) => colorByKey[id as keyof typeof colorByKey]}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={'white'}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={(e) => {
            return (
              <StyledChartTooltip variant="caption">
                {`${e.indexValue}일 - 총 ${e.id === 'question' ? '질문' : '피드백'}: ${e.value}개`}
              </StyledChartTooltip>
            );
          }}
        />
      </CardContent>
    </StyledCard>
  );
};

export default TotalChartCard;

const StyledCard = styled(Card)`
  background-color: #fff;
  width: 100%;
  flex: 1;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgba(210, 210, 210, 0.2), 0px 8px 10px 1px rgba(210, 210, 210, 0.14),
    0px 3px 14px 2px rgba(210, 210, 210, 0.12);

  .MuiCardHeader-content .MuiTypography-h5 {
    font-size: 0.825rem;
  }

  .MuiCardContent-root {
    width: 100%;
    height: calc(100% - 56px);
    overflow-x: auto;
    /* padding: 4px; */
  }
`;

const StyledChartTooltip = styled(Typography)(
  ({ theme }) => `
    background-color: ${theme.palette.background.paper};
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 5px 5px -3px rgba(100, 100, 100, 0.2), 0px 8px 10px 1px rgba(100, 100, 100, 0.14),
    0px 3px 14px 2px rgba(100, 100, 100, 0.12);
`,
);
