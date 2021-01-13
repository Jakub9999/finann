import React from "react"
import '../styles/index.scss'
import FooterStyle from './footer.module.scss'

const Footer = () => {
    return (
        <section className={FooterStyle.footer}>
            <div className={FooterStyle.container}>
                Biuro Rachunkowe FIN-ANN<br/>
                Anna Śliwińska<br/>
                ul. Mokra 4G, 32-087 Bibice<br/>
                tel. 514 - 995 - 620<br/>
                kpir.uslugi@gmail.com
            </div>
            <div className={FooterStyle.container2}>
                NIP: 945 100 16 50<br/>
                REGON: 120702717<br/>
            </div>
            <div className={FooterStyle.iconsCredit}>
                <div className={FooterStyle.iconsCreditLine}>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip </a> <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>
                <a href='https://pl.freepik.com/zdjecia/wizytowka'>Handshake zdjęcie utworzone przez rawpixel.com - pl.freepik.com</a>
                </div>
            </div>
        </section>
    )
}

export default Footer