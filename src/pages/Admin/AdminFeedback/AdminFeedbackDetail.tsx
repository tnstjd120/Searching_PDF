import { useParams } from 'react-router-dom';

const AdminFeedbackDetail = () => {
  const { feedbackId } = useParams();

  return <>Feedback PK: {feedbackId}</>;
};

export default AdminFeedbackDetail;
