import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengesContext)

    const avatar = '/images/avatar.png'

    return (
        <div className={styles.profileContainer}>
            <img src={avatar} alt="Avatar" />
            <div>
                <strong>Você</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>

    )
}