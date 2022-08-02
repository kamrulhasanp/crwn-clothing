import { InputHTMLAttributes, FC } from 'react';

import { FormInputlable, Input, Group } from './form-input.styles';

type FormInputProps = {label: string} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return(
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputlable shrink={Boolean(
                    otherProps.value && 
                        typeof otherProps.value === 'string' && 
                        otherProps.value.length)}>
                    {label}
                </FormInputlable>
            )}     
        </Group>
        
    );
};

export default FormInput;