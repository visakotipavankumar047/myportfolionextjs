
"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/me.JPEG"
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                           My name is Pavan Kumar Visakoti. Iam a UI/UX Designer and Front-developer was Primary
                            and I took the course of Java Full-stack developer. I did my Bachelor&apos;s in Computer Science
                            and I did an Internship in Front-end and Freelancing in UI/UX Designing. I am good at FIGMA, Penpot,
                            GIMP. I learned some no code software&apos;s like FlutterFlow and Bubble.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            Stay Hungry and Stay Foolish
                         </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end">
                            <svg version="1.1" viewBox="0 0 3280 800" width="185" height="77"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path transform="translate(1618,136)"
                                      d="m0 0h7l5 3 1 1v26l-1 73-2 99v80l8-20 9-17 9-13 8-9 10-7 10-4 5-1h7l10 3 9 6 7 10 2 6v16l-4 11-8 11-8 8-12 8-19 8-3 1 2 5 5 5 7 5 9 3 10 1 16-2 12-5 9-6 13-11 11-14 9-16 10-21 5-12 6-11 4-5 4-1 8 3 2 2-1 7-8 16-5 14-3 13-1 8v12l2 10 5 8 4 3 11 2 10-3 9-7 6-8 5-10 3-14 4-41 2-8 3-2 9 1 4 3v10l-2 26v24l3 13 5 10 6 5 4 2h12l12-6 10-9 9-12 9-16 11-24 11-21 7-9 8-7 5-2h9l6 4 4 5 3 9v38l-1 22v18l12-23 14-24 11-18 11-12 12-6 4-1h8l7 3 5 5 3 5 3 8v40l-1 20 15-28 14-24 9-13 8-8 10-6 8-2h10l9 4 6 7 4 9 1 6v13l-2 19v20l3 11 4 4 10 2 10-3 8-5 10-9 11-16 10-18 7-12 12-16 8-8 13-8 12-4 5-1h16l10 3 10 5 6 5 2 4-1 6-5 5h-5l-14-8-8-2h-9l-8 2-12 6-7 6-7 11-5 12-2 8v16l3 10 5 6 9 3 8-1 10-5 7-7 7-12 4-13 3-12 4-4h6l5 3 1 2 3 25 5 15 7 8 5 2h11l12-6 13-13 10-15 12-23 4-9 4-15h-10l-9-3-5-6v-11l5-14 7-12 7-7 4-2h6l7 6 4 8 3 14v9l14-1 15 2 6 4 5 5 2 6v23l-3 21v22l5 10 7 6 6 2h9l11-4 9-7 11-11 9-13 9-15 6-11 2-2h7l5 3 2 4-4 10-9 16-8 12-9 11-9 10-14 10-14 5h-18l-11-4-10-9-6-10-4-11v-27l3-22v-16l-6-1h-20l-1 9-5 19-14 26-7 10-11 14-9 9-14 9-13 4h-9l-10-3-6-4-7-7-8-14h-2l-6 8-10 10-9 5-8 3h-15l-11-4-8-7-6-10-4-10-5 5-12 13-12 9-12 5-5 1h-10l-10-3-8-6-5-7-4-12-1-8v-18l2-30-2-8-1-2-8-1-9 6-8 9-11 18-13 24-12 23-6 10-2 3h-2v2l-5 3-9-1-5-6-1-2v-32l1-20v-34l-1-3h-7l-7 4-9 12-12 20-16 29-9 17-7 9-8 4-10-2-4-5-1-2v-22l2-46v-30l-6 5-6 10-8 17-11 23-10 16-12 16h-2v2h-2v2l-12 9-11 5-8 2h-10l-10-3-9-6-8-11-4-8-5 5-8 9-11 8-10 4h-15l-11-4-8-6-7-11-4-13-1-4-6 8-11 12-13 10-10 6-13 5-14 3h-12l-14-3-12-6-10-9-6-10-2-5v-10l4-6 8-4 17-7 11-7 5-5 6-8 2-7v-10l-3-6-5-3h-11l-8 4-7 6-9 12-9 16-7 15-7 19-7 23-4 8-4 3h-8l-5-4-1-3-1-37-10 14-11 12-13 9-10 4-5 1h-10l-11-4-7-6-7-14-2-10v-25l1-9v-22l-2-4-6-1-8 6-8 9-12 18-10 17-6 12-10 19-7 10-8 4-8-1-6-4-3-5v-15l4-44 1-27v-11l-4 3h-2l-2 5-6 10-10 23-13 23-10 14-9 10-7 7-11 7-10 4-5 1h-9l-10-3-8-6-6-7-5-9-3-4-6 9h-2l-2 4-8 7-10 5-6 2h-14l-10-3-10-9-6-9-4-13v-10l1-2-9 2h-14l-11-4-9-6-8-7-10-13h-1l-3 12-6 16-10 19-10 14-6 7-11 7-2 1h-7l-8-4-10-10-7-11-6-12-2-8h-3l-10 15-12 13-9 8-14 7-8 2h-9l-10-3-8-6-7-8-6-11-5 5-2 3h-2l-2 4-8 7-10 5-6 2h-14l-10-3-10-9-6-9-3-9-3 1-7 8-4 5h-2v2l-14 11-15 8-16 4h-22l-15-4-10-5-9-7-8-9-2-4v-7l6-5 6 1 5 4 6 7 5 2 9-1 8-4 5-4 7-11 4-12 1-5v-26l-4-9-3-5-6-3h-7l-6 3-7 7-9 13-12 21-12 23-1 14-1 63-3 63-4 40-4 26-6 23-6 15-7 11-9 8-10 4h-11l-8-3-5-4-5-7-5-14-1-6v-28l4-29 8-36 7-25 12-35 12-30 13-30 10-21 2-32-5 2-7-1-4-4v-6l9-27 5-23 2-18 2-5 2-1 10 1 3 3 1 74 10-16 12-17 7-7 8-5 6-2h14l9 4 7 6 5 7 5 13 2 13v12l-2 14-4 13-9 16-10 10 9-1 13-4 12-7 13-12 9-11 12-20 6-11 12-17 10-11 11-7 8-4 13-3h15l13 4 10 6 5 6-1 7-5 5-6-1-10-6-10-3h-10l-13 4-9 6-7 7-7 12-4 12-1 17 2 10 5 8 7 3 7 1 11-4 8-6 7-11 4-8 4-18 4-6 1-1h6l6 4 4 29 4 11 6 8 6 3h11l9-4 10-8 10-12 11-18 6-13 3-25 5-16 2-2h10l4 3v7l-4 14v19l2 16 4 15 8 16 6 7 5 2 7-5 10-15 8-16 6-16 4-17 2-18 1-17 3-3h10l4 8 7 20 7 14 7 9 9 7 11 3 10-2 4-3h2l2-5 12-16 9-11 10-8 13-6 12-3h15l13 4 10 6 5 6-1 7-5 5-6-1-10-6-10-3h-10l-13 4-9 6-7 7-6 10-5 14-1 8v10l2 9 5 8 6 3 8 1 9-3 9-6 7-10 5-10 4-18 4-6 1-1h6l6 4 4 29 5 13 5 6 6 3h11l9-4 10-8 10-12 9-15 8-16 12-25 9-14 7-8 7-4h9l6 3 6 8 2 6 1 16-2 35-2 28 13-24 13-21 10-15 8-10 8-8 10-5 3-1h10l9 4 6 9 3 8v22l-1 12v23l3 10 5 5 2 1h10l9-4 10-8 7-8 9-13 10-18 4-12 3-167 1-76 2-5zm803 199-5 8-2 4v3l3 1h7l1-1v-10l-2-5zm-1346 85m534 5m638 7m-249 8m-1246 34-10 23-11 29-9 27-10 37-5 24-4 27v30l3 8 5 5 8 1 9-6 6-12 5-15 5-27 4-31 3-39 2-52v-29z"/>
                                <path transform="translate(1628,412)" d="m0 0"/>
                                <path transform="translate(2422,336)" d="m0 0"/>
                            </svg>


                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{x: "-300px"}}
                            animate={isSkillRefInView ? {x: 0} : {}}
                            transition={{delay: 0.2}}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{x: "-300px"}}
                            animate={isSkillRefInView ? {x: 0} : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML/CSS
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Python
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MongoDB
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Spring Boot
                            </div>

                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Framer Motion
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Vite
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Firebase
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Figma
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PenPot
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                FlutterFlow
                            </div>
                            <div
                                className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Bubble
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        FreeLance UI/UX Designer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I led web development and made some good UI designs{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        FreeLance
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Front-End Developer Intern
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2023-2023{" "} (6Months)
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Soft Network Solutions, Hyderabad
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;