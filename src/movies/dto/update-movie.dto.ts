import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto{
//   @IsString() // validate 데코레이터
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

// 위와 같은 코드를 mapped-types
// PartialType을 사용하여 dto extends
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
