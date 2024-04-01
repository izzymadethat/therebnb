import { CiLocationOn } from "react-icons/ci";
import { FaClipboard } from "react-icons/fa";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export default function DestinationCard({
  destination,
  onModalOpenClick,
  onModalClose,
  modalStyles,
  modalValue,
}) {
  return (
    <div className="w-80 space-y-2">
      <div className="w-full">
        <img src={destination.imgSrc} alt={destination.title} />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{destination.title}</h3>
        <span className="flex gap-2 items-center font-light">
          {destination.location}
          <CiLocationOn />
        </span>
      </div>
      <p>{destination.description}</p>
      <div className="w-full flex flex-col gap-2">
        <span className="font-bold text-sm text-center">
          {destination.vacationType.join(", ")}
        </span>
      </div>
      <div>
        <button
          className="flex gap-2 items-center w-full justify-center bg-blue-600 rounded-md py-2 text-neutral-100 font-bold tracking-wider"
          onClick={onModalOpenClick}
        >
          <span>Details</span> <FaClipboard />
        </button>

        {modalValue && (
          <ReactModal
            isOpen={onModalOpenClick}
            onRequestClose={onModalClose}
            style={modalStyles}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Be there: {destination.title}</h4>
              <button onClick={onModalClose}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="w-64 flex mx-auto mt-3">
              <img src={destination.imgSrc} alt="" />
            </div>

            <div>
              <h4 className="text-2xl font-bold my-4 text-center">Pricing:</h4>
              <div className="grid grid-cols-3 gap-2 items-center">
                {Object.keys(destination.total).map((price) => {
                  let formattedPriceTitle = price.split("_").join(" ");

                  let title =
                    formattedPriceTitle[0].toUpperCase() +
                    formattedPriceTitle.slice(1);

                  return (
                    <div
                      key={price}
                      className="flex flex-col justify-center items-center w-full"
                    >
                      <span className="font-bold">{title}: </span>
                      <span>${destination.total[price]}.00</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ReactModal>
        )}
      </div>
    </div>
  );
}
