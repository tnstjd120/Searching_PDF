import { useMutation } from '@tanstack/react-query';
import { patchFeedback } from '../api/patch';

const usePatchFeedback = () =>
  useMutation({
    mutationFn: patchFeedback,
  });

export default usePatchFeedback;
