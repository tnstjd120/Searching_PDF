import { Card, CardContent, CardHeader, Typography, styled } from '@mui/material';
import { ResponsiveLine, Serie } from '@nivo/line';

interface IAverageChartCard {
  data: Serie[];
}

const AverageChartCard = ({ data }: IAverageChartCard) => {
  return (
    <StyledCard>
      <CardHeader title={`${new Date().getMonth() + 1}월 일별 Average Q&F `} />
      <CardContent>
        <ResponsiveLine
          data={data}
          margin={{ top: 40, right: 160, bottom: 45, left: 50 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-1}
          enableTouchCrosshair={true}
          useMesh={true}
          colors={({ id }) => data.find((serie) => serie.id === id)?.color || 'black'}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </CardContent>
    </StyledCard>
  );
};

export default AverageChartCard;

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
