import React from 'react';

const FilmListItem = ({ title, episode_id }) => (
    <div>
        <p>{episode_id} - {title}</p>
    </div>
)

export default FilmListItem;