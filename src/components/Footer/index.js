import React from 'react';

import { FiPhoneCall as Contato } from 'react-icons/fi'
import { BsFillChatDotsFill as Chat } from 'react-icons/bs'
import { BsFillPersonLinesFill as Gerente } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="Footer">
            <br /><br />
            <div className="container">
                <div className="item">
                    <p className="title">Apoio e atendimento</p>
                    <p className="subtitle">Entre em contato com nosso suporte especializado e tire todas suas dúvidas</p>
                    <div className="contato">
                        <p> <span className="icon"><Contato size={30} /></span>Telefones Bradesco</p>
                        <p> <span className="icon"><Chat size={30} /></span> Chat Bradesco</p>
                    </div>
                </div>
                <div className="item">
                    <p className="title">Dicas de Segurança</p>
                    <p className="subtitle">Confira dicas para a utilização do internet banking com segurança.</p>
                    <a href="#">Clique aqui</a>
                </div>

            </div>
            <br /><br /><br />
            <div className="footer">
                <div className="containerFooter">
                    <div className="item">
                        <p>SAC - Alô Bradesco</p>
                        <p className="subtitle">0800 704 8383</p>
                    </div>
                    <div className="itemServicos">
                        <p>Central de Serviços e Apoio ao Internet Banking e Bradesco Celular</p>
                        <div className="grid">
                            <div className="itemCentral">
                                <p>Capitais e Regiões Metropolitanas</p>
                                <p className="subtitle">3003 0237</p>
                            </div>
                            <div className="itemCentral">
                                <p>Demais regiões</p>
                                <p className="subtitle">0800 704 8383</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <p>Ouvidoria Bradesco</p>
                        <p className="subtitle">0800 727 9933</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;