import { useQuery } from '@tanstack/react-query';
import { getFeedback } from '../api/get';
import { IFeedbackResponse } from '@/types/Feedback';

const useGetFeedback = (numberPerPage: number, pageNumber: number) =>
  useQuery<{ feedbackList: IFeedbackResponse[]; totalCount: number }>({
    queryKey: ['getFeedback', numberPerPage, pageNumber],
    queryFn: () => getFeedback({ numberPerPage, pageNumber }),
  });

export default useGetFeedback;
