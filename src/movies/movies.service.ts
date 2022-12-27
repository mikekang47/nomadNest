import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";
import { MovieRequestData } from "./dto/movieRequest.dto";

@Injectable()
export class MoviesService {
  private idx: number = 1;
  private movies: Array<Movie> = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.getMovie(id);
  }

  createMovie(movieData: MovieRequestData): Movie {
    const movie: Movie = new Movie(this.idx, movieData.title, movieData.year);
    this.idx += 1;
    this.movies.push(movie);
    return movie;
  }

  updateMovie(id: number, updateData: MovieRequestData): Movie {
    const movie = this.getMovie(id);
    movie.updateMovie(updateData);
    return movie;
  }

  deleteMovie(id: number): void {
    this.movies.filter(movie => movie.id !== id);
  }

  private getMovie(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if(!movie) {
      throw new NotFoundException("Movie Not found(Id: " + id +")");
    }
    return movie;
  }
}
