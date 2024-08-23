import { TableCell, TableHead, TableRow, styled, useTheme } from '@mui/material';

const FeedbackHead = () => {
  const theme = useTheme();

  return (
    <StyledTableHead>
      <TableRow>
        <TableCell width="30px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          #
        </TableCell>
        <TableCell width="150px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          Engine Type
        </TableCell>
        <TableCell sx={{ backgroundColor: theme.palette.greyBlue[100], maxWidth: '450px' }}>Content</TableCell>
        <TableCell width="100px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          Sender
        </TableCell>
        <TableCell width="120px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          Send At
        </TableCell>
        <TableCell width="100px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          Reader
        </TableCell>
        <TableCell width="120px" sx={{ backgroundColor: theme.palette.greyBlue[100] }}>
          Read At
        </TableCell>
      </TableRow>
    </StyledTableHead>
  );
};

export default FeedbackHead;

const StyledTableHead = styled(TableHead)(
  ({ theme }) => `
    .MuiTableCell-stickyHeader {
        background-color: ${theme.palette.greyBlue[100]};
    }
`,
);
