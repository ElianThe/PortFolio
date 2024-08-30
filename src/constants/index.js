import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    meta,
    mcdonalds,
    cook,
    carrent,
    jobit,
    tripguide,
    threejs,
    flutter,
    perceptions

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "À propos",
    },
    {
        id: "work",
        title: "Expérience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Développeur frontend",
        icon: web,
    },
    {
        title: "Développeur backend",
        icon: backend,
    },
    {
        title: "Développeur mobile",
        icon: flutter,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name : "php",
        icon: backend,
    },
    {
        name: 'vueJS',
        icon: web
    },
    {
        name: 'flutter',
        icon: flutter
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
];

const experiences = [
    {
        title: "Employé polyvalent",
        company_name: "McDonald's",
        icon: mcdonalds,
        iconBg: "#DA291C",
        date: "Juillet 2018 - Juin 2019",
        points: [
            "Je travaillais au mcDonald's pendant ma première année de S au lycée.",
            "Je devais préparer les commandes en cuisine, nettoyer les locaux, à travailler en équipe et à être autonome.",
            "Ce premier emploie m'a appris le savoir-faire en entreprise.",
        ],
    },
    {
        title: "Cuisinier",
        company_name: "Bim bim bap",
        icon: cook,
        iconBg: "#E6DEDD",
        date: "Janvier 2021 - Juin 2021",
        points: [
            "Je travaillais en cuisine mais aussi au comptoir dans un restaurant de cuisine coréenne à Berlin.",
            "Le plus gros défi était de communiquer en anglais et en allemand avec mes collègues ainsi qu'avec les clients.",
            ],
    },
    {
        title: "Developpeur web",
        company_name: "Perceptions",
        icon: perceptions,
        iconBg: "#383E56",
        date: "Février 2023 - Avril 2023",
        points: [
            "J'ai occupé le poste de développeur web au sein d'une entreprise spécialisée dans les formations visant à améliorer le savoir-être professionnel.",
            "J'ai travaillé sur le site web de l'entreprise, en utilisant les technologies HTML, CSS, PHP avec Slim et MySQL.",
            "Le principal défi résidait dans le fait que je travaillais en autonomie, étant donné qu'il n'y avait pas d'autres développeurs au sein de l'entreprise. Par conséquent, j'ai dû me débrouiller seul pour résoudre les problèmes techniques.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "NetRadio",
        description:
            "Net Radio est une application de radio qui permet principalement d’écouter la radio en direct. La diffusion en direct est organisée selon un calendrier qu’il est possible de consulter, et qui détaille les créneaux réservés aux différentes émissions. L’application permet également d’écouter des épisodes qui ont déjà été diffusés. ",
        tags: [
            {
                name: "VueJS",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/ElianThe/NetRadio",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
