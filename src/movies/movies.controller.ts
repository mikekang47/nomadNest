import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { MoviesService } from "./movies.service";
import { MovieRequestData } from "./dto/movieRequest.dto";
import { Movie } from "./entities/movie.entity";
import { ParseIntPipe } from "@nestjs/common";


@Controller("/movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {
  }

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get("/:id")
  detail(@Param("id", ParseIntPipe) id: number): Movie {
    console.log(typeof id)
    return this.moviesService.getOne(id);
  }

  @Post()
  createMovie(@Body() movieData: MovieRequestData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete("/:id")
  @HttpCode(204)
  deleteMovie(@Param("id", ParseIntPipe) id: number): void {
    this.moviesService.deleteMovie(id);
  }

  @Put("/:id")
  updateMovie(@Param("id", ParseIntPipe) id: number, @Body() updateData: MovieRequestData): Movie {
    return this.moviesService.updateMovie(id, updateData);
  }
}
