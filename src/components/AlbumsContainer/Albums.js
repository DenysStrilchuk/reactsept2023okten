import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAllAlbums().then(({data}) => setAlbums(data));
    }, []);
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};