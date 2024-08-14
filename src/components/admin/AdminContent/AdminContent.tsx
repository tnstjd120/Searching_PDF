import * as S from './AdminContent.styled';

interface IAdminContent {
  children: React.ReactNode;
}

const AdminContent = ({ children }: IAdminContent) => {
  return <S.StyledAdminContent>{children}</S.StyledAdminContent>;
};

export default AdminContent;
