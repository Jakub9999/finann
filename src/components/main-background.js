import React from "react"
import '../styles/index.scss'
import BGstyles from './main-background.module.scss'

const Background = () => {
    return(
        <section>
            <div className={BGstyles.bgimage}>
                <div className={BGstyles.bgcolor}></div>
                <div className={BGstyles.pageTitle}>
                   <h2>Biuro Rachunkowe <br />FIN - ANN </h2>
                   <p>Od 2014 roku dostarczamy profesjonale usługi księgowe oraz kadrowo-
                        płacowe dla małych i średnich firm. Zapewniamy indywidualne podejście
                        oraz elastyczną ofertę usług, którą każdorazowo dopasowujemy <br/> do potrzeb
                        naszych Klientów.
                   </p>
               </div>
            </div>
        </section>
    )
}

export default Background