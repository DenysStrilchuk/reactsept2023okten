import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate, carForDelete, setCarForDelete}) => {
    const {reset, register, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    useEffect(() => {
        if (carForDelete) {
            carsService.deleteById(carForDelete.id).then(() => {
                setTrigger(prev => !prev);
                setCarForDelete(null);
            })
        }
    }, [carForDelete]);

    const save = async (car)  => {
        await carsService.create(car)
        setTrigger(prev=>!prev);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message:'min 1 max 2 characters'
                    }
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value:0, message: 'min 0'},
                    max: {value:1_000_000, message: 'max 1 000 000'}
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {value:1990, message: 'min 1990'},
                    max: {value:new Date().getFullYear(), message:'max current year'}
                })}/>
                <button disabled={!isValid}>save</button>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};