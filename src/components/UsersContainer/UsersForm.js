import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UsersForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm();

    const save  = (user) => {
        userService.create(user).then(({data}) => setUsers(prev => [...prev, data]));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                <input type="text" placeholder={'website'} {...register('website')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {UsersForm};