/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen max-w-full mx-auto overflow-hidden text-lft md:flex-row px10 justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* {projects.map((project, i) => ( */}
        <div
          // key={i}
          className="flex flex-col items-center justify-center flex-shrink-0 w-screen p-20 mt-10 space-y-5 snap-center md:p-44"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            // viewport={{ once: true }}
            src="https://github.com/jrkprogramming/PlantShop-Frontend/raw/main/assets/OrderDetailsPage.png"
            alt=""
            className="max-w-4xl"
          />
          <div className="max-w-6xl px-0 space-y-10 md:px-10">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                {/* Project {i + 1} of {projects.length}: */}
                Project 1 of 4
              </span>{' '}
              <br></br>
              Plants 'N Such
            </h4>

            <p className="text-lg text-center md:text-left">
              Plants 'N Such is the name of my mothers small business and this ecommerce application is created to help her manage her orders and allows her customers to browse and purchase her
              products online.
            </p>
          </div>
          {/* Button Links */}
          <div>
            <a
              type="button"
              href="https://plantshop-frontend.herokuapp.com"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-80"
            >
              <button>Demo</button>
            </a>
            <a
              type="button"
              href="https://github.com/jrkprogramming/PlantShop-Frontend"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        {/* ))} */}

        <div
          // key={i}
          className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 mt-20 space-y-5 snap-center md:p-44"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            // viewport={{ once: true }}
            src="https://github.com/JMMZ-GA/Project-3-UI/raw/main/assets/pinit_homemapPage.png"
            alt=""
            className="max-w-4xl"
          />
          <div className="max-w-6xl px-0 space-y-10 md:px-10">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                {/* Project {i + 1} of {projects.length}: */}
                Project 2 of 4
              </span>{' '}
              <br></br>
              PinIt
            </h4>

            <p className="text-lg text-center md:text-left">
              Have you ever planned to travel to a location and want to find the best spots around? PinIt is a social app that utilizes the Google Maps API to allow users to keep a log of their
              favorite places. Users can place pins for these locations and see where other users have pinned locations. You can add descriptions and images to their pins to personlize them. The
              Google Maps API allows users to search for specific addresses and also click exactly where they want their pin to be located.
            </p>
          </div>
          <div>
            <a
              type="button"
              href="https://jmmz-ga-p3places-ui.herokuapp.com/"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-80"
            >
              <button>Demo</button>
            </a>
            <a
              type="button"
              href="https://github.com/jrkprogramming/PinIt-Frontend"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        {/* ))} */}
        <div
          // key={i}
          className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 mt-20 space-y-5 snap-center md:p-44"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            // viewport={{ once: true }}
            src="https://github.com/jrkprogramming/MealPrepApp/raw/master/assets/mealPrepApp_Index.png"
            alt=""
            className="max-w-4xl"
          />
          <div className="max-w-6xl px-0 space-y-10 md:px-10">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                {/* Project {i + 1} of {projects.length}: */}
                Project 3 of 4
              </span>{' '}
              <br></br>
              Recipe Keeper
            </h4>

            <p className="text-lg text-center md:text-left">
              This is an application that will allow users to log in and post their favorite meal preps. The recipes will have instructions and a list of ingredients to prepare the meals.
            </p>
          </div>
          <div>
            <a
              type="button"
              href=""
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-80"
            >
              <button>Demo</button>
            </a>
            <a
              type="button"
              href="https://github.com/jrkprogramming/MealPrepApp"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        {/* ))} */}
        <div
          // key={i}
          className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 mt-20 space-y-5 snap-center md:p-44"
        >
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            // viewport={{ once: true }}
            src="https://github.com/jrkprogramming/PokemonBattleArena/raw/master/assets/welcomeScreen.png"
            alt=""
            className="max-w-4xl"
          />
          <div className="max-w-6xl px-0 space-y-10 md:px-10">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                {/* Project {i + 1} of {projects.length}: */}
                Project 4 of 4
              </span>{' '}
              <br></br>
              Pokemon Battle Arena
            </h4>

            <p className="text-lg text-center md:text-left">
              Pokemon arena game where a user can select 3 pokemon and choose 4 moves. The user can battle the pokemon they choose and also choose the Pokemon and moves they go against. When a pokemon
              reaches 0 HP, the pokemon faints and the user sends out the next pokemon to fight in the arena. Once there is a winner or a loser, the site needs to be refreshed and the game will
              restart and User can select Pokemon again. (All Pokemon and moves are available)
            </p>
          </div>
          <div>
            <a
              type="button"
              href="https://jrkprogramming.github.io/PokemonBattleArena/"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-80"
            >
              <button>Demo</button>
            </a>
            <a
              type="button"
              href="https://github.com/jrkprogramming/PokemonBattleArena"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        {/* ))} */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
