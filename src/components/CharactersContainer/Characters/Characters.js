import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {charactersActions} from "../../../store";
import {Character} from "../Character";


const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const { id } = useParams();

    useEffect(() => {
        dispatch(charactersActions.getById({id}))
    }, [id, dispatch]);


    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export { Characters };