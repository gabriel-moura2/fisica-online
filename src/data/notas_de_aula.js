import * as Calorimetria01 from '../assets/calorimetria01';
import * as Calorimetria02 from '../assets/calorimetria02';
import * as Calorimetria03 from '../assets/calorimetria03';
import * as Calorimetria04 from '../assets/calorimetria04';
import * as Termodinamica01 from '../assets/termodinamica01';
import * as Termodinamica02 from '../assets/termodinamica02';
import * as Termodinamica03 from '../assets/termodinamica03';
import * as Termodinamica04 from '../assets/termodinamica04';
import * as Termodinamica05 from '../assets/termodinamica05';
import * as Dinamica02 from '../assets/dinamica02';

const notas_de_aula = [
    {
        id: 4,
        titulo: 'Aula 01',
        conteudos: [
            {
                id: 1,
                titulo: 'Caloria',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A caloria é uma unidade de energia utilizada para medir a quantidade de calor transferida de um corpo para outro.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A unidade de 1 caloria (1 cal) corresponde à quantidade de calor necessária para variar a temperatura de 1 g de água de 14,5 °C para 15,5 °C, a uma pressão atmosférica de 1 atm.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image01 },
                    {
                        tag: 'texto',
                        inner: 'É muito comum o uso da unidade kcal, onde 1 kcal = 1.000 cal.'
                    },
                    {
                        tag: 'comentario verde',
                        inner: 'A quantidade de calor trocada por um corpo é aferida em calorias (cal).'
                    }
                ]
            },
            {
                id: 2,
                titulo: 'Sinal algébrico da quantidade de calor',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Quando um corpo recebe calor de uma fonte externa, essa quantidade de calor é medida com valor positivo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'E quando um corpo cede calor para o ambiente ou outro corpo, essa quantidade de calor é medida com valor negativo.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image02 },
                    {
                        tag: 'texto',
                        inner: 'A figura abaixo ilustra uma forma comum de representar quando um corpo recebe calor do ambiente e quando o corpo cede calor para o ambiente.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image03 },
                    {
                        tag: 'comentario azul',
                        inner: 'Ao analisar o comportamento térmico de um corpo, usamos o sinal positivo para calor recebido e sinal negativo para calor cedido.'
                    }
                ]
            },
            {
                id: 3,
                titulo: 'Poder Calorífico',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'O poder calorífico de um combustível nos diz a quantidade de calor liberada na queima de 1 kg desse combustível.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A unidade do poder calorífico é kcal/kg.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image04 },
                    {
                        tag: 'texto',
                        inner: 'Por exemplo, o poder calorífico da madeira queimando nesta fogueira é de 3000 kcal/kg.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image05 },
                    {
                        tag: 'texto',
                        inner: 'Isso quer dizer que cada 1 kg de lenha queimada libera 3000 kcal para o ambiente.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Abaixo, temos uma tabela com o poder calorífico de alguns combustíveis.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image06 }
                ]
            },
            {
                id: 4,
                titulo: 'Potência Térmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A potência térmica indica a rapidez com que o calor está sendo trocada entre dois sistemas.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image07 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Na ilustração abaixo a fonte (1} tem potência térmica 80 cal/s. Isso quer dizer que esta fonte libera 80 cal a cada 1 s.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A fonte (2) tem potência térmica de 250 cal/s. E isso quer dizer que esta fonte libera 250 cal a cada 1 s.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image08 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Relação entre caloria e joule' },
                    {
                        tag: 'texto',
                        inner: 'Posteriormente veremos um experimento no qual iremos mostrar a relação entre caloria e joule. Mas já vamos adiantar que 1 cal equivale 4,18 j.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image09 },
                    {
                        tag: 'texto',
                        inner: 'Como 1 W = 1 J/s, concluímos que 1 cal/s = 4,18 W.'
                    }
                ]
            },
            {
                id: 5,
                titulo: 'Rendimento',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Quando um fonte térmica fornece calor a um corpo, nem todo calor é utilizado da forma como se deseja.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A figura abaixo mostra um fogão a lenha rudimentar. Neste exemplo, nem toda a energia liberada para cozinhar o alimento é aproveitada, pois uma grande parte da energia é perdida para o ambiente.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image10 },
                    {
                        tag: 'nota',
                        inner: '• A quantidade de energia que foi aproveitada, de acordo com os objetivos, é chamada de energia útil ou calor útil.'
                    },
                    {
                        tag: 'nota',
                        inner: '• A quantidade de energia total liberada pela fonte térmica é chamada de energia total ou calor total.'
                    },
                    {
                        tag: 'nota',
                        inner: '• O rendimento de uma fonte térmica é a razão entre a energia útil e a energia total.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image11 },
                    {
                        tag: 'texto',
                        inner: 'O rendimento não tem unidades, pois é a razão entre duas medidas de quantidade de calor.'
                    },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Exemplo:' },
                    {
                        tag: 'texto',
                        inner: 'Considere que uma fonte libera 600 kcal mas apenas 300 kcal são aproveitadas. Calcule o rendimento desta fonte.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image13 },
                    {
                        tag: 'texto',
                        inner: 'Observe que achamos um rendimento de 0,5. Porém, este resultando pode ser expressão em porcentagem, ou seja, pode ser expresso como 50%.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Na ilustração abaixo, temos uma panela em um fogão à gás, com rendimento em torno de 60% e uma panela em fogão à lenha, rústico, com rendimento abaixo de 10%.'
                    },
                    { tag: 'imagem', inner: Calorimetria01.Image12 },
                    {
                        tag: 'texto',
                        inner: 'Isso quer dizer que, no primeiro caso, 60% do calor liberado na queima do combustível é aproveitado e, no segundo caso, menos de 10 % do calor liberado é aproveitado.'
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        titulo: 'Texto 02',
        conteudos: [
            {
                id: 1,
                titulo: 'Força Peso',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A força peso é uma força gravitacional que atua sobre corpos próximos à superfície da Terra e aponta sempre para o centro da Terra.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Esta força está relacionada com o campo gravitacional (g) da Terra, que é definido como a a força gravitacional aplicada sobre cada 1 kg de massa.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image02 },
                    {
                        tag: 'texto',
                        inner: 'Consequentemente, podemos calcular o peso de um corpo como sendo o produto entre a massa de do corpo e o campo gravitacional local.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image03 },
                    {
                        tag: 'texto',
                        inner: 'O valor de "g" varia com altitude e até mesmo com as características geológicas de uma localidade. Como simplificação didática, vamos adotar que este valor é de 10 N/kg (valor aproximado).'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image04 },
                    { tag: 'linha' },
                    {
                        tag: 'titulo',
                        inner: 'Peso de um corpo na Terra e na Lua'
                    },
                    {
                        tag: 'texto',
                        inner: 'Vamos ilustrar duas situações, calculando o peso de um astronauta de massa 80 kg na Terra, onde g = 10 N/kg e na Lua, onde g = 1,6 N/kg.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image05 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Exemplo' },
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa segura um corpo de massa 50 kg, conforme ilustrado. Sabendo que o corpo está em repouso, calcule a força que a pessoa está fazendo.'
                    },
                    {
                        tag: 'nota',
                        inner: '• Importante: vamos utilizar a notação vetorial na resolução de todos os nossos exemplos e exercícios.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image06 },
                    {
                        tag: 'texto',
                        inner: 'Sabemos que a força resultante é a soma de todas as forças que atuam sobre o corpo. Vamos escrever esta expressão em notação vetorial e calcular a força que a pessoa aplica no corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image07 }
                ]
            },
            {
                id: 2,
                titulo: 'Força Normal',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra um corpo em repouso apoiado sobre uma mesma.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image08 },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, a força resultante sobre o corpo é nula e duas forças atuam sobre o corpo: a força peso, com direção vertical e sentido para baixo e a força aplicada pela mesa sobre o corpo, chamada de <b>força normal</b> (pois é sempre perpendicular ao plano da superfície de contato).'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image09 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Exemplo:' },
                    {
                        tag: 'texto',
                        inner: 'Um corpo de massa 5 kg está em repouso sobre a superfície horizontal de uma mesa. Uma pessoa aplica uma força de 30 N sobre o corpo.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image10 },
                    {
                        tag: 'texto',
                        inner: 'Calcule a força normal aplicada pela mesa sobre o corpo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'O primeiro passo é desenhar o <b>diagrama de forças</b>, que consiste em desenhar o corpo e as forças que atuam sobre ele.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image11 },
                    {
                        tag: 'texto',
                        inner: 'Em seguida, a partir do sistema de coordenadas adotado, escrevemos a expressão vetorial para o cálculo da força resultante, encontrando assim a força normal.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image12 },
                    {
                        tag: 'texto',
                        inner: 'A força normal tem a direção e sentido do eixo "y" e módulo de 80 N.'
                    }
                ]
            },
            {
                id: 3,
                titulo: 'Força de Tração',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A força de tração é aplicada sobre um corpo por meio de um cabo, uma corda ou outro elemento que esteja sendo tracionado (puxado entre suas extremidades, sendo "esticado").'
                    },
                    {
                        tag: 'texto',
                        inner: 'No exemplo abaixo, o corpo é sustentado por dois fios.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image13 },
                    {
                        tag: 'texto',
                        inner: 'Ao fazer o digrama de forças sobre o corpo desenhando as forças de atração (aplicadas por cada fio) na mesma direção dos fios.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image14 },
                    {
                        tag: 'texto',
                        inner: 'Para calcular a força resultante podemos primeiro somar as forças de tração "T1" e "T2" e em seguida somar este resultado com a força peso.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image15 },
                    {
                        tag: 'texto',
                        inner: 'Supondo que o corpo esteja em equilíbrio, a soma destas três forças é 0 N.'
                    }
                ]
            },
            {
                id: 4,
                titulo: 'Força de Atrito',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A força de atrito é uma força de interação entre duas superfícies em contato, devido à irregularidades existentes entre estas superfícies.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image16 },
                    {
                        tag: 'texto',
                        inner: 'A força de atrito entre duas superfícies em contato pode ocorrer de duas forças, apresentadas a seguir.'
                    },
                    {
                        tag: 'nota',
                        inner: 'a) Força de atrito cinético: quando ocorre <b>movimento relativo</b> entre as duas superfícies. Esta força tem sentido contrário ao movimento relativo entre as superfícies.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image17 },
                    {
                        tag: 'nota',
                        inner: 'b) Força de atrito estático: quando ocorre apenas uma <b>tendência de movimento relativo</b> entre as duas superfícies. Esta força tem sentido contrário a esta tendência de movimento relativo.'
                    },
                    { tag: 'imagem', inner: Dinamica02.Image18 },
                    {
                        tag: 'texto',
                        inner: 'Observe que, se o corpo está em repouso ou em MRU, a força resultante é nula e o módulo da força de atrito será igual ao módulo da força'
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        titulo: 'Aula 02',
        conteudos: [
            {
                id: 1,
                titulo: 'Capacidade Térmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A capacidade térmica de um corpo é a razão entre a quantidade de calor trocada pelo corpo e variação de temperatura que o corpo apresenta.'
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image01 },
                    {
                        tag: 'comentario cinza',
                        inner: 'A capacidade térmica de um corpo nos diz a quantidade de calor necessária para produzir a variação de temperatura de 1°C no corpo.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Observe que, <b>para uma mesma quantidade de calor (Q}</b>, a variação de temperatura do corpo é inversamente proporcional a sua capacidade térmica.'
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image02 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Inércia Térmica' },
                    {
                        tag: 'texto',
                        inner: 'Podemos entender a capacidade térmica de um corpo como sendo a "inércia térmica" do corpo. Ou seja, quanto maior capacidade térmica de um corpo, mais "difícil" variar sua temperatura, e quanto menor a capacidade térmica de um corpo, mais "fácil" variar sua temperatura.'
                    },
                    {
                        tag: 'comentario verde',
                        inner: 'Quanto maior a capacidade térmica de um corpo, maior a quantidade de calor necessária para provocar uma determinada variação de temperatura.'
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image03 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: '<b>Exemplo:</b> Em uma prática de laboratório um professor fornece 80 kg a uma massa de 2 kg de água, observando que a temperatura variou de 20°C para 60°C. '
                    },
                    {
                        tag: 'texto',
                        inner: 'Vamos calcular a capacidade térmica dessa massa de água.'
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image04 }
                ]
            },
            {
                id: 2,
                titulo: 'Calor Específico',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'O calor específico é uma característica de uma substância, como ferro, água, cobre, etc... '
                    },
                    {
                        tag: 'texto',
                        inner: 'Para uma determitextponada substância, o calor específico é calculado como sendo a capacidade térmica de 1 g dessa substância. '
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image05 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Efetuando as devidas manipulações algébricas, chegamos na <b>equação geral da calorimetria:</b>'
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image06 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Abaixo temos uma tabela com o calor específico de algumas substâncias. '
                    },
                    { tag: 'imagem', inner: Calorimetria02.Image07 }
                ]
            },
            {
                id: 3,
                titulo: 'Observação',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: '• Quando um corpo recebe certa quantidade calor (Q) de uma fonte externa, esse calor é escrito com sinal algébrico positivo.'
                    },
                    {
                        tag: 'texto',
                        inner: '• Quando um corpo cede certa quantidade calor (Q) para o ambiente, esse calor é escrito com sinal algébrico negativo. '
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        titulo: 'Aula 03',
        conteudos: [
            {
                id: 1,
                titulo: 'Calor Latente Específico',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: ' A figura mostra água em ebulição, mudando do estado líquido para o estado gasoso, ao receber certa quantidade de calor da fonte térmica.'
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, a temperatura da água permanece constante, pois a quantidade de calor recebida é utilizada no processo de mudança de estado físico.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Considerando a quantidade de calor <b>Q</b>,absorvida pela água, e a massa de água <b>m</b> que muda de estado, vamos definir o <b>calor latente específico</b>.'
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image02 },
                    {
                        tag: 'comentario cinza2',
                        inner: 'O calor latente específico (L) indica a quantidade de energia necessária para mudar o estado físico de 1 g da substância.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'comentario cinza',
                        inner: 'Quando uma substância muda de estado físico, sua temperatura permanece constante, pois a quantidade de calor trocada com o ambiente (recebido ou cedido} é utilizado no processo de mudança de estado físico.'
                    },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Comentário' },
                    {
                        tag: 'texto',
                        inner: 'Como a água está a uma temperatura maior que a temperatura ambiente, ela recebe calor da fonte (<b>Q<sub>f</sub></b>) mas também cede calor para o ambiente (<b>Q<sub>amb</sub></b>).'
                    },
                    {
                        tag: 'texto',
                        inner: 'No processo de ebulição, a quantidade de calor recebida pela fonte é igual à quantidade de calor cedida para o ambiente. Por este motivo, a temperatura permanece constante. '
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image03 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Tabela com o calor latente específico para algumas substâncias '
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image04 }
                ]
            },
            {
                id: 2,
                titulo: 'Exemplos',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: '<b>2.1</b> Considere 3 litros de água a 100 °C, em ebulição. Calcule a quantidade de calor necessária para fazer todo esse volume de água mudar de estado físico.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Dados: L<sub>água</sub> = 540 cal/g e d<sub>água</sub> = 1 kg/L.'
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image05 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: '<b>2.2</b> Considere 4 litros de água, inicialmente a uma temperatura de 20°C. Calcule a quantidade de calor necessária para fazer todo esse volume de água mudar de estado físico.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Dados: L<sub>água</sub> = 540 cal/g, c<sub>água</sub> = 1 cal/g°C, d<sub>água</sub> = 1 kg/L e temperatura de ebulição da água = 100 °C.'
                    },
                    {
                        tag: 'texto',
                        inner: '• A primeira etapa deste cálculo e determinar a quantidade de calor necessária para aquecer a água até sua temperatura de ebulição.'
                    },
                    {
                        tag: 'texto',
                        inner: '• A segunda etapa é calcular a quantidade de calor para vaporizar toda essa massa de água.'
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image06 }
                ]
            },
            {
                id: 3,
                titulo: 'Curvas de Aquecimento',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A figura abaixo mostra o gráfico da temperatura em função da quantidade de calor fornecida a uma determinada massa de uma substância.'
                    },
                    { tag: 'imagem', inner: Calorimetria03.Image07 },
                    {
                        tag: 'texto',
                        inner: '• Inicialmente (A) a substência está no estado líquido e é aquecido até chegar na sua temperatura de ebulição.'
                    },
                    {
                        tag: 'texto',
                        inner: '• Na parte (B) do gráfico a substância está mudando de estado físico. Observe que, nesta parte, a temperatura permanece constante.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Na parte (C) toda a massa já mudou de estado físico e volta a ter sua temperatura aumentada.'
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        titulo: 'Aula 04',
        conteudos: [
            {
                id: 1,
                titulo: 'Troca de calor sem mudança de estado físico',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A figura mostra dois corpos, A e B, no interior de um ambiente isolado termicamente do ambiente externo. Vamos considerar que os corpos trocam calor apenas entre si. '
                    },
                    { tag: 'imagem', inner: Calorimetria04.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Considerando o Princípio da Conservação da Energia, a quantidade de calor que o corpo A cede é igual à quantidade de calor que o corpo B recebe.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, a temperatura do corpo A diminui, enquanto a temperatura do corpo B aumenta.'
                    },
                    { tag: 'imagem', inner: Calorimetria04.Image02 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'O gráfico mostra o comportamento da temperatura em função do tempo, até que seja atingida a temperatura de equilíbro térmico entre os corpos.'
                    },
                    { tag: 'imagem', inner: Calorimetria04.Image03 },
                    {
                        tag: 'texto',
                        inner: 'A curva do gráfico indica que, quanto menor a diferença de temperatura entre os corpos, mais lentamente a temperatura dos corpos varia.'
                    },
                    {
                        tag: 'comentario cinza2',
                        inner: 'Concluímos que, quanto menor a diferença de temperatura entre os corpos, mais lentamente ocorre a troca de calor entre eles.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Sabemos que o corpo A recebe a mesma quantidade de calor que o corpo B cede. Contudo, o corpo A apresenta maior variação na sua temperatura.'
                    },
                    { tag: 'imagem', inner: Calorimetria04.Image04 },
                    {
                        tag: 'texto',
                        inner: 'Consequentemente, podemos afirmar que o corpo A possui <b>maior capacidade térmica</b> (apresenta menor variação de temperatura para uma mesma quantidade de calor, em comparação ao corpo B). '
                    }
                ]
            },
            {
                id: 2,
                titulo: 'Troca de calor com mudança de estado físico',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: ' Considere uma prática de laboratório na qual um "pedra" de gelo, a - 10°C, é colocada em um copo com água a 25°C.'
                    },
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da temperatura da massa de gelo e da massa de água.'
                    },
                    { tag: 'imagem', inner: Calorimetria04.Image05 },
                    {
                        tag: 'texto',
                        inner: '• Entre t0 e t1 o gelo está esquentando e a água esfriando.'
                    },
                    {
                        tag: 'texto',
                        inner: '• Entre t1 e t2 o gelo está derretendo e a água esfriando.'
                    },
                    {
                        tag: 'texto',
                        inner: '• Entre t2 e t3 o gelo derreteu completamente e temos apenas duas massas de água com diferentes temperaturas.'
                    },
                    {
                        tag: 'texto',
                        inner: '• A partir de t3 as duas massas de água estão em equilíbrio térmico. '
                    }
                ]
            }
        ]
    },
    {
        id: 17,
        titulo: 'Aula 01',
        conteudos: [
            {
                id: 1,
                titulo: 'Gás Ideal',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Já estudamos que, para um corpo no estado sólido, suas moléculas apresentam uma intensa força de coesão entre si. Dessa forma, essas moléculas apenas oscilam, rotacionam e vibram em torno de posições fixas. É devido a essa intensa força de coesão que um corpo sólido apresenta forma e volume bem definidos.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'No estado gasoso, a força de coesão entre as moléculas é muito pequena, fazendo com que um gás assuma inteiramente o volume do recipiente que o contém.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Suas moléculas se deslocam com um movimento desordenado, de origem térmica, com velocidades da ordem de centenas de metros por segundo. Estas moléculas, em um situação real, colidem umas com as outras e com as paredes do recipiente que o contém.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A ilustração didática abaixo representa algumas moléculas do gás e seus respectivos vetores velocidade.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image01 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Dizemos que um gás é <b>ideal</b> quando a probabilidade de interação entre suas moléculas é nula. Neste caso, as moléculas do gás interagem apenas com as paredes do recipiente que contém o gás.'
                    },
                    {
                        tag: 'comentario cinza',
                        inner: 'Em um gás ideal, as moléculas se chocam elasticamente entre si e contra as paredes do recipiente. Logo, não há variação de energia cinética devido a estas colisões.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image02 },
                    {
                        tag: 'cinza2',
                        inner: 'Importante:\nUm gás real terá um comportamento semelhante ao de um gás ideal quando apresentar baixa densidade e elevada temperatura.'
                    }
                ]
            },
            {
                id: 2,
                titulo: 'Variáveis de Estado',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Para definir o estado no qual se encontra uma certa quantidade de gás vamos usar três parâmetros, chamados de variáveis de estado.'
                    },
                    {
                        tag: 'texto',
                        inner: 'As variáveis de estado são <b>temperatura</b>, <b>volume</b> e <b>pressão</b>.'
                    },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: '2.1 Temperatura' },
                    {
                        tag: 'texto',
                        inner: 'A temperatura é a grandeza física associada ao grau de agitação térmica das moléculas de um corpo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Logo, quanto maior a temperatura, maior a energia cinética média das moléculas do gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A ilustração didática abaixo mostra duas situações, com algumas moléculas de um gás e seus respectivos vetores velocidade.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image04 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: '2.2 Volume' },
                    {
                        tag: 'texto',
                        inner: 'Um gás ocupa todo o volume interno do recipiente que contém o gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Logo, quanto maior o volume interno de um recipiente, maior o volume do gás em seu interior.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image05 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: '2.3 Pressão' },
                    {
                        tag: 'texto',
                        inner: 'Quando uma molécula de gás colide contra uma parede do recipiente que contém o gás, ela sofre uma variação em sua velocidade, conforme ilustra a figura abaixo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Sabemos que, para ter uma variação de velocidade, precisa haver uma força atuando no corpo, e quem aplica essa força na molécula do gás é a parede do recipiente com a qual a molécula colidiu.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Pela 3º lei de Newton (Princípio da Ação e Reação), se a parede aplicou uma força na molécula, esta aplicou uma força de mesmo módulo, mesma direção e sentido contrário na parede.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Então, a força total aplicada pelo gás contra as paredes do recipiente, por unidade de área, é a pressão exercida pelo gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image03 },
                    { tag: 'texto', inner: 'Unidades usuais de pressão:' },
                    { tag: 'imagem', inner: Termodinamica01.Image07 }
                ]
            },
            {
                id: 3,
                titulo: 'Número de mols',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Para definir a quantidade de gás em um recipiente, vamos utilizar uma unidade de medida chamada de mol, onde 1 mol de um dado gás representa 6,02 x 1023 moléculas do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica01.Image06 }
                ]
            }
        ]
    },
    {
        id: 18,
        titulo: 'Aula 02',
        conteudos: [
            {
                id: 1,
                titulo: 'Transformação Isométrica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Uma certa massa de gás sofre uma transformação isométrica quando sua temperatura e pressão mudam, mas seu <b>volume permanece constante</b>.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Quando a temperatura de um gás aumenta, a velocidade de suas moléculas também aumenta. Logo, estas moléculas irão colidir com maior frequência e intensidade contra as paredes do recipiente, implicando em um aumento da pressão exercida pelo gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image08 },
                    {
                        tag: 'texto',
                        inner: 'Podemos concluir então que, para uma transformação isométrica, um aumento de temperatura provoca um aumento na pressão do gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Analogamente, uma diminuição de temperatura provoca uma diminuição na pressão exercida pelo gás.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo mostra o comportamento da pressão de um gás ideal em função da temperatura, em graus celcius.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Projetando este gráfico até o ponto no qual a pressão é de 0 N/m², encontramos a temperatura de - 273,15 <sup>0</sup>C.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image02 },
                    {
                        tag: 'texto',
                        inner: 'Esta é menor temperatura na qual se pode chegar, pois, para que a pressão seja nula, o grau de agitação térmica das moléculas do gás é também é nula.'
                    },
                    {
                        tag: 'texto',
                        inner: 'A partir desta hipótese, é criada a escala Kelvin, onde 0 K equivale a - 273,15 <sup>0</sup>C.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Abaixo temos o gráfico da pressão em função da temperatura, para um gás ideial, considerando a escala Kelvin.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image03 },
                    {
                        tag: 'texto',
                        inner: 'Em uma transformação isométrica a pressão do gás é proporcional à temperatura absoluta do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image04 }
                ]
            },
            {
                id: 2,
                titulo: 'Transformação Isobárica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Uma determinada massa de gás sofre uma transformação isobárica quando seu volume e sua temperatura variam, mas sua <b>pressão permanece constante.</b>'
                    },
                    {
                        tag: 'texto',
                        inner: 'Esta transformação é possível utilizando-se o um recipiente com um êmbolo (“tampa” móvel), conforme ilustra a figura abaixo.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image05 },
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo representa o volume de um gás em função da sua temperatura absoltua, em uma transformação isobárica.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image06 },
                    {
                        tag: 'texto',
                        inner: 'Em uma transformação isobárica, o volume do gás é proporcional à sua temperatura absoluta.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image07 }
                ]
            },
            {
                id: 3,
                titulo: 'Transformação Isotérmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Uma determinada de gás sofre uma transformação isotérmica quando sua pressão e seu volume mudam, mas sua <b>temperatura permanece constante</b>.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Nesse caso, com o aumento de volume e temperatura constante, aumenta a distância média que as moléculas do gás precisam percorrer entre uma colisão e outra, contra as paredes do recipiente, o que implica na diminuição da pressão exercida pelo gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'De forma análoga, uma diminuição do volume produz um aumento da pressão exercida pelo gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'O gráfico abaixo representa o volume de um gás em função da sua temperatura absoltua, em uma transformação isotérmica.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image09 },
                    {
                        tag: 'texto',
                        inner: 'Em uma transformação isotérmica, pressão e volume são inversamente proporcionais.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image10 }
                ]
            },
            {
                id: 4,
                titulo: 'Influência do número de mols',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A figura ilustra um recipiente contendo <b>n</b> mols de um gás, a uma temperatura <b>T</b>, pressão <b>P</b> (maior que a pressão atmosfera) e volume <b>V</b>.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image11 },
                    {
                        tag: 'texto',
                        inner: 'Se a válvula do recipiente for aberta e uma certa massa de gás sair lentamente, a temperatura e o volume do gás no interior do recipiente não serão alteradas.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Porém, a pressão irá diminuir, pois haverá uma quantidade menor de moléculas colidindo com as paredes internas do recipiente.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image12 }
                ]
            },
            {
                id: 5,
                titulo: 'Equação Geral dos Gases Ideais',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A partir da análise das transformações apresentas (isométrica, isobárica e isotérmica), podemos escrever uma lei geral para o comportamento de um gás ideal.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image13 },
                    {
                        tag: 'texto',
                        inner: 'Manipulando esta expressão, para dois estados de um gás ideal, temos a igualdade mostrada abaixo.'
                    },
                    { tag: 'imagem', inner: Termodinamica02.Image14 }
                ]
            }
        ]
    },
    {
        id: 19,
        titulo: 'Aula 03',
        conteudos: [
            {
                id: 1,
                titulo: 'Trabalho realizado por um gás',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'No curso de termodinâmica vamos estudar o funcionamento básico das máquinas térmicas, começando com a máquina a vapor.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Na figura temos um protótipo de máquina térmica. Podemos identificar a caldeira, na qual água é aquecida até produzir vapor em alta pressão, e o pistão, cujo movimento é transmitido a roda.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image01 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Neste esquema simplificado, temos um cilindro, contendo um gás ideal, e um pistão.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image02 },
                    {
                        tag: 'texto',
                        inner: 'O pistão é formado por uma haste e por um êmbolo, que pode se mover verticalmente sem atrito com o cilindro.'
                    },
                    {
                        tag: 'texto',
                        inner: 'No interior do cilindro temos um gás, supostamente ideal e sobre a parte externa do êmbolo atua a pressão atmosférica.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Neste exemplo, sobre a parte externa do êmbolo atua a pressão atmosférica.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Como o sistema está em equilíbrio, a pressão interna deve ser igual a pressão externa.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image03 },
                    {
                        tag: 'nota',
                        inner: '<b>Observação</b>: nesta figura, representamos os vetores força atuando em cada 1 cm² de área de superfície. Lembre-se que a pressão é uma grandeza escalar, não sendo representada vetorialmente.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Agora temos essa mesma estrutura, com um corpo de massa “m” sobre o êmbolo, também em condição de equilíbrio (ou seja, a pressão externa é igual à pressão interna).'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image04 },
                    {
                        tag: 'texto',
                        inner: 'Fornecendo calor ao gás, sua temperatura tende a aumentar, aumentando também a pressão interna e consequentemente o seu volume.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image05 },
                    {
                        tag: 'texto',
                        inner: 'Com o movimento do êmbolo, o volume do gás aumenta até o sistema atingir uma nova condição de equilíbrio, com a pressão interna igual à pressão externa.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, podemos dizer que o gás sofreu uma transformação isobárica com aumento de temperatura e aumento de volume.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Lembrando que, em um transformação isobárica, o volume do gás é diretamente proporcional à sua temperatura.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image10 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Observe que o gás realizou um trabalho sobre o êmbolo, pois uma força de módulo <b>F</b> foi aplicada, pelo gás, ao longo do deslocamento <b>d</b>.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Demonstramos em sala que este trabalho pode ser calculado como sendo o produto entre a pressão do gás (supostamente constante) e a variação de volume do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image06 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Importante:' },
                    { tag: 'imagem', inner: Termodinamica03.Image07 },
                    {
                        tag: 'texto',
                        inner: '• Se o volume aumenta, o gás sofre uma expansão, a variação de volume é positiva e o trabalho é positivo.'
                    },
                    {
                        tag: 'texto',
                        inner: '• Se o volume diminui, o gás sofre uma compressão, a variação de volume é negativa e o trabalho é negativo.'
                    },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Observe que, quando o volume do gás aumenta, é o gás que realiza trabalho sobre o ambiente externo.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image08 },
                    {
                        tag: 'texto',
                        inner: 'E quando o volume do gás diminui, é o ambiente externo que realiza trabalho sobre o gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image09 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'Um bom exemplo de quando um trabalho é realizado sobre o gás é quando uma pessoa empurra o pistão de uma bomba de encher pneu, comprimindo o gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, é a pessoa (elemento externo) que realiza trabalho sobre o gás no interior do cilindro da bomba.'
                    },
                    { tag: 'imagem', inner: Termodinamica03.Image11 }
                ]
            }
        ]
    },
    {
        id: 20,
        titulo: 'Aula 04',
        conteudos: [
            {
                id: 1,
                titulo: 'Energia cinética de um gás ideal',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A energia cinética de um gás ideal é calculada como sendo a soma das energias cinéticas de todas as suas moléculas.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image11 },
                    {
                        tag: 'texto',
                        inner: 'Considerando um conjunto de simplificações associadas a um gás ideal, é possível demonstrar que:'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Observe que esta energia cinética é diretamente proporcional à temperatura do gás.'
                    },
                    {
                        tag: 'comentario verde',
                        inner: 'Quanto maior a temperatura do gás, maior a energia cinética do gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Além disso, a energia cinética de um gás ideal não depende do tipo de gás, apenas o número de mols, da constante universal dos gases perfeitos e da sua temperatura absoluta.'
                    }
                ]
            },
            {
                id: 2,
                titulo: 'Energia Interna',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Em um gás, suas partículas (átomos ou moléculas) podem apresentar energia cinética de translação, energia cinética de rotação, energia cinética de vibração e energia potencial de ligação molecular.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image02 },
                    {
                        tag: 'texto',
                        inner: 'A soma de todas essas energias é chamada de <b>energia interna</b> do gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Porém, para um gás ideal monoatômico, podemos considerar, para o cálculo da sua energia interna, apenas a energia cinética do gás.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Consequentemente, a energia interna de um gás ideal pode ser escrita conforme mostrado abaixo.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image03 }
                ]
            },
            {
                id: 3,
                titulo: 'Variação de Energia Interna',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A variação de energia interna de um gás ideal é a diferença entre a energia interna final e a energia interna inicial. Observe que esta variação pode ser calculada em função da variação de temperatura absoluta do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image04 },
                    {
                        tag: 'texto',
                        inner: 'Observe que a variação de energia interna é diretamente proporcional à variação de temperatura absoluta do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image05 },
                    {
                        tag: 'texto',
                        inner: 'Logo, se a temperatura do gás aumenta, sua energia interna aumenta, e se a temperatura do gás diminui, sua energia interna diminui, sempre na mesma proporção.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image06 },
                    { tag: 'linha' },
                    {
                        tag: 'texto',
                        inner: 'A energia interna de um gás ideal representa sua capacidade de realizar trabalho (basicamente, de "empurrar" o ambiente em seu entorno).'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image08 },
                    {
                        tag: 'texto',
                        inner: 'Para seguir adiante, e entender o funcionamento das máquinas térmicas (motores que usam o poder calorífico dos combustíveis), precisamos entender a relação entre a quantidade de calor troca (recebido ou cedido), o trabalho realizado (pelo gás ou sobre o gás) e a variação de energia interna do gás.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image07 }
                ]
            },
            {
                id: 4,
                titulo: 'Primeira Lei da Termodinâmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A partir destas relações, podemos apresentar a Primeira Lei da Termodinâmica.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image09 },
                    {
                        tag: 'texto',
                        inner: 'Para interpretar a relação entre variação de energia, quantidade de calor trocado e trabalho realizado é precisa considerar os sinais algébricos para cada tipo de transformação.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Além disso, precisamos lembrar que em uma transformação isométrica não há variação de volume. Em uma transformação adiabática não troca de calor e em uma transformação isotérmica não há variação de energia.'
                    },
                    { tag: 'imagem', inner: Termodinamica04.Image10 }
                ]
            }
        ]
    },
    {
        id: 29,
        titulo: 'Aula 05',
        conteudos: [
            {
                id: 1,
                titulo: 'Transformação Adiabática e Primeira Lei da Termodinâmica',
                conteudo: [
                    {
                        tag: 'titulo',
                        inner: 'Exemplo 01'
                    },
                    {
                        tag: 'texto',
                        inner: 'Uma pessoa está enchendo um pneu com uma bomba manual, conforme ilustrado.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image01 },
                    {
                        tag: 'texto',
                        inner: 'Supondo que a pressão no interior do pneu é muito maior que a pressão atmosférica, a pessoa terá que realizar um trabalho sobre o gás (ar no interior do bomba), comprimindo este gás, até que a pressão no interior da bomba seja maior que a pressão do ar no interior do pneu.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image02 },
                    {
                        tag: 'texto',
                        inner: 'Podemos adotar, com boa aproximação, que esta compressão foi muito rápida e não houve tempo para uma troca de calor entre o ar no interior da bomba e o ambiente externo.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Logo, essa foi uma transformação adiabática na qual a quantidade de calor trocada é nula, o trabalho é negativo (compressão), a energia interna aumenta e a temperatura do ar, no interior da bomba, também aumenta.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image03 },
                    { tag: 'linha' },
                    { tag: 'titulo', inner: 'Exemplo 02' },
                    {
                        tag: 'nota',
                        inner: '<i>• Como uma simplificação didática vamos supor que, no interior de um aerossol, há um gás ideal. Na verdade, é um processo um pouco diferente, que só iremos detalhar mais à frente.</i>'
                    },
                    {
                        tag: 'texto',
                        inner: 'Ao utilizar um desodorante (ou qualquer produto aerossol), percebemos que o gás sai da válvula com temperatura menor que a temperatura ambiente (o gás sai frio).'
                    },
                    {
                        tag: 'texto',
                        inner: 'Neste processo, o gás que sai da válvula, ao passar para um ambiente de menor pressão, se expando muito rapidamente, de forma que podemos considerar que esta expansão é adiabática, com trabalho realizado pelo gás (expansão) e diminuição da sua energia interna.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image04 },
                    {
                        tag: 'texto',
                        inner: '<b>Observação</b>: o recipiente também esfria, pois o gás em seu interior sofre um processo análogo a uma expansão, com a saída de parte do gás.'
                    }
                ]
            },
            {
                id: 2,
                titulo: 'Transformação Isométrica e Primeira Lei da Termodinâmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'A figura ilustra uma situação na qual um botijão de gás de cozinha está próximo, acidentalmente, de uma fonte de calor, com um incêndio ou uma fogueira (algo que não deve acontecer).'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image05 },
                    {
                        tag: 'texto',
                        inner: 'Neste caso, o gás no interior do botijão (como simplificação didática, supostamente um gás ideal) irá receber calor do ambiente e sua energia interna irá aumentar, em uma transformação isométrica.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image06 },
                    {
                        tag: 'texto',
                        inner: 'Para evitar a explosão do botijão, devido ao aumento da pressão, um dispositivo na válvula deste recipiente derrete (é feito de resina), permitindo o vazamento do gás e diminuindo a pressão interna.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image07 }
                ]
            },
            {
                id: 3,
                titulo: 'Transformação Isotérmica e Primeira Lei da Termodinâmica',
                conteudo: [
                    {
                        tag: 'texto',
                        inner: 'Considere um gás, inicialmente a temperatura ambiente (300 K) que é comprimido, passando do estado A para o estado B, em uma transformação adiabática. Neste caso, sua temperatura aumenta, digamos, para 400 K.'
                    },
                    {
                        tag: 'texto',
                        inner: 'Em seguida, este gás perde calor, até entrar em equilíbrio com ambiente novamente (voltando para 300 K), passando do estado B para o estado C.'
                    },
                    { tag: 'imagem', inner: Termodinamica05.Image08 },
                    {
                        tag: 'texto',
                        inner: 'Neste processo, a temperatura inicial e final do gás é a mesma. Logo, podemos considerar que a transformação A->C foi isotérmica (o volume diminuiu e a pressão aumentou), e a variação de energia interna do gás foi nula.'
                    }
                ]
            }
        ]
    }
];

export default notas_de_aula;
