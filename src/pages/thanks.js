import React from "react"
import '../styles/index.scss'
import ThanksStyle from '../components/thanks.module.scss'
import {Link} from 'gatsby'


class Thanks extends React.Component {

    render () {
        return(
            <section className={ThanksStyle.backgroundHandshake}>
                <div className={ThanksStyle.bgcolor}></div>
                <div className={ThanksStyle.container}>
                    <h1>Dziękujemy za zgłoszenie!</h1>
                    <p>W celu przedstawienia wstępnej oferty, skontaktujemy się z Państwem w przeciągu 48 godzin.
                    </p>
                    <div className={ThanksStyle.button}>
                        <Link to="/"><button className={ThanksStyle.buttonStyle}>POWRÓT</button></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Thanks