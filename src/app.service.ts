import { Injectable } from '@nestjs/common';
import { CalcularImpostoDto } from './dtos/calcularImposto.dto';
import { calculaAliquota } from './utils/calculaAliquota';
import { calculaParcela } from './utils/calculaParcela';
import { formataNumeroParaBRL } from './utils/formataNumeroParaBRL';

@Injectable()
export class AppService {
  calcularImposto({ cpf, nome, rendimentos }: CalcularImpostoDto) {
    const aliquota = calculaAliquota(rendimentos);
    const parcela = Number(calculaParcela(rendimentos, aliquota));
    return {
      cpf,
      nome,
      aliquota: aliquota + '%',
      parcela: formataNumeroParaBRL(parcela),
      rendimentos: formataNumeroParaBRL(rendimentos),
    };
  }
}
