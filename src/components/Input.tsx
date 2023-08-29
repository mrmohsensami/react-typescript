import { useEffect, useRef } from 'react';

type InputProps = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    });
    return <input ref={inputRef} type="text" value={value} onChange={handleChange} />;
};

export default Input;
