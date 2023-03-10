import { StyledInput } from "./styles";
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface iInputProps {
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    type: string;
    error: FieldError | undefined;
  }

export const GeneralInput = ({ placeholder, register, type, error }: iInputProps) => {

    return(
        <>
            <StyledInput placeholder={placeholder} {...register} type={type}/>
        {error && (
            <p color="red">{error.message}</p>
          )}
        </>
    )
}