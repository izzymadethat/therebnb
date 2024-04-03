import { useState } from "react";
import BgVideo from "../components/BgVideo";
import { vacationPackages } from "../constants";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { TbApps } from "react-icons/tb";

// function HeroForm() {
//   return (

//   )
// }
const styles = {
  formControl: "flex flex-col gap-2 w-full justify-center",
  input:
    "rounded-lg px-6 w-full py-2 outline-none border-none font-semibold text-blue-600",
  icon: "absolute right-2 size-5 text-blue-600",
  slider: "w-full outline-none border-none text-blue-600",
  label: "text-sm font-semibold my-2",
  button:
    "px-6 py-2 mt-10 bg-gradient-to-r from-blue-600/60 to-blue-600 text-neutral-100 tracking-wider rounded-lg font-semibold w-full text-xl",
};

export default function Hero() {
  const [formData, setFormData] = useState({
    destination: "",
    vacationType: "",
    date: "",
    maxPrice: 1500,
  });

  function handleClearForm() {
    setFormData({
      destination: "",
      vacationType: "",
      date: "",
      maxPrice: 1500,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { destination, vacationType, date, maxPrice } = formData;

    if (!destination || !date) return alert("Pick a destination or date!");

    console.log("Form Data Received: ", formData);
  }

  return (
    <section className="min-h-[90vh] max-h-screen flex flex-col justify-center px-96 mx-auto bg-blue-950/75 relative overflow-hidden">
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

      <div className="w-full bg-neutral-100 bg-opacity-70 min-h-48 max-w-[1500px] mx-auto rounded-md border flex gap-2 drop-shadow-md  items-center">
        <form className="w-full gap-4 px-8 my-4" onSubmit={handleFormSubmit}>
          <div className="flex gap-2">
            <div className={styles.formControl}>
              <label className={styles.label}>Destination:</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className={styles.input}
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                />
                <CiLocationOn className="absolute right-2 size-5 text-blue-600" />
              </div>
            </div>
            <div className={styles.formControl}>
              <label className={styles.label}>Vacation Type:</label>
              <select
                className={styles.input}
                defaultValue={formData.vacationType}
                onChange={(e) =>
                  setFormData({ ...formData, vacationType: e.target.value })
                }
              >
                {vacationPackages.map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formControl}>
              <label className={styles.label}>Be There Date:</label>
              <input
                type="date"
                className={styles.input}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div className={styles.formControl}>
              <div className="flex justify-between items-center">
                <label className={styles.label}>Max Price:</label>
                <span className="font-bold">${formData.maxPrice}</span>
              </div>
              <input
                type="range"
                min={500}
                max={25000}
                step={100}
                defaultValue={formData.maxPrice}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maxPrice: parseInt(e.target.value),
                  })
                }
                className={styles.slider}
              />
            </div>
          </div>
          <div className="ml-6 flex flex-col items-center">
            <button type="submit" className={styles.button}>
              Find a Stay
            </button>
            <button
              type="button"
              className="border-blue-600 font-bold rounded-md px-6 py-2 text-sm"
              onClick={handleClearForm}
            >
              Clear Fields
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-between items-center text-neutral-100 mt-8">
        <div className="flex gap-4 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTripadvisor />
        </div>

        <div className="flex gap-4 text-xl">
          <PiListBulletsBold />
          <TbApps />
        </div>
      </div>
    </section>
  );
}
