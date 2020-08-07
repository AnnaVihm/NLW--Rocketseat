import React from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://www.leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg" alt="perfil" />
                        <div>
                            <strong>Marcos Silva</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                            <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
                </article>

            </main>
        </div>
    )
}

export default TeacherList;