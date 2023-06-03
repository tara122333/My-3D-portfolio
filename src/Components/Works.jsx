import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                  alt='source code'
                  className='w-3/4 h-3/4 object-contain rounded-full'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-text-green font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };


const Works = () => {

    const projects = [
        {
          name: "Car Rent",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          tags: [
            {
              name: "react",
              color: "blue-text-gradient",
            },
            {
              name: "mongodb",
              color: "green-text-gradient",
            },
            {
              name: "tailwind",
              color: "pink-text-gradient",
            },
          ],
          image: "https://tara122333.github.io/tara-portfolio-MERN/static/media/resume.c20d7d57acb441d8cffb.png",
          source_code_link: "https://github.com/",
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
          image: "https://tara122333.github.io/tara-portfolio-MERN/static/media/resume.c20d7d57acb441d8cffb.png",
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
          image: "https://tara122333.github.io/tara-portfolio-MERN/static/media/resume.c20d7d57acb441d8cffb.png",
          source_code_link: "https://github.com/",
        },
      ];

  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
            </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Works, "");
