import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";

export default function Input({id, value, label, type, className, onChange, errorMessage, ...props}) {
    return (
        <>
            <div className={'flex flex-col justify-center items-center px-8 py-8'}>
                <InputLabel htmlFor={id} value={label}/>

                <TextInput
                    id={id}
                    type={type}
                    className={"mt-1" + className}
                    value={value}
                    onChange={onChange}
                    {...props}
                />

                <InputError className="mt-2" message={errorMessage}/>
            </div>
        </>
    );
}
