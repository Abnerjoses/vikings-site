import './index.scss'
import './fonts.scss'
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import Tattoo from '../../../components/Tattoo';


export default function Landingpage() {

    return (
        <div className="ladingpage">
            <Nav/>
            <Whats/>
            
            <div className='secao-inicial-landing'>

                <div className='texto'>
                <h1>PIONEIRISMO E MODERNIDADE
                EM CADA TRAÇO</h1>
                <button>VEJA NOSSAS TATTOOS</button>
                </div>
            </div>
            
            <div className='secao-estudio'>
                <h1 className='titulo'>
                FAZENDO HISTÓRIA <br />
                NO MUNDO DA TATUAGEM DESDE 1977
                </h1>
                
                <div className='flex'>
                    
                <div className='coluna'>
                    <p>Trabalho seguro e responsável na aplicação de piercings, retirada de tatuagens a laser e criação de obras de arte em sua pele.</p>
                    
                    <h1>ACESSIBILIDADE</h1>
                    <p>Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.</p>
                </div>
                
                <div className='coluna'>
                    <p>O maior estúdio de tatuagem da América Latina, com reconhecimento internacional, dezenas de prêmios e equipe especializada.</p>
                    <h1>BIOSSEGURANÇA</h1>
                    <p>AO Vikings Tattoo é certificada pela Vigilância Sanitária atuando sob rígidas normas de biossegurança e assepsia. Possui uma sala exclusiva para a esterilização dos equipamentos.</p>
                </div>
                
                </div>
               <button>CONHEÇA NOSSO ESTÚDIO</button>
            </div>

            <div className='images-servicos'>

                <div className='img-tattoo'>
                    <Link to = '/'>
                    <h1>TATUAGEM</h1></Link>
                </div>
                <div className='img-laser'>
                    <Link to = '/'>
                    <h1>LASER</h1></Link>
                </div>
                <div className='img-piercing'>
                    <Link to = '/'>
                    <h1>PIERCING</h1></Link>
                </div>

            </div>

            <div className='secao-carrossel'>
                <h1>NOSSAS ARTES</h1>
                <div className='carrossel'>
                <img src="/assets/images/leao-tattoo.jpg" alt="leao-tatuagem" /> 
                <img src="/assets/images/olho-tattoo.jpg" alt="olho-tatuagem" /> 
                <img src="/assets/images/rosto-tattoo.jpg" alt="rosto-tatuagem" /> 
                <img src="/assets/images/indio-tattoo.jpg" alt="indio-tatuagem" /> 
                </div>
                <div className='bot'>
                    <button>CONHECER MAIS</button>
                </div>
            </div>

            <div className='estilo'>
                <Tattoo/>
                <button>VEJA TODOS OS ESTILOS</button>
            </div>
            <div className='secao-contato'>
                <h1>SOLICITE UM ORÇAMENTO E AGENDE SUA TATTOO</h1>
                <button >ENTRE EM CONTATO</button>
            </div>
            <div className='secao-insta'>
            <img src="assets/images/instagram.png" alt="" /><h1>SIGA-NOS NO INSTAGRAM</h1>
            </div>


            <Rodape/>

        </div>
    );
}
