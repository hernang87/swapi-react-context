import React from 'react';

const FilmContext = React.createContext('films');


class FilmProvider extends React.Component {
  state = {
    films: []
  }
  
  async componentDidMount() {
    const response = await fetch('https://swapi.co/api/films/');
    const json = await response.json();
    
    this.setState({
      films: [ ...json.results ]
    });
  }
  
  render() {
    return (
      <FilmContext.Provider value={this.state.films}>
      { this.props.children }
      </FilmContext.Provider>
      )
    }
  }
  
  const FilmConsumer = FilmContext.Consumer;
  
  export {
    FilmProvider,
    FilmConsumer
  };