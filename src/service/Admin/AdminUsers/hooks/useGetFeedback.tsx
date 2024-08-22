import { useQuery } from '@tanstack/react-query';
import { getFeedbackByTarget } from '../api/get';
import { IFeedbackResponseByTarget } from '@/types/Feedback';

const useGetFeedback = (feedbackPk: string | number | null) =>
  useQuery<IFeedbackResponseByTarget>({
    queryKey: ['feedbackByTarget', feedbackPk],
    queryFn: () => {
      console.log('useGetFeedback: ', feedbackPk);
      if (feedbackPk === null) {
        return Promise.resolve([]);
      }

      return getFeedbackByTarget(feedbackPk);
    },
    enabled: !!feedbackPk,
  });

export default useGetFeedback;
