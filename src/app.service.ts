import { Injectable } from '@nestjs/common';
import { calculaAliquota } from './utils/calculaAliquota';
import { calculaParcela } from './utils/calculaParcela';
import { formataNumeroParaBRL } from './utils/formataNumeroParaBRL';
import { CalcularImpostoDto } from './dtos/calcularImposto.dto';

@Injectable()
export class AppService {
  calcularImposto({ cpf, nome, rendimentos }: CalcularImpostoDto) {
    const aliquota = calculaAliquota(Number(rendimentos));
    const parcela = Number(calculaParcela(Number(rendimentos), aliquota));
    return {
      cpf,
      nome,
      aliquota: aliquota + '%',
      parcela: formataNumeroParaBRL(parcela),
      rendimentos: formataNumeroParaBRL(Number(rendimentos)),
    };
  }
}
