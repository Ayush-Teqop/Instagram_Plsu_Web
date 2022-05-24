import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/style.module.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

axios.defaults.withCredentials = true;
function Home() {
    const [user, setUser] = useState({
        value: 'Private Protected Route - Home'
    });

    const logout = () => {
        cookies.remove('authSession');
        cookies.remove('refreshTokenID');
        cookies.remove('refreshToken');
        cookies.remove('accessToken');
        axios
            .get('http://localhost:5004/api/v1/logout')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
        window.location.reload();
    };
    return (
        <div className={styles.home}>
            <div className={styles.top}>
                <p>Insta_Plus</p>
            </div>
            <div className={styles.bottom}>
                <button onClick={logout} className={styles.logout}>
                    Log out
                </button>

                <div className={styles.card} />
                <div className={styles.words}> {user.value}</div>
            </div>
        </div>
    );
}

export default Home;