import { useFetch } from "../../custom_hooks/useFetch"

const CustomHooks = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';

    const { data, isLoading, error } = useFetch(url)

    return (
    <div>
        <h2>15. CUSTOM HOOKS</h2>
        <h3>{JSON.stringify(data)}</h3>
        <h3>{JSON.stringify(isLoading)}</h3>
        <h3>{JSON.stringify(error)}</h3>
    </div>
    )
}

export default CustomHooks
