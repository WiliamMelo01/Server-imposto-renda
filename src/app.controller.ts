import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CalcularImpostoDto } from './dtos/calcularImposto.dto';
import { log } from 'console';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  calcularImposto(@Query() { cpf, nome, rendimentos }: CalcularImpostoDto) {
    return this.appService.calcularImposto({ cpf, nome, rendimentos });
  }
}
