import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "./hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full transition-transform">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    option={{
                        max: 45,
                        scale: 0.5,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                  <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>

    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Vue d'ensemble</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "",0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                J'ai récemment obtenu mon BUT Informatique, avec une spécialisation en développement web et mobile, à l'IUT Nancy Charlemagne.
                Au cours de ma formation, j'ai acquis des compétences en utilisant des frameworks back-end tels que Laravel en PHP, ainsi qu'en front-end avec Vue.js et React Native pour le développement mobile.
                Je suis passionné par l'informatique et je suis impatient de rentrer dans la vie professionnelle pour mettre mes compétences au service de projets professionnels.
            </motion.p>
            {/*<div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>*/}
        </>
    )
}

export default SectionWrapper(About, "about")