import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../Store";
import { CustomButton } from "../Components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./ZZZ.png"
              alt="logo"
              className=" max-w-md h-24 object-contain"
            />
          </motion.header>

          <motion.div {...headTextAnimation}>
            <h1 className=" head-text  ">
              <h3 className=" text-cyan-200  text-6xl overline hover:overline-red-30 ">
                RADHEEE
              </h3>

              <h4 className=" text-cyan-300">SHYAM </h4>
            </h1>
          </motion.div>

          <motion.div
            {...headContentAnimation}
            className=" flex flex-col gap-50"
          >
            <p className=" text-gray-500 mb-10 ">
              <strong>UNLEASH YOUR IMAGINATION</strong>
              <br />
              and define your own style...
              <strong className="  hover:decoration-blue-40 text-rose-300 text-2xl">
                WITH K r I s H a N
              </strong>
            </p>
            <CustomButton
              type="filled"
              title="O p E n M e"
              handleClick={() => (state.intro = false)}
              customStyles=" w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
