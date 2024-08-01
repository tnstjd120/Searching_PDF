import { useForm } from 'react-hook-form';
import { Input, Typography } from '@mui/material';
import * as S from './LoginBoxContent.styled';
import { api } from '@/api/axios';
import { API_PATH } from '@/api/API_PATH';
import axios from 'axios';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import useUserStore, { IUseUserState } from '@/store/useUserStore';

interface ILoginForm {
  userId: string;
  userPassword: string;
}

const LoginBoxContent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const updateUser = useUserStore(({ action }) => action.updateUser);

  const {
    register,
    handleSubmit,
    setError,
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
      setIsLoading(true);
      const response = await api.post(API_PATH.LOGIN, data);

      if (response.data.success) {
        const token = response.data.token;
        const { userId, userName, userRole } = jwtDecode<IUseUserState>(token);

        sessionStorage.setItem('token', token);
        updateUser({ userId, userName, userRole });

        navigate('/', { replace: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        setError('root', { message: message || '로그인에 실패했습니다.' });
      } else {
        setError('root', { message: '로그인에 실패했습니다.' });
      }

      throw new Error(`Login Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.LoginBoxContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInputGroup>
          <Input
            fullWidth
            placeholder="아이디를 입력해주세요."
            {...register('userId', { required: '아이디를 입력해주세요.' })}
          />
          <S.HelperText variant="caption" color="error">
            {errors.userId?.message}
          </S.HelperText>
        </S.LoginInputGroup>

        <S.LoginInputGroup>
          <Input
            fullWidth
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('userPassword', { required: '비밀번호를 입력해주세요.' })}
          />
          <S.HelperText variant="caption" color="error">
            {errors.userPassword?.message}
          </S.HelperText>
        </S.LoginInputGroup>

        <S.LoginButton type="submit" fullWidth variant="contained">
          로그인
        </S.LoginButton>

        <S.LoginBottomMenu>
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
        </S.LoginBottomMenu>
      </form>

      <S.HelperText variant="caption" color="error" textAlign="center" pt="10px">
        {errors.root?.message}
      </S.HelperText>

      {isLoading && <CircularProgressWithBlur scope="global" />}
    </S.LoginBoxContent>
  );
};

export default LoginBoxContent;
