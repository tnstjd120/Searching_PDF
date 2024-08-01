import * as S from './LoginBoxFooter.styled';

interface ILoginBoxFooter {
  children: React.ReactNode;
}

const LoginBoxFooter = ({ children }: ILoginBoxFooter) => {
  return <S.StyledLoginBoxFooter>{children}</S.StyledLoginBoxFooter>;
};

export default LoginBoxFooter;
