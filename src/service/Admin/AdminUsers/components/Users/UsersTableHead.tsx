import { TableCell, TableHead, TableRow, styled } from '@mui/material';

const UsersTableHead = () => {
  return (
    <StyledTableHead>
      <TableRow>
        <TableCell width="30px">#</TableCell>
        <TableCell width="120px">이름</TableCell>
        <TableCell width="200px">아이디</TableCell>
        <TableCell>이메일</TableCell>
        <TableCell width="100px">권한</TableCell>
        <TableCell width="150px">가입일자</TableCell>
      </TableRow>
    </StyledTableHead>
  );
};

export default UsersTableHead;

const StyledTableHead = styled(TableHead)(
  ({ theme }) => `
    .MuiTableCell-stickyHeader {
        background-color: ${theme.palette.greyBlue[100]};
    }
`,
);
