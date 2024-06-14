import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {

@ApiProperty()
model:      String;
@ApiProperty()
year:      number;
@ApiProperty()
  price:    number;
  @ApiProperty()
  createdAt:  String

}
