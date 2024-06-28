import Profile from '../../../assets/codevvs.webp';
import './profileinfo.css'
export default function ProfileInfo () {
    return (
        <div className="profile">
            <div className="active-status"></div>
            <img src={Profile} alt="" className='profile-img' loading='lazy' />
            <div className="profile-names">
                <h2>Renato Dev</h2>
                <p>Desarrollador Web</p>
            </div>
        </div>
    )
}