import React from 'react'

export const users = [
    {
        username: "sena",
        password: "1"
    },
    {
        username: "beyza",
        password: "13"
    }
]

function Comp() {
    // fragment 
    return (
        <div>
            <div>Berkan</div>
            <div>Karayel</div>
            <div>Süleyman Demirel University</div>
            <div>
                <p>Kullanıcı adınız</p>
                <input type="text" />
            </div>
            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>
            <button>Giriş Yap</button>

        </div>
    )
}

export default Comp 