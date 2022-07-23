import {useForm} from "react-hook-form";

import {createComments} from '../Services/index'
const Comments = () => {

    const {register, handleSubmit} = useForm(
        {
            defaultValues: {
                name: 'name',
                email: 'email@gmail.com',
                body: 'body txt'
            }
        }
    );

    const submit = (obj) => {
createComments(obj).then(result=>console.log(result))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"{...register('name')}/>
                <input type="text"{...register('email')}/>
                <input type="text"{...register('body')}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export {Comments}