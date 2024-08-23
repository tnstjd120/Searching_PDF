import { Box, styled } from '@mui/material';
import { keyframes } from '@mui/system';

const DotLoader = () => {
  return (
    <StyledDotLoader>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <AnimationDot key={i} animationDelay={`0.${i * 2}s`} />
        ))}
    </StyledDotLoader>
  );
};

export default DotLoader;

const StyledDotLoader = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;
`;

const blink = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const AnimationDot = styled(Box, { shouldForwardProp: (props) => props !== 'animationDelay' })<{
  animationDelay?: string;
}>`
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: 1px;
  animation: ${blink} 1.4s infinite ease-in-out both;
  animation-delay: ${({ animationDelay }) => animationDelay || 0};
`;
