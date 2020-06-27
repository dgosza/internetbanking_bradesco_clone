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

import { GiCardDiscard as Deposito } from 'react-icons/gi'
import { IoIosPhonePortrait as RecargaCelular } from 'react-icons/io'
import { FaCcMastercard as Credito } from 'react-icons/fa'
import { BsFileSpreadsheet as Comprovante } from 'react-icons/bs'
import { FiSend as Transferencia } from 'react-icons/fi'
import { IoMdHelp as Suporte } from 'react-icons/io'
import { FaMoneyBillAlt as Cambio } from 'react-icons/fa'

import { AiOutlineRise as Investimento } from 'react-icons/ai'
import { GiFoodTruck as Restaurante } from 'react-icons/gi'

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
                    <Saldo size={30} className="icon" />
                    <p className="textList">Saldo e Extratos</p>
                </li>
                <hr />
                <li>
                    <Pagamentos size={30} className="icon" />
                    <p className="textList">Pagamentos</p>
                </li>
                <hr />
                <li>
                    <Cartao size={30} className="icon" />
                    <p className="textList">Cartões</p>
                </li>
                <hr />
                <li>
                    <Consorcio size={30} className="icon" />
                    <p className="textList">Consórcios</p>
                </li>
                <hr />
                <li>
                    <Investimento size={30} className="icon" />
                    <p className="textList">Investimentos</p>
                </li>
                <hr />
                <li>
                    <Emprestimos size={30} className="icon" />
                    <p className="textList">Empréstimos</p>
                </li>
                <hr />
                <li>
                    <Seguro size={30} className="icon" />
                    <p className="textList">Seguros</p>
                </li>
                <hr />
                <li>
                    <OutrosServicos size={30} className="icon" />
                    <p className="textList">Outros serviços</p>
                </li>

            </div>

        </div>

        <div className="rightSide">
            <p className="moreClicked">Serviços mais utilizados</p>
            <div className="container">

                <div className="box">
                    <br />
                    <Deposito size={40} />
                    <p>Depósitos</p>
                </div>

                <div className="box">
                    <br />
                    <Transferencia size={40} />
                    <p>Transferir</p>
                </div>

                <div className="box">
                    <br />
                    <RecargaCelular size={40} />
                    <p>Recarga</p>
                </div>

                <div className="box">
                    <br />
                    <Pagamentos size={40} />
                    <p>Pagar conta</p>
                </div>

                <div className="box">
                    <br />
                    <Comprovante size={40} />
                    <p>Comprovantes</p>
                </div>

                <div className="box">
                    <br />
                    <Credito size={40} />
                    <p>Crédito</p>
                </div>

                <div className="box">
                    <br />
                    <Suporte size={40} />
                    <p>Suporte</p>
                </div>

                <div className="box">
                    <br />
                    <Cambio size={40} />
                    <p>Câmbio</p>
                </div>

            </div>
            <br /><br />
            <div className="content">
                <div className="investimentos">
                    <p className="title">Investimentos</p>
                    <p className="tinyTitle">saldo</p>
                    <p className="saldo">R$ <span>64.672,32</span></p>
                    <br />
                    <div className="investimentosResumo">

                        <div className="item">
                            <p className="tinyTitle">Fundos de Investimento</p>
                            <p className="saldo">R$ <span>22.402,68</span></p>
                        </div>

                        <div className="item">
                            <p className="tinyTitle">Previdência Privada</p>
                            <p className="saldo">R$ <span>4.142,02</span></p>
                        </div>

                        <div className="item">
                            <p className="tinyTitle">Fundos Imobiliários</p>
                            <p className="saldo">R$ <span>2.722,75</span></p>
                        </div>

                        <div className="item">
                            <p className="tinyTitle">Ações</p>
                            <p className="saldo">R$ <span>13.202,85</span></p>
                        </div>

                    </div>
                </div>
                <br /><br />
                <div className="contacorrente">
                    <p className="title">Uso do cartão de crédito</p>
                    <div className="status">
                        <div className="item">
                            <p className="tinyTitle">Fatura atual</p>
                            <p className="saldo">R$ <span>542,67</span></p>
                        </div>

                        <div className="item">
                            <p className="tinyTitle">Limite disponível</p>
                            <p className="saldo">R$ <span>2.142,32</span></p>
                        </div>

                    </div>
                    <br />
                    <p className="ultimasCompras">Ultimas compras</p>
                    <div className="compras">
                        <div className="item">
                            <p className="titleCompra"> Restaurante - McDonalds</p>
                            <p className="titlePrice"> no valor de R$ <span>15,90</span></p>
                            <p>15/06</p>
                        </div>

                        <div className="item">
                            <p className="titleCompra"> Mercado - Extra</p>
                            <p className="titlePrice"> no valor de R$ <span>152,22</span></p>
                            <p>13/06</p>
                        </div>

                        <div className="item">
                            <p className="titleCompra"> Estética - Barbershop</p>
                            <p className="titlePrice"> no valor de R$ <span>25,50</span></p>
                            <p>09/06</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
)

export default Main;