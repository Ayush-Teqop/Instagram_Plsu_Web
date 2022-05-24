import React from 'react';
import styles from './styles/style.module.css';
import axios from 'axios';
function PhoneInput(props) {
    const { value, handleChange, hashHandleChange } = props;
    console.log(value);
    const continueHandler = (e) => {
        axios
            .post('http://localhost:5004/api/v1/sendOTP', {
                phone: `${value.phone}`
            })
            .then(function (res) {
                e.preventDefault();
                console.log(res.data.otp);
                const hash = res.data.hash;
                hashHandleChange(hash);
                props.nextStep();
            }).catch((err) => {
                console.log(err);
                props.prevStep();
            });


    };
    return (
        <div className={styles}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.heading}>Insta Plus</div>

                    <div className={styles.input_text}>Phone number:</div>
                    <div className={styles.input_container}>
                        <input
                            type="tel"
                            value={value.phone}
                            onChange={handleChange('phone')}
                            placeholder="Enter the Phone No."
                            className={styles.input}
                        />
                    </div>
                    <button onClick={continueHandler} className={styles.submit}>
                        Send OTP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhoneInput;