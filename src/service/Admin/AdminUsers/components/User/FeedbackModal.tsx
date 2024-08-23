import { Box, IconButton, Modal, Stack, Typography, styled } from '@mui/material';
import { Fragment, useEffect } from 'react';
import useGetFeedbackByTarget from '../../hooks/useGetFeedbackByTarget';
import { enqueueSnackbar } from 'notistack';
import { CloseOutlined } from '@mui/icons-material';

interface IFeedbackModal {
  feedbackId: string | number | null;
  onClose: () => void;
}

const FeedbackModal = ({ feedbackId, onClose }: IFeedbackModal) => {
  const { data, error, refetch } = useGetFeedbackByTarget(feedbackId);

  useEffect(() => {
    if (feedbackId) refetch();
  }, [feedbackId, open, refetch]);

  if (error) enqueueSnackbar('피드백 정보를 불러오는데 실패했습니다.', { variant: 'error' });

  const question = data?.question ?? '질문 내용이 없습니다.';
  const answer = data?.answer ?? '답변 내용이 없습니다.';
  const feedback = data?.feedback ?? '피드백 내용이 없습니다.';

  return (
    <div>
      <Modal open={!!feedbackId} onClose={onClose}>
        <StyledModalContent>
          <Typography
            variant="h6"
            component="h5"
            borderBottom="1px solid #ddd"
            sx={{ paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span>피드백 정보</span>

            <IconButton onClick={onClose}>
              <CloseOutlined />
            </IconButton>
          </Typography>

          <Box>
            <Stack gap="10px">
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBlock: '20px' }}>
                <Typography variant="subtitle1">질문 내용</Typography>
                <Typography component="p" variant="caption">
                  {typeof question === 'object' ? question?.message : question}
                </Typography>
              </Box>

              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
                <Typography variant="subtitle1">
                  답변 내용 &nbsp;
                  {typeof answer === 'object' && (
                    <Typography variant="caption" color="primary">
                      ({answer.engineType})
                    </Typography>
                  )}
                </Typography>

                {typeof answer === 'object' ? (
                  answer.message.map((msg, i) => (
                    <Fragment key={i}>
                      {msg.type === 'text' ? (
                        <StyledMessage>
                          <Typography component="p" variant="caption">
                            {msg.value}
                          </Typography>
                        </StyledMessage>
                      ) : (
                        <StyledMessage>
                          <img src={`/storage${msg.value}`} />
                        </StyledMessage>
                      )}
                    </Fragment>
                  ))
                ) : (
                  <Typography component="p" variant="caption">
                    {answer}
                  </Typography>
                )}
              </Box>

              <StyledFeedbackBox>
                <Typography component="h6" variant="subtitle1">
                  피드백 내용
                </Typography>
                <Typography component="p" variant="caption" sx={{ padding: '12px 12px 24px' }}>
                  {typeof feedback === 'object' ? feedback?.message : feedback}
                </Typography>

                {typeof feedback === 'object' && (
                  <Box sx={{ fontSize: '0.725rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="caption" color="grey">
                      Sender: {feedback.sender.userName}
                    </Typography>
                    <Typography variant="caption" color="grey">
                      Send At: {feedback.createdAt.split('T')[0]}
                    </Typography>
                  </Box>
                )}
              </StyledFeedbackBox>
            </Stack>
          </Box>
        </StyledModalContent>
      </Modal>
    </div>
  );
};

export default FeedbackModal;

const StyledModalContent = styled(Stack)(
  ({ theme }) => `
    background-color: ${theme.palette.background.paper};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: auto;
    max-width: 500px;
`,
);

const StyledMessage = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.background.paper};
    width: 100%;
    max-width: calc(100% - 100px);
    border-radius: 8px;
    padding: 8px 12px;
    position: relative;
    word-break: break-word;
    white-space: pre-wrap;
    unicode-bidi: isolate;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    background-color: ${theme.palette.background.paper};
    border-color: ${theme.palette.background.paper}; 
    margin-top: 8px;
`,
);

const StyledFeedbackBox = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.greyBlue[200]};
  padding: 10px;

  h6 {
    text-align: center;
  }
`,
);
