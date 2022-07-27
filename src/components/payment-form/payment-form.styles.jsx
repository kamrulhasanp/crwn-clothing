import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const FormContainer = styled.form`
    height: 100px;
    min-height: 500px;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`;