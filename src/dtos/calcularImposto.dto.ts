import { IsString, IsNumber } from 'class-validator';

export class CalcularImpostoDto {
  @IsString()
  nome: string;

  @IsNumber()
  rendimentos: number;

  @IsNumber()
  cpf: number;
}
