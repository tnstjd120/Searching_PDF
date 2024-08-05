import { Fragment } from 'react/jsx-runtime';
import useGetChatMessages from '../../hooks/useGetChatMessages';
import * as S from './MessageList.styled';
import Message from '../Message/Message';
import ProfileImage from '../ProfileImage/ProfileImage';
import CircularProgressWithBlur from '@/components/common/Progress/CircularProgressWithBlur';

const dummyList = [
  {
    question: {
      message: 'ESG가 뭐야?',
      createdAt: '2024-07-30 18:05:01',
    },
    answer: {
      message: [
        '보험회사는 개인정보를 보험사고의 처리를 위한 목적으로만 이용할 수 있습니다.\n            보험계약에 의한 의무의 이행 및 관리를 위한 판단자료로 다음과 같은 정보들을 보험계약자와 피보험자의 동의를 받아 활용하고 있습니다',
        '1. 기명피보험자의 성명, 주민등록번호 및 주소와 피보험자동차의 차량번호, 형식, 연식\n            2. 계약일시, 보험종목, 보장종목, 보험가입금액, 자기부담금 및 보험료 할인.할증에 관한 사항, 특별약관의 가입사항, 계약해지 시 그 내용 및 사유\n            3. 사고일시 또는 이자, 사고내용 및 가종 보험금의 지급내용 및 사유',
      ],
      rank: [
        {
          text: '보험회사는 개인정보를 보험사고의 처리를 위한 목적으로만 이용할 수 있습니다.\n            보험계약에 의한 의무의 이행 및 관리를 위한 판단자료로 다음과 같은 정보들을 보험계약자와 피보험자의 동의를 받아 활용하고 있습니다.\n\n            1. 기명피보험자의 성명, 주민등록번호 및 주소와 피보험자동차의 차량번호, 형식, 연식\n            2. 계약일시, 보험종목, 보장종목, 보험가입금액, 자기부담금 및 보험료 할인.할증에 관한 사항, 특별약관의 가입사항, 계약해지 시 그 내용 및 사유\n            3. 사고일시 또는 이자, 사고내용 및 가종 보험금의 지급내용 및 사유',
          page: '3',
          pdfPath: '/nfs/jy/db_group/db_gi/db_bmt/db_bmt_api/pdf/개인용자동차보험약관(공동).pdf',
        },
        {
          text: '금융소비자 보호에 관한 법률 제2조 제9호는 "전문금융소비자"에 대한 정의를 제공합니다. 전문금융소비자는 다음 조건 중 하나에 해당하는 금융소비자를 지칭합니다.\n\n            1. 국가\n            2. 한국은행\n            3. 대통령령으로 정하는 금융회사\n            4. 자본시장과 금융투자업에 관한 법률에 따른 주권상장법인 (특정 조건 하에)\n            5. 대통령령으로 정하는 기타 자',
          page: '4',
          pdfPath: '/nfs/jy/db_group/db_gi/db_bmt/db_bmt_api/pdf/개인용자동차보험약관(공동).pdf',
        },
        {
          text: 'DB손해보험은 북한을 포함하여 대한민국 안에서 생긴 사고에 대하여 보험계약자가 가입한 보장종목에 따라 보상해 드립니다.',
          page: '5',
          pdfPath: '/nfs/jy/db_group/db_gi/db_bmt/db_bmt_api/pdf/개인용자동차보험약관(공동).pdf',
        },
      ],
      createdAt: '2024-07-30 18:06:02',
    },
  },
];

const MessageList = () => {
  const { chatMessages, isLoading } = useGetChatMessages();

  return (
    <S.StyledMessageList>
      {chatMessages.map((item, i) => {
        const questionMessage = (
          <Message
            key={`question-${i}`}
            message={item.question.message}
            time={item.question.createdAt.split('T')[1]}
            isMe
          />
        );

        const answerMessages = item.answer.message.map((answerMessage, answerMessageIndex) => {
          const answerMessageTime =
            item.answer.message.length === answerMessageIndex + 1 ? item.answer.createdAt.split('T')[1] : undefined;
          return (
            <Message
              key={`answer-${answerMessageIndex}`}
              renderProfile={answerMessageIndex === 0 && <ProfileImage />}
              variant={answerMessageIndex > 0 ? 'radius' : undefined}
              message={answerMessage}
              time={answerMessageTime}
              mt={answerMessageIndex > 0 ? '8px' : undefined}
            />
          );
        });

        return (
          <Fragment key={i}>
            {questionMessage}
            {answerMessages}
          </Fragment>
        );
      })}

      {isLoading && <CircularProgressWithBlur scope="global" />}
    </S.StyledMessageList>
  );
};

export default MessageList;
