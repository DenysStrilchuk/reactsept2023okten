const LaunchComponent = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    const mission_patch_small = links.mission_patch_small;
    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {LaunchComponent};