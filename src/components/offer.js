import React from "react"
import '../styles/index.scss'
import OfferStyle from './offer.module.scss'
import IconBooks from '../icons/001-books.svg'
import IconGroup from '../icons/002-group.svg'
import IconNotebook from '../icons/003-notebook.svg'
import IconCalendar from '../icons/004-calendar.svg'

const Offer = () => {
    return(
        <section className={OfferStyle.offer} id="offer">
            <h3>Oferta</h3>
            <div className={OfferStyle.wrapper}>
                <div className={OfferStyle.offerElement}>
                    <img src={IconBooks} />
                    <h2>Podatkowa księga przychodów i rozchodów</h2>
                    <p>
                        Świadczymy usługi księgowe i profesjonalną obsługę 
                        podatkową dla jednoosobowych działalności gospodarczych 
                        oraz spółek cywilnych, prowadzących rozliczenia 
                        na zasadach podatkowej księgi przychodów i rozchodów.
                    </p>
                </div>
                <div className={OfferStyle.offerElement}>
                    <img src={IconGroup} />
                    <h2>Kadry i płace</h2>
                    <p>
                        Świadczymy kompleksowe usługi kadrowo-płacowe, 
                        tj. sporządzanie list płac, prowadzenie akt osobowych, 
                        sporządzanie umów, rozliczenia z ZUS.
                    </p>
                </div>
                <div className={OfferStyle.offerElement}>
                    <img src={IconNotebook} />
                    <h2>Ewidencja ryczałtowa</h2>
                    <p>
                        Prowadzimy również rozliczenia dla osób, które wybrały jako formę
                        rozliczeń ryczałt ewidencjonowany lub kartę podatkową.
                    </p>
                </div>
                <div className={OfferStyle.offerElement}>
                    <img src={IconCalendar} />
                    <h2>Rozliczenia roczne</h2>
                    <p>
                        Dokonujemy rozliczeń rocznych dla osób fizycznych nie prowadzących
                        działalności gospodarczej, jak również dla małych i średnich firm.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Offer