import { motion } from "motion/react";
const App = () => {
  return (
    <div className="w-full h-screen bg-black p-1 text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="w-40 h-40 bg-emerald-500 m-4"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ backgroundColor: "rgb(255, 0, 0)" }}
        onHoverStart={() => console.log("hover started!")}
      >
        Button
      </motion.button>
      {/* <motion.h1 className=" inline-block" animate={{ x: 100 }}>hey</motion.h1> */}
    </div>
  );
};

export default App;
