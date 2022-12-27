import { IsNumber, IsString } from "class-validator";


// create-dto를 사용하고 update-dto를 사용한다면
// extends PartialType(CreateMovieDto)를 사용하면 된다.
// 그리고 필요 없는 것은 @IsOptional()을 create-dto에 추가하면 된다.
export class MovieRequestData {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;
}