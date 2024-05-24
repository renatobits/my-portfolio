import './homeresume.css'
import RenatoDevCv from '../../../../assets/pdf/Renatodev-cv.pdf';


export default function HomeResume() {
    return (
        <section className="home-resume">
            <div className="resume-header">
                <h2>Resumen</h2>
                {/* <ButtonMoreInfo to='/about' text='Ver más' /> */}
            </div>
            <div className="resume-cv">
                <div className="title-cv">
                    <div className="icon-cv">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="#F0F1F4" d="M14 2.75a.25.25 0 0 1 .25.25v5.647c0 .414.336.75.75.75h4.5a.25.25 0 0 1 .25.25V19.5A2.75 2.75 0 0 1 17 22.25H7a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 7 2.75h7Z" /><path fill="#F0F1F4" d="M16.086 3.138c-.143-.115-.336.002-.336.186v4.323c0 .138.112.25.25.25h3.298c.118 0 .192-.124.124-.22L16.408 3.48a1.75 1.75 0 0 0-.322-.342Z" /></svg>

                    </div>
                    <p>RenatoDev.pdf</p>
                </div>
                <a href={RenatoDevCv} download={true} className='dowload-cv'>
                    Descargar
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 9.5L9 13.25M9 13.25L12.75 9.5M9 13.25V3.5M4.5 15.5H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </a>
            </div>
        </section>
    )
}