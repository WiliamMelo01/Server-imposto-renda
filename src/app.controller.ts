import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CalcularImpostoDto } from './dtos/calcularImposto.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  calcularImposto(@Body() body: CalcularImpostoDto) {
    return this.appService.calcularImposto(body);
  }
}
