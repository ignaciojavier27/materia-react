import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };
    
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0) {
            alert("Enviando formulario");
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/nacholin124@gmail.com", {
                    body: form,
                    headers:{
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                .then(() => {
                    setLoading(false);
                    setResponse(true);
                })
        }else{
            alert("Hay errores en el formulario");
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

export default useForm;
