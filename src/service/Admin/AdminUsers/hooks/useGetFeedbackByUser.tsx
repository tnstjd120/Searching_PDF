import { useQuery } from '@tanstack/react-query';
import { getFeedbackByUser } from '../api/get';
import { IFeedbackResponse } from '@/types/Feedback';

const useGetFeedbackByUser = (userPk: string | number) =>
  useQuery<IFeedbackResponse[]>({
    queryKey: ['feedbackByUser', userPk],
    queryFn: () => getFeedbackByUser(userPk),
  });

export default useGetFeedbackByUser;
