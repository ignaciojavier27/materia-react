import useForm from "../custom_hooks/useForm"

const initialForm = {
    name: '',
    email: '',
    subject: '',
    comments: ''
};

const validationsForm = (form) => {
    let errors = {};

    if(!form.name.trim()){
        errors.name = "El campo nombre es requerido";
    }

    return errors;
};

const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm);

    return (
        <div>
            <h2>17.1 Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={form.name}
                    required
                />
                { errors.name && <p>{errors.name}</p> }
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={form.email}
                    required
                />
                { errors.email && <p>{errors.email}</p> }
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Escribe el asunto" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={form.subject}
                    required
                />
                { errors.subject && <p>{errors.subject}</p> }
                <textarea 
                    name="comments"
                    placeholder="Escribe tus comentarios"
                    cols="50"
                    rows="5"
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={form.comments}
                    required
                >
                </textarea>
                { errors.comments && <p>{errors.comments}</p> }
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default ContactForm
