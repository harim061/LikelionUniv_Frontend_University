import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 1200px;
    margin: 0 auto;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: 100px 0 40px 0;
`;

export const Divider = styled.div`
    height: 2px;
    background-color: var(--Grey-400, #dcdfe3);
    width: 100%;
    margin-top: 20px;
`;

export const PageWrapper = styled.div`
    margin: 64px 0 100px 0;
    border: 1;
`;
