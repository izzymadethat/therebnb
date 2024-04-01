import bgVideo from "../assets/videos/header-vid.mp4";

export default function BgVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full z-[-1] opacity-60 blur-sm"
    >
      <source src={bgVideo} />
    </video>
  );
}
