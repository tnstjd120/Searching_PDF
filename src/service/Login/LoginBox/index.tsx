import * as S from './LoginBox.styled';
import LoginBoxContent from './LoginBoxContent/LoginBoxContent';
import LoginBoxFooter from './LoginBoxFooter/LoginBoxFooter';
import LoginBoxHeader from './LoginBoxHeader/LoginBoxHeader';

interface ILoginBox {
  children: React.ReactNode;
}

const LoginBox = ({ children }: ILoginBox) => {
  return <S.StyledLoginBoxContainer>{children}</S.StyledLoginBoxContainer>;
};

export default Object.assign(LoginBox, {
  Header: LoginBoxHeader,
  Content: LoginBoxContent,
  Footer: LoginBoxFooter,
});
