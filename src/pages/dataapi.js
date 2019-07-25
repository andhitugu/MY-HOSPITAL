import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import MediaCard from './cardfilm'

class DataAPI extends React.Component {
  state = {
    movies: []
  };

  getMovies = () => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    axios
      .get(
        // API dari luar
        "https://api.themoviedb.org/3/movie/now_playing?api_key=95505221523326a53dc7a80dd32760d6&language=en-US&page=1"
      )
      //parameter response
      .then(response => {
        // script JS melakukan respone data yang ditampung di const movie
        const movie = response.data.results.map(film => {
          return {
            id: film.id,
            judul: film.title,
            poster: IMAGE_URL + film.poster_path,
            rilis: film.release_date,
            prolog: film.overview
          };
        });
        //menambahkan data dari respone data ke state movies
        this.setState({
          movies: movie
        });
      })
      //menampilkan kalau ada error
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div>
         <Grid container spacing={2}>
        {/* menampilkan data dari state dengan method 'map' / looping dari JS */}
        {this.state.movies.map(datafilm => {
          return (
             <Grid item xs={10}>
            <MediaCard
               judul    = {datafilm.judul}
               poster   = {datafilm.poster}
               prolog   = {datafilm.prolog}
               rilis    = {datafilm.rilis} 
                //   <p> {datafilm.prolog} </p>
                />
              </Grid>   
            // <div>
            //   <p> {datafilm.id} </p>
            //   <p> {datafilm.judul} </p>
            //   <img src={datafilm.poster} />
            //   <p> {datafilm.rilis} </p>
            //   <p> {datafilm.prolog} </p>
            // </div>
          );
        })}
        </Grid> 
      </div>
    );
  }
}

export default DataAPI;