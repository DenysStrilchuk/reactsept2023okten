import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { characterService } from "../../services";
import { Character } from "./Character";
import { charactersActions } from "../../store/slices/charactersSlice";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const { id } = useParams();

    useEffect(() => {
        characterService.getById(id).then(({ data }) => {
            dispatch(charactersActions.setResponse({ results: data }));
        });
    }, [id, dispatch]);


    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export { Characters };