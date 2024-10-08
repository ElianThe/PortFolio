import {motion} from "framer-motion";
import {Tilt} from "react-tilt";

import {styles} from "../styles.js";
import SectionWrapper from "./hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {projects} from "../constants/index.js";
import {github} from "../assets/index.js";

const ProjectCard = ({index, name, description, tags, image, source_code_link, second_link}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                option={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px] cursor-pointer"
                     onClick={() => window.open(source_code_link, "_blank")}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {second_link &&
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() => window.open(second_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={github}
                                    alt="github"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    }
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Mon travail</p>
                <h2 className={styles.sectionHeadText}>Mes projets</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples
                    concrets de mon travail.
                    Chaque projet est brièvement décrit avec des liens vers les dépôts de code.
                    Cela reflète ma capacité à résoudre des problèmes complexes,
                    à travailler avec différentes technologies et à gérer efficacement des projets.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap flex-row gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "");