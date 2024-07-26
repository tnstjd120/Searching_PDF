import SUITE_Light from '@/assets/fonts/SUITE/SUITE-Light.ttf';
import SUITE_Medium from '@/assets/fonts/SUITE/SUITE-Medium.ttf';
import SUITE_Regular from '@/assets/fonts/SUITE/SUITE-Regular.ttf';
import SUITE_SemiBold from '@/assets/fonts/SUITE/SUITE-SemiBold.ttf';
import SUITE_Bold from '@/assets/fonts/SUITE/SUITE-Bold.ttf';

const fontFace = `
    @font-face {
        font-family: 'SUITE';
        src: url(${SUITE_Light}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'SUITE';
        src: url(${SUITE_Medium}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'SUITE';
        src: url(${SUITE_Regular}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'SUITE';
        src: url(${SUITE_SemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'SUITE';
        src: url(${SUITE_Bold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;

export default fontFace;
