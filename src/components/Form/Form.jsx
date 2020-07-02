import React, { useState } from 'react'

import './Form.css'

export default function Form() {

    const[fullname, setFullName] = useState('')
    const [email, seteEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [skill, setSkill] = useState('')

    function fullName(event) {
        setFullName(event.target.value)
    }

    function emails(event) {
        seteEmail(event.target.value)
    }

    function passwords(event) {
        setPassword(event.target.value)
    }

    function addresss(event) {
        setAddress(event.target.value)
    }

    function birthdates(event) {
        setBirthDate(event.target.value)
    }
    
    function handleSubmit() {
        alert(`
        Fullname: ${fullname}
        E-Mail: ${email}
        Password: ${password}
        Address: ${address}
        birthdates: ${birthdate}
        Gender: ${gender}
        Skill: ${skill}`)
    }
    return (
        <div>
            <h1>Form Registrasi</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <div className='text-input'>
                        <h3 className='subtitle'>Nama Lengkap</h3>
                        <input type="text" name="fullname" id="text-inputs" placeholder="Nama Lengkap" onChange={fullName} value={fullname}/>
                    </div>

                    <div className='text-input'>
                        <h3 className='subtitle'>Email</h3>
                        <input type="text" name="email" id="text-inputs" placeholder="E-Mail" onChange={emails} value={email}/>
                    </div>

                    <div className='text-input'>
                        <h3 className='subtitle'>Password</h3>
                        <input type="password" name="password" id="" placeholder="Kata Sandi" onChange={passwords} value={password}/>
                    </div>

                    <div className='text-input'>
                        <h3 className='subtitle'>Alamat</h3>
                        <textarea type="textarea" name="address"  placeholder="Alamat" onChange={addresss} value={address}/>
                    </div>  

                    <div className='text-input'>
                        <h3 className='subtitle'>Tanngal Lahir</h3>
                        <input type="date" name="birthdate" id="" placeholder="Tanggal Lahir" onChange={birthdates} value={birthdate}/>
                    </div>

                    <div className='text-input'>
                        <h3 className='subtitle'>Jenis Kelamin</h3>
                        <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender1" value='Male'/>Male
                        <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender2" value='Female'/>Female
                    </div>

                    <div className='text-input'>
                        <h3 className='subtitle'>Kemampuan</h3>
                        <input onChange={(event) => {
                                            if (event.target.checked) {
                                                setSkill([...skill, event.target.value]);
                                            } else {
                                                setSkill(
                                                    skill.filter(
                                                        (skill) => skill !== event.target.value
                                                    )
                                                );
                                            }
                                        }} type="checkbox" name="skill" id="checkbox1" value='Coding'/>Coding

                        <input onChange={(event) => {
                                            if (event.target.checked) {
                                                setSkill([...skill, event.target.value]);
                                            } else {
                                                setSkill(
                                                    skill.filter(
                                                        (skill) => skill !== event.target.value
                                                    )
                                                );
                                            }
                                        }} type="checkbox" name="skill2" id="checkbox2" value='Design'/>Design

                        <input onChange={(event) => {
                                            if (event.target.checked) {
                                                setSkill([...skill, event.target.value]);
                                            } else {
                                                setSkill(
                                                    skill.filter(
                                                        (skill) => skill !== event.target.value
                                                    )
                                                );
                                            }
                                        }} type="checkbox" name="skill3" id="checkbox3" value='Gaming'/>Gaming
                    </div>
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}
