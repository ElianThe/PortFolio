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
    mcdonalds,
    cook,
    threejs,
    perceptions,
    pmb, expo, backendFastLearning, netradio, frontfastlearning, iconFastlearning

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
        icon: expo,
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
        name: "php",
        icon: backend,
    },
    {
        name: 'vueJS',
        icon: web
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
    {
        name: "Expo",
        icon: expo
    }
];

const experiences = [
    {
        title: "Développeur d'Application Mobile",
        company_name: "Projet Personnel - Fast Learning",
        icon: iconFastlearning,
        iconBg: "#E6DEDD",
        date: "Août 2024 - Présent",
        points: [
            "J'ai créé et développé ma propre application mobile, Fast Learning, un outil d'apprentissage utilisant la méthode des répétitions espacées pour favoriser la mémorisation durable.",
            "L'application permet aux utilisateurs de consacrer 10 minutes par jour à l'apprentissage grâce à des cartes mémoire interactives, optimisant ainsi l'efficacité et la rétention des connaissances.",
            "J'ai donc commencé par la conception de l'ensemble des fonctionnalités et des maquettes de l'application, suivi du développement du front-end mobile ainsi que de l'API qui alimente l'application.",
            "Le code source de l'application est accessible dans la section MES PROJETS pour vous permettre de mieux comprendre les technologies et les méthodes de développement utilisées."
        ],
    },
    {
        title: "Développeur Web",
        company_name: "PMB Software",
        icon: pmb,
        iconBg: "#383E56",
        date: "Mai 2024 - Juillet 2024",
        points: [
            "J'ai occupé le poste de développeur fullstack au sein d'une société spécialisée dans le développement de logiciels métiers pour le bâtiment.",
            "J'ai contribué au développement et à l'amélioration du back-office de leur application principale, Constéo, en utilisant un ensemble de technologies incluant HTML, CSS, PHP (avec le framework Laravel), Blade, JavaScript, et MySQL.",
            "Mes missions principales consistaient à créer des fonctionnalités visant à faciliter le travail des techniciens support. Parmi celles-ci, j'ai développé une interface permettant de visualiser l'ensemble des entreprises utilisatrices du logiciel, de modifier directement les informations dans la base de données, et de gérer la facturation des entreprises. Cette dernière tâche impliquait l'intégration de l'application avec Dolibarr, un ERP, afin de simplifier le processus de facturation."
        ],
    },
    {
        title: "Développeur Web",
        company_name: "Perceptions",
        icon: perceptions,
        iconBg: "#383E56",
        date: "Février 2023 - Avril 2023",
        points: [
            "J'ai occupé le poste de développeur web au sein d'une entreprise spécialisée dans les formations visant à améliorer le savoir-être professionnel.",
            "Dans ce rôle, j'ai été responsable du développement du site web de l'entreprise, en utilisant un ensemble de technologies comprenant HTML, CSS, PHP (avec le framework Slim), et MySQL.",
            "Le principal défi de cette expérience résidait dans le fait que j'étais le seul développeur au sein de l'entreprise, ce qui m'a conduit à travailler en totale autonomie. J'ai ainsi dû gérer l'ensemble des aspects techniques du projet, de la conception à la résolution des problèmes sans appui technique interne.",
        ],
    },
    {
        title: "Cuisinier",
        company_name: "Bim bim bap",
        icon: cook,
        iconBg: "#E6DEDD",
        date: "Janvier 2021 - Juin 2021",
        points: [
            "J'ai travaillé à la fois en cuisine et au comptoir dans un restaurant de cuisine coréenne à Berlin.",
            "Mon rôle consistait non seulement à préparer des plats, mais aussi à interagir avec les clients pour prendre leurs commandes.",
            "Le principal défi de cette expérience résidait dans la communication, car j'étais amené à échanger en anglais et en allemand avec mes collègues ainsi qu'avec les clients.",
        ],
    },
    {
        title: "Équipier polyvalent",
        company_name: "McDonald's",
        icon: mcdonalds,
        iconBg: "#DA291C",
        date: "Juillet 2018 - Juin 2019",
        points: [
            "En classe de Première S, j'ai travaillé 12h par semaine chez McDonald's en tant qu'équipier polyvalent durant toute l'année.",
            "Mes responsabilités incluaient les préparations des commandes en cuisine, le nettoyage des locaux ainsi que le travail en équipe.",
            "Cette première expérience professionnelle m'a permis d'être plus autonome. Elle m'a également initié aux bonnes pratiques du savoir-être en entreprise.",
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
        name: "Back-end Fast Learning",
        description:
            "Développée en Laravel avec l’ORM Eloquent, cette API permet une gestion des données. Elle est déployée dans un environnement Docker pour simplifier le déploiement et la maintenance. J’ai utilisé Swagger pour offrir une documentation simple et claire, essentielle pour les développeurs et les futures évolutions du projet.",
        tags: [
            {
                name: "Laravel",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "swagger",
                color: "pink-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient"
            }
        ],
        image: backendFastLearning,
        source_code_link: "https://api-fast-learning.fr/api/documentation",
        second_link : "https://github.com/ElianThe/api-fastlearning"
    },
    {
        name: "L'application mobile de Fast Learning",
        description:
        "L’application mobile Fast Learning est développée en React Native avec le framework Expo. Elle est déjà disponible sur l'App Store. Pour garantir la qualité et la maintenabilité du code, j'ai intégré ESLint et Prettier, assurant une base de code propre et cohérente. TypeScript est également utilisé pour renforcer la lisibilité et la fiabilité du code",
        tags: [
            {
                name: "Expo | React Native",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "eslint | prettier",
                color: "pink-text-gradient",
            },
        ],
        image: frontfastlearning,
        source_code_link: "https://github.com/ElianThe/fastLearning_front",
    },
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
        image: netradio,
        source_code_link: "https://github.com/ElianThe/NetRadio",
    },
];

export {services, technologies, experiences, testimonials, projects};
