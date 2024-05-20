import ButtonMoreInfo from '../../../global/components/buttonMoreInfo/ButtonMoreInfo'
import './homeresume.css'


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
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2.75C14.0663 2.75 14.1299 2.77634 14.1768 2.82322C14.2237 2.87011 14.25 2.9337 14.25 3V8.647C14.25 9.061 14.586 9.397 15 9.397H19.5C19.5663 9.397 19.6299 9.42334 19.6768 9.47022C19.7237 9.51711 19.75 9.5807 19.75 9.647V19.5C19.75 20.2293 19.4603 20.9288 18.9445 21.4445C18.4288 21.9603 17.7293 22.25 17 22.25H7C6.27065 22.25 5.57118 21.9603 5.05546 21.4445C4.53973 20.9288 4.25 20.2293 4.25 19.5V5.5C4.25 4.77065 4.53973 4.07118 5.05546 3.55546C5.57118 3.03973 6.27065 2.75 7 2.75H14Z" fill="#F0F1F4" />
                            <path d="M16.086 3.13796C15.943 3.02296 15.75 3.13996 15.75 3.32396V7.64696C15.75 7.78496 15.862 7.89696 16 7.89696H19.298C19.416 7.89696 19.49 7.77296 19.422 7.67696L16.408 3.47996C16.3165 3.35199 16.2082 3.23695 16.086 3.13796Z" fill="#F0F1F4" />
                        </svg>

                    </div>
                    <p>Renato-dev-cv.pdf</p>
                </div>
                <a href="" className='dowload-cv'>
                    Descargar
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 9.5L9 13.25M9 13.25L12.75 9.5M9 13.25V3.5M4.5 15.5H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </a>
            </div>
        </section>
    )
}