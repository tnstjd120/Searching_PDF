import { Box, Grid, Modal, Typography } from '@mui/material';

interface IFeedbackModal {
  open: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ open, onClose }: IFeedbackModal) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Feedback Detail
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">질문 내용</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia dolorum qui ipsum ducimus
                  corporis minus ipsam enim tempora hic magnam voluptate assumenda libero quis nostrum, nobis debitis
                  quibusdam similique.
                </Typography>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
