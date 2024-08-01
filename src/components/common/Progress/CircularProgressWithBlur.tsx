import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { createPortal } from 'react-dom';

interface ICircularProgressWithBlur extends CircularProgressProps {
  scope?: 'global' | 'local';
}

function CircularProgressWithBlur({ scope = 'local', ...circularProps }: ICircularProgressWithBlur) {
  if (scope === 'global') {
    return createPortal(
      <StyledCircularProgressWithBlur sx={{ position: 'fixed' }}>
        <CircularProgress {...circularProps} />
      </StyledCircularProgressWithBlur>,
      document.body,
    );
  }

  return (
    <StyledCircularProgressWithBlur>
      <CircularProgress {...circularProps} />
    </StyledCircularProgressWithBlur>
  );
}

export default CircularProgressWithBlur;

const StyledCircularProgressWithBlur = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
