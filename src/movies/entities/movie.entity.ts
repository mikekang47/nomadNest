import { MovieRequestData } from "../dto/movieRequest.dto";
import { Expose } from "class-transformer";

export class Movie {
  private readonly _id: number;

  private  _title: string;

  private  _year: number;

  @Expose()
  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }

  updateMovie(updateData: MovieRequestData) {
    this._title = updateData.title;
    this._year = updateData.year;
  }
  constructor(id: number, title: string, year: number) {
    this._id = id;
    this._title = title;
    this._year = year;
  }
}