import { IProject } from "@/global/interface";

export const projects: IProject[] = [
    {
        id: 1,
        projectName: "TEX",
        projectDescription: "An adaptable healthcare management solution that empowers users to seamlessly record diverse sets of data. The primary objective of this system is to supplant traditional paper records, facilitating a comprehensive shift towards a fully digitalized information repository. Alongside efficient data storage, it offers an advanced appointment module, enabling practitioners to effectively manage their patients' scheduling.",
        imageUrl: '/images/mclinic.png',
        technologies: ["Flutter", "Dart"],
        gallery: ["/images/cms/1.png", "/images/cms/2.png", "/images/cms/3.png", "/images/cms/4.png", "/images/cms/5.png", "/images/cms/6.png", "/images/cms/7.png"],
    },
    {
        id: 2,
        projectName: "TR-V2",
        projectDescription: "A mobile application to facilitate user communication within Vendron Cloud ecosystem, which enables access and key information in real time",
        imageUrl: '/images/vop.png',
        technologies: ["React.js", "PHP", "Laravel", "Typescript"],
        gallery: ["/images/vop/1.png", "/images/vop/2.png", "/images/vop/3.png", "/images/vop/4.png", "/images/vop/5.png", "/images/vop/6.png"]
    },
    {
        id: 3,
        projectName: "uHoo",
        projectDescription: "an integrated novel reading and publishing platform, featuring a React Native mobile application for readers and a PHP Laravel and React.js powered backend for authors and administrators. The mobile app offers a seamless reading experience with features like bookmarks and customizable settings, while the author backend enables writers to publish and manage their novels. Simultaneously, the admin backend, developed using a combination of React.js and PHP Laravel, facilitates content moderation and overall platform management, creating a comprehensive ecosystem for novel enthusiasts and authors alike.",
        imageUrl: '/images/vapr.png',
        technologies: ["React Native", "React.js", "PHP", "Laravel"],
        gallery: ["/images/vapr/1.png", "/images/vapr/2.png", "/images/vapr/3.png", "/images/vapr/4.png", "/images/vapr/5.png"]
    },
]