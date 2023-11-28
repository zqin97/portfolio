import { ChakraProps, SlideDirection, StackProps } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface ISlideViewProps extends HTMLMotionProps<'div'> {
    children: ReactNode,
    direction: SlideDirection,
    delay?: number,
    duration?: string | number,
    visibleThreshold?: number
}

export interface IStaggeredGroupProps extends StackProps{
    item: ReactNode,
    staggerInterval: number,
    childAnimationDuration: number,
    delay: number,
    children?: ReactNode
}

export interface IJobDetail {
    companyName: string;
    companyLink?: string;
    companyAddress: string;
    positionTitle: string;
    dateRange: string;
    description: Array<string>;
    technologies: Array<string>
}

export interface IExternal {
    isGithub: boolean,
    link: string
  }

export interface IProject {
    id: number,
    projectName: string,
    projectDescription: string,
    imageUrl: string,
    technologies: Array<string>,
    gallery?: Array<string>,
    external?: Array<IExternal>,
  }
  