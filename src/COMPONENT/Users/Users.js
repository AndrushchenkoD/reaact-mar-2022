import {useForm} from 'react-hook-form';

import {createUsers} from '../Services/Users.api.service'

const Users = () => {
const {register,handleSubmit,formState:{errors}}=useForm(
    {
        defaultValues:{
            name:'name',
            username:'username',
            email:'email@gmail.com'
        }
    }
);

const submit=(obj) => {
createUsers(obj).then(result=>console.log(result))
};
return(
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text"{...register('name')}/>
            {
                errors.name && <span>Field is required</span>
            }
            <input type="text"{...register('username')}/>
            <input type="text"{...register('email')}/>
            <input type="submit"/>
        </form>
    </div>
)
}
export {Users}
