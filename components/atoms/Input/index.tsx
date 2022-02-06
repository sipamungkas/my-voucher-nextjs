import { InputHTMLAttributes } from 'react';

interface InputProps {
  label: string;
}

export default function Input(
  props: InputProps & InputHTMLAttributes<HTMLInputElement>,
) {
  const { label, ...nativeProps } = props;

  return (
    <>
      <label
        htmlFor={label}
        className='form-label text-lg fw-medium color-palette-1 mb-10'
      >
        {label}
      </label>
      <input
        type='text'
        className='form-control rounded-pill text-lg'
        {...nativeProps}
      />
    </>
  );
}
