import { Link } from "react-router-dom";
import { footerLinks, lastMinuteTrips, partnerLinks } from "../constants";
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-blue-200">
      <footer className=" py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 max-w-7xl mx-auto">
            {/* Footer Links */}
            <div>
              <h4 className="underline text-xl">ThereBnb</h4>

              <ul className="list-none font-bold">
                {footerLinks.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <li className="hover:text-blue-600 transition-all duration-300">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Partner Links */}

            <div>
              <h4 className="underline text-xl">Proud Partners</h4>

              <ul className="list-none font-bold">
                {partnerLinks.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <li className="hover:text-blue-600 transition-all duration-300">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Last minute trips */}

            <div>
              <h4 className="underline text-xl">Last Minute Trips</h4>

              <ul className="list-none font-bold">
                {lastMinuteTrips.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <li className="hover:text-blue-600 transition-all duration-300">
                      {item.destination}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* copy right and social links */}
      <div className="flex justify-between items-center px-12">
        <p className="font-bold text-sm">
          Copyright &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex gap-2 items-center text-lg text-blue-600">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaTripadvisor />
        </div>
      </div>
    </section>
  );
}
