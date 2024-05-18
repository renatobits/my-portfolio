import Profile from '../../../assets/codevvs.webp';
import './profileinfo.css'
export default function ProfileInfo () {
    return (
        <div className="profile">
            <img src={Profile} alt="" className='profile-img' loading='lazy' />
            <div className="profile-names">
                <h2>Renato Dev</h2>
                <p>Web Developper</p>
            </div>
        </div>
    )
}