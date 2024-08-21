import { useQuery } from '@tanstack/react-query';
import { getFeedbackByUser } from '../api/get';
import { IFeedbackResponse } from '@/types/Feedback';

const useGetFeedback = (userPk: string | number) =>
  useQuery<IFeedbackResponse[]>({
    queryKey: ['userFeedback', userPk],
    queryFn: () => getFeedbackByUser(userPk),
  });

export default useGetFeedback;
