import { useQuery } from '@tanstack/react-query';
import { getFeedbackByTarget } from '../api/get';
import { IFeedbackResponseByTarget } from '@/types/Feedback';

const useGetFeedbackByTarget = (feedbackPk: string | number | null) =>
  useQuery<IFeedbackResponseByTarget>({
    queryKey: ['feedbackByTarget', feedbackPk],
    queryFn: () => {
      if (feedbackPk === null) {
        return Promise.resolve([]);
      }

      return getFeedbackByTarget(feedbackPk);
    },
    enabled: !!feedbackPk,
  });

export default useGetFeedbackByTarget;
