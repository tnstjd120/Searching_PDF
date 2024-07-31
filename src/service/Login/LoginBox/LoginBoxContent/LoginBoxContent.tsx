import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import * as S from './LoginBoxContent.styled';
import { api } from '@/api/axios';
import { API_PATH } from '@/api/API_PATH';

interface ILoginForm {
  userId: string;
  userPassword: string;
}

const LoginBoxContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      userId: '',
      userPassword: '',
    },
  });

  const onSubmit = async (data: ILoginForm) => {
    try {
      const response = await api.post(API_PATH.LOGIN, data);
      console.log(response);
    } catch (error) {
      throw new Error('Login Error');
    }

    console.log('formData: ', data);
  };

  return (
    <S.StyledLoginBoxContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.StyledLoginInput
          fullWidth
          placeholder="아이디를 입력해주세요."
          {...register('userId', { required: '아이디를 입력해주세요.' })}
        />
        {errors.userId && (
          <Typography variant="caption" color="error">
            {errors.userId.message}
          </Typography>
        )}

        <S.StyledLoginInput
          fullWidth
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register('userPassword', { required: '비밀번호를 입력해주세요.' })}
        />
        {errors.userPassword && (
          <Typography variant="caption" color="error">
            {errors.userPassword.message}
          </Typography>
        )}

        <S.StyledLoginButton type="submit" fullWidth variant="contained">
          로그인
        </S.StyledLoginButton>

        <S.StyledLoginBottomMenu>
          <div>
            <Typography variant="caption" component="a" href="/">
              회원가입
            </Typography>
          </div>

          <div>
            <Typography variant="caption" component="a" href="/">
              계정 찾기
            </Typography>
            &nbsp;&nbsp;&nbsp;
            <Typography variant="caption" component="a" href="/">
              비밀번호 찾기
            </Typography>
          </div>
        </S.StyledLoginBottomMenu>
      </form>
    </S.StyledLoginBoxContent>
  );
};

export default LoginBoxContent;
