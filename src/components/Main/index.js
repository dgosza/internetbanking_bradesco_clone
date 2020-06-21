import React from 'react';
import '../../public/css/main.scss'

//Components
import QuickAccess from './QuickAccess'

//React icons
import { AiFillEyeInvisible as Hide } from 'react-icons/ai'
import { FaMoneyCheckAlt as Saldo } from 'react-icons/fa'


const Main = () => (
    <div className="Main">

        <div className="leftBar">

            <div className="saldoConta">
                <p>Saldo total <span className="saldo">R$1.378,76</span></p>
                <span className="icon"><Hide size={35} className="icon" /></span>
            </div>


            <div className="dadosConta">
                <p>Agência: 118</p>
                <p>Conta: 15715-1</p>
            </div>

            <div className="options">
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <hr/>
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <li>
                    <Saldo size={30} className="icon"/>
                    <p className="textList">Saldo e Extratos</p>
                </li>

            </div>

        </div>

    </div>
)

export default Main;