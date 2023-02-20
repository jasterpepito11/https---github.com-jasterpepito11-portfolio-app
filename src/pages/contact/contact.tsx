import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import AnimatedLettersComponent from '../../components/AnimatedLettersComponent';
import './index.scss';
export default function ContactComponent() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef<HTMLFormElement>(null);
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const currentForm = form.current;
        if(currentForm == null) return;
        emailjs
            .sendForm('default_service', 'template_beyfopk', currentForm, import.meta.env.VITE_EMAILJS_KEY)
            .then(
                () => {
                    alert('Message successfully sent!')
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <div className='contact grid grid-cols-6 h-full pt-8 pl-8 pr-8'>
            <div className='col-span-2'>
                <div className="flex w-full h-18 mt-8">
                    <AnimatedLettersComponent
                        classWrapper='text-white text-4xl'
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </div>

                <p className='contact-text text-lg text-yellow-300 mt-8'>I am open for full time projects, freelance opportunities or even a coffee.</p>
                <p className='contact-text text-lg text-yellow-300'>If you have other request or question, dont hesitate to get in touch.</p>
            </div>
            <div className="col-span-3">
            <div className="flex w-full h-18">
                    <form className='w-full' ref={form} onSubmit={sendEmail}>
                        <span className='w-full text-lg text-white'>Let's talk!</span>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" htmlFor="grid-name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name"
                                    type="text" placeholder="Name" name="from_name" required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" htmlFor='grid-last-name'>
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email"
                                    type="email" placeholder="Email" name="from_email" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" htmlFor="grid-subject">
                                    Subject
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subject" type="text" placeholder="Subject"
                                    name="subject" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-yellow-300 text-xs font-bold mb-2" htmlFor="grid-message">
                                    Message
                                </label>
                                <textarea className="appearance-none min-h-[150px] block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Message"
                                    name="message" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <button type="submit" className="bg-white hover:bg-gray-100 
                            text-gray-800 font-semibold py-2 px-4 border border-gray-400
                            rounded shadow float-right w-40">SEND</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
