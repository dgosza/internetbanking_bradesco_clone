import React from 'react';
import '../../public/css/main.scss'

//Components
import QuickAccess from './QuickAccess'

//React icons
import { AiFillEyeInvisible as Hide } from 'react-icons/ai'
import { FaMoneyCheckAlt as Saldo } from 'react-icons/fa'
import { GiReceiveMoney as Investimentos } from 'react-icons/gi'
import { MdAttachMoney as Emprestimos } from 'react-icons/md'
import { GiPayMoney as Pagamentos } from 'react-icons/gi'
import { FaCreditCard as Cartao } from 'react-icons/fa'
import { IoIosPeople as Consorcio } from 'react-icons/io'
import { MdSecurity as Seguro } from 'react-icons/md'
import { AiOutlineAlignLeft as OutrosServicos } from 'react-icons/ai'



const Main = () => (
    <div className="Main">

        <div className="leftBar">

            <div className="saldoConta">
                <p>Saldo total <span className="saldo">R$1.378,76</span></p>
                <span className="icon"><Hide size={35} className="icon" /></span>
            </div>


            <div className="dadosConta">
                <p>Agência: <span>118</span></p>
                <p>Conta: <span>15715-1</span></p>
            </div>

            <div className="options">
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <hr/>
                <li>
                    <Pagamentos size={30} className="icon"/>
                    <p className="textList">Pagamentos</p>
                </li>
                <hr/>
                <li>
                    <Cartao size={30} className="icon"/>
                    <p className="textList">Cartões</p>
                </li>
                <hr/>
                <li>
                    <Consorcio size={30} className="icon"/>
                    <p className="textList">Consórcios</p>
                </li>
                <hr/>
                <li>
                    <Investimentos size={30} className="icon"/>
                    <p className="textList">Investimentos</p>
                </li>
                <hr/>
                <li>
                    <Emprestimos size={30} className="icon"/>
                    <p className="textList">Empréstimos</p>
                </li>
                <hr/>
                <li>
                    <Seguro size={30} className="icon"/>
                    <p className="textList">Seguros</p>
                </li>
                <hr/>
                <li>
                    <OutrosServicos size={30} className="icon"/>
                    <p className="textList">Outros serviços</p>
                </li>

            </div>

        </div>

    </div>
)

export default Main;