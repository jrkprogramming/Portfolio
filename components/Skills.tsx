import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  directionLeft?: boolean;
};

const Skills = ({ directionLeft }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-40 uppercase tracking-[3px] text-gray-500 text-xs">
        my current development stack
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-20">
        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://usefulangle.com/img/thumb/javascript.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                JavaScript
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                TypeScript
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-116622246089xqzopcuvg.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">HTML5</p>
            </div>
          </div>
        </div>
        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXZPle_VMPxudU3icf_8r_sy6JWVyyUvMTw&usqp=CAU"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">CSS3</p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                React.js
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://ih1.redbubble.net/image.300214116.5791/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">Redux</p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://kyan-2015.s3.eu-west-1.amazonaws.com/production-2018/uploads/news_entry/image/255/medium_news_size_next-js-header.jpg"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Next.js
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                TailwindCSS
              </p>
            </div>
          </div>
        </div>

        {/* <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Bootstrap
              </p>
            </div>
          </div>
        </div> */}

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.pngitem.com/pimgs/m/80-800968_vscode-visual-studio-logo-png-transparent-png.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                VS Code
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Node.js
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                MongoDB
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V9h0YPPf0o-faAi5mrr7-x3ZjkgcdCkPKA&usqp=CAU"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Postgresql
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://p.kindpng.com/picc/s/159-1595848_python-logo-png-transparent-background-python-logo-png.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Python
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://banner2.cleanpng.com/20180711/rtc/kisspng-django-web-development-web-framework-python-softwa-django-5b45d913f29027.4888902515313042119936.jpg"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Django
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                Firebase
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex cursor-pointer group">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="data:image/png;base64,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"
            className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-1xl">
                DynamoDB S3
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
