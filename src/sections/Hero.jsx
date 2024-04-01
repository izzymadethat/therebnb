import { useState } from "react";
import BgVideo from "../components/BgVideo";
import { vacationTypes } from "../constants";

// function HeroForm() {
//   return (

//   )
// }
const styles = {
  formControl: "flex flex-col gap-2",
  input:
    "rounded-lg px-6 w-full py-2 outline-none border-none font-semibold text-blue-600",
  slider: "w-full outline-none border-none text-blue-600 px-0 py-2",
  label: "text-sm font-semibold my-2",
  button:
    "px-6 py-2 mt-10 bg-gradient-to-r from-blue-600/60 to-blue-600 text-neutral-100 tracking-wider rounded-lg font-semibold",
};

export default function Hero() {
  const [sliderVal, setSliderVal] = useState(1500);

  function handleChangeSliderValue(e) {
    setSliderVal(parseInt(e.target.value));
  }

  return (
    <main className="min-h-[90vh] max-h-screen flex flex-col justify-center px-96 bg-blue-950/75 relative overflow-hidden">
      <BgVideo />

      <div className="mb-2 text-neutral-300">
        <h3 className="text-lg tracking-widest">Our Packages</h3>
        <h2 className="text-5xl">
          Go There.{" "}
          <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
            Be There.
          </span>
        </h2>
      </div>

      <div className="w-full bg-neutral-100 min-h-48 max-w-7xl mx-auto rounded-md border flex gap-2 drop-shadow-md  items-center">
        <form className="w-full flex items-center justify-center gap-4">
          <div className={styles.formControl}>
            <label className={styles.label}>Destination:</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Vacation Type:</label>
            <select className={styles.input}>
              {vacationTypes.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formControl}>
            <label className={styles.label}>Be There Date:</label>
            <input type="date" className={styles.input} />
          </div>
          <div className={styles.formControl}>
            <div className="flex justify-between items-center">
              <label className={styles.label}>Max Price:</label>
              <span className="font-bold">${sliderVal}</span>
            </div>
            <input
              type="range"
              min={500}
              max={25000}
              step={100}
              defaultValue={sliderVal}
              onChange={handleChangeSliderValue}
              className={styles.slider}
            />
          </div>
          <button type="submit" className={styles.button}>
            Find a Stay
          </button>
        </form>
      </div>
    </main>
  );
}
