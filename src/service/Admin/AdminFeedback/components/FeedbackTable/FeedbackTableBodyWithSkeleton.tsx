import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';

const FeedbackBodySkeleton = () => {
  return (
    <TableBody>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <TableRow key={i}>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
            <TableCell sx={{ padding: '4px' }}>
              <Skeleton width="100%" height="44px" />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default FeedbackBodySkeleton;
