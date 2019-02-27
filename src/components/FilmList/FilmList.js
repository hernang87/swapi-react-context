import React from 'react';
import { FilmConsumer } from '../../contexts/FilmContext';
import FilmListItem from '../FilmListItem/FilmListItem';

class FilmList extends React.Component {
  renderFilms(films) {
    const elements = films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => <FilmListItem key={film.episode_id} {...film} />);
    return elements;
  }
  
  render() {
  return (
    <FilmConsumer>
      { this.renderFilms }
    </FilmConsumer>            
    );
  }
}
  
export default FilmList;