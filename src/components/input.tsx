interface Input {
    name: string;
    type: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Input> = ({ type, placeholder, name, onChange }) => {
    return <input 
                type={type} 
                className="input-bordered input w-full max-w-xs m-3" 
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                />
}

export default Input