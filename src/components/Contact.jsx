import {useState, useRef} from 'react';
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';

import {styles} from "../styles.js";
import {EarthCanvas} from "./canvas/index.js";
import SectionWrapper from "./hoc/index.js";
import {fadeIn, slideIn} from "../utils/motion.js";

//
//
//
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_sgwhkzy",
            "template_pnm25jb",
            {
                from_name : form.name,
                to_name: 'Elian',
                from_email: form.email,
                to_email: 'guiffaultelian@gmail.com',
                message: form.message
            },
            "IJbfsPCpbz0qSNdiK"
        )
            .then(() => {
                setLoading(false);
                alert('Merci ! Je vous répondrai aussi vite que je peux.')
                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
            }, (error) => {
                    setLoading(false)
                    console.log(error);

                    alert("L'email n'a pas pu être envoyé.")
                })
    }
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Contactez-moi</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Prénom</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Quel est ton prénom ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Quel est ton email ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Le message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Qu'est ce que vous voulez dire ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending ...' : 'Envoyer'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");