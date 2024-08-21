import { useMutation } from '@tanstack/react-query';
import { patchFeedback } from '../api/patch';

const usePatchFeedback = () =>
  useMutation({
    mutationFn: patchFeedback,
    onSuccess: (data) => {
      console.log('usePatchFeedback Success: ', data);
    },
    onError: (error) => {
      console.error('usePatchFeedback Error: ', error);
    },
  });

export default usePatchFeedback;
