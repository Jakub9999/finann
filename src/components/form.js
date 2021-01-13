import React from "react"
import '../styles/index.scss'
import FormStyle from './form.module.scss'
import { navigate } from 'gatsby-link'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const FormPage = () => {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

    return(
        <section className={FormStyle.style} id="contact">
            <div  className={FormStyle.backgroundStyle}>
            <div className={FormStyle.bgColor}></div>
            <div className={FormStyle.container}>
                <h2>KONTAKT</h2>
                <form 
                name="contact" method="post" action="../thanks/" //WAŻNE -- dopisać stronę thx
                data-netlify="true" data-netlify-honeypot="bot-field" 
                onSubmit={handleSubmit} className={FormStyle.form}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                        </label>
                    </p>
                    <div className={FormStyle.part}>
                        <div className={FormStyle.item}>
                            <input type="text" placeholder="Nazwa firmy" name="name" className={FormStyle.inputStyle} onChange={handleChange}></input>
                            <input type="email" placeholder="Adres e-mail" name="email" className={FormStyle.inputStyle} onChange={handleChange}></input>
                            <input type="text" placeholder="Telefon" name="phone" className={FormStyle.inputStyle} onChange={handleChange}></input>
                        </div>
                        <div className={FormStyle.item, FormStyle.itemText}>
                            <p> Zapraszamy do kontaktu z nami poprzez formularz zgłoszeniowy.
                            </p>
                            <p>
                                <div className={FormStyle.consent}>
                                * Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z realizacją zgłoszenia.
                                Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem /am poinformowany /a, że przysługuje mi prawo dostępu
                                do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Biuro
                                Rachunkowe FIN-ANN z siedzibą w Bibicach, ul. Mokra 4G/1.
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className={FormStyle.item}>
                        <textarea placeholder="Pytanie" name="message" className={FormStyle.inputStyleBig} onChange={handleChange}></textarea>
                    </div>
                    <div className={FormStyle.buttonDiv}>
                        <button type="submit" className={FormStyle.buttonStyle}>ZGŁOŚ SIĘ</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default FormPage