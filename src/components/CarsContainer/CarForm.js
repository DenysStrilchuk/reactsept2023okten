import {useForm} from "react-hook-form";

const CarForm = () => {
    const {reset, register, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: 'all'
    });

    const save = (car)  => {
        console.log(car);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};