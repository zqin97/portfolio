import { IProject } from "@/global/interface";

export const projects: IProject[] = [
    {
        id: 1,
        projectName: "TEX",
        projectDescription: "An mobile application to facilitate user currency exchange within cryptocurrency trading platform",
        imageUrl: '',
        technologies: ["Flutter", "Dart"],
        gallery: ["/images/tex/1.png", "/images/tex/2.png", "/images/tex/3.png", "/images/tex/4.png", "/images/cms/5.png", "/images/cms/6.png", "/images/cms/7.png"],
    },
    {
        id: 2,
        projectName: "TR-V2",
        projectDescription: "A mobile application to facilitate user communication within Vendron Cloud ecosystem, which enables access and key information in real time",
        imageUrl: '',
        technologies: ["React.js", "PHP", "Laravel", "Typescript"],
        gallery: ["/images/tr-v2/1.png", "/images/tr-v2/2.png", "/images/tr-v2/3.png", "/images/tr-v2/4.png", "/images/tr-v2/5.png", "/images/vop/6.png"]
    },
    {
        id: 3,
        projectName: "uHoo",
        projectDescription: "an integrated novel reading and publishing platform, featuring a React Native mobile application for readers and a PHP Laravel and React.js powered backend for authors and administrators. The mobile app offers a seamless reading experience with features like bookmarks and customizable settings, while the author backend enables writers to publish and manage their novels. Simultaneously, the admin backend, developed using a combination of React.js and PHP Laravel, facilitates content moderation and overall platform management, creating a comprehensive ecosystem for novel enthusiasts and authors alike.",
        imageUrl: '',
        technologies: ["React Native", "React.js", "PHP", "Laravel"],
        gallery: ["/images/uhoo/1.png", "/images/uhoo/2.png", "/images/uhoo/3.png", "/images/uhoo/4.png", "/images/uhoo/5.png"]
    },
]