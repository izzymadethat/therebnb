export default function Contact() {
  return (
    <section className="bg-blue-400 min-h-[25vw] relative">
      <div className="container mx-auto flex flex-col items-center justify-center absolute top-0 bottom-0 left-0 right-0">
        <div className="bg-blue-100/20 w-full max-w-4xl rounded-md min-h-60 flex flex-col justify-center items-center p-4 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Contact us</h1>
          <form className="w-1/2 mx-auto">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="First Name..."
                className="rounded-md p-2 text-blue-600 border-none outline-none"
              />
              <input
                type="text"
                placeholder="Last Name..."
                className="rounded-md p-2 text-blue-600 border-none outline-none"
              />
              <textarea
                className="rounded-md p-2 text-blue-600 border-none outline-none"
                placeholder="Your message..."
              ></textarea>
              <button className="bg-neutral-100 px-4 py-2 rounded-lg hover:bg-blue-400 font-bold transition-all duration-300">
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
