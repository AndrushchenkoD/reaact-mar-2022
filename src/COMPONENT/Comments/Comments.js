import {useForm} from "react-hook-form";

import {createComments} from '../Services/index'
const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
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
                {
                    errors.name && <span>Field is required</span>
                }
                <input type="text"{...register('email')}/>
                <input type="text"{...register('body')}/>
            </form>
        </div>
    )
}
export {Comments}