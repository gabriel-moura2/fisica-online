import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../contexts';

const CardCorpoTopico = () => {
    const dados = useContext(PageContext);
    const [notas_de_aula] = useState([
        [
            {
                id: 0,
                nome: '01. Calorimetria I',
                link: '/fisica/termologia/calorimetria/texto01/'
            },
            {
                id: 1,
                nome: '02. Calorimetria II',
                link: '/fisica/termologia/calorimetria/texto02/'
            },
            {
                id: 2,
                nome: '03. Calorimetria III',
                link: '/fisica/termologia/calorimetria/texto03/'
            },
            {
                id: 3,
                nome: '04. Calorimetria IV',
                link: '/fisica/termologia/calorimetria/texto04/'
            }
        ],
        [
            {
                id: 4,
                nome: '01. Gases (01)',
                link: '/fisica/termologia/termodinamica/texto01'
            },
            {
                id: 5,
                nome: '02. Gases (02)',
                link: '/fisica/termologia/termodinamica/texto02'
            },
            {
                id: 6,
                nome: '03. Trabalho realizado por um gás',
                link: '/fisica/termologia/termodinamica/texto03'
            },
            {
                id: 7,
                nome: '04. Primeira Lei da Termodinâmica',
                link: '/fisica/termologia/termodinamica/texto04'
            }
        ]
    ]);
    const [slides] = useState([
        {
            id: 0,
            nome: 'Slide 02',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide02'
        },
        {
            id: 1,
            nome: 'Slide 03',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide03'
        },
        {
            id: 2,
            nome: 'Slide 04',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide04'
        },
        {
            id: 3,
            nome: 'Slide 05',
            link: 'http://napalmadamao.ifrn.edu.br/fisica/termologia/calorimetria/slide05'
        }
    ]);

    return (
        <div className="aula-body">
            <p>
                <b>
                    {dados.page.titulo} - <small>IFRN/CNAT (2023)</small>
                </b>
            </p>
            <hr />
            <p className="tamanho3">Notas de Aula</p>
            <ul className="list">
                {notas_de_aula.map((subtopico, id) => (
                    <Fragment key={id}>
                        {subtopico.map(nota => (
                            <li key={nota.id}>
                                <Link to={nota.link}>{nota.nome}</Link>
                            </li>
                        ))}
                        {id !== notas_de_aula.length - 1 && <hr />}
                    </Fragment>
                ))}
            </ul>
            <hr />
            <p className="tamanho3">Slides</p>
            <ul className="list">
                {slides.map(slide => (
                    <li key={slide.id}>
                        <Link to={slide.link}>{slide.nome}</Link>
                    </li>
                ))}
            </ul>
            <div style={{ minHeight: '200px' }}></div>
        </div>
    );
};

export default CardCorpoTopico;
