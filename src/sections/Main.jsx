import { popularDestinations } from "../constants";
import { DestinationCard } from "../components";
import { useState } from "react";

const modalStyes = {
  overlay: {
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    zIndex: 1000,
    position: "fixed",
    backgroundColor: "rgba(255, 255, 255, 0.20)",
  },
};

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <main className="container mx-auto my-10">
      <div className="mb-8">
        <h3 className="text-4xl font-bold">Most Visited Destinations</h3>
      </div>

      <div className="grid grid-cols-3 gap-y-6">
        {popularDestinations.map((destination, index) => (
          <DestinationCard
            key={index}
            destination={destination}
            onModalOpenClick={openModal}
            onModalClose={closeModal}
            modalStyles={modalStyes}
            modalValue={modalOpen}
          />
        ))}
      </div>
    </main>
  );
}
