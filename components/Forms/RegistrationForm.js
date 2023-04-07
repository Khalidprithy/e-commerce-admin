import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = ({ handleForm }) => {
    const [passwordShow, setPasswordShow] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onTouched',
    });

    return (
        <>

        </>
    );
};

export default RegistrationForm;
