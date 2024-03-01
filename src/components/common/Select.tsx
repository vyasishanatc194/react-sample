import {
    ForwardRefRenderFunction,
    SelectHTMLAttributes,
    forwardRef,
    useId,
} from 'react';

// Type
import { Option } from '../../types/option';


interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: Option[];
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, ISelectProps> = (
    { label, className = '', options = [], ...props },
    ref
) => {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="">
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default forwardRef(Select);
