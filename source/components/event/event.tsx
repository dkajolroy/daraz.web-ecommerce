import Image from "next/image";

function Event() {
  return (
    <div className={`flex overflow-hidden rounded-b-3xl items-center md:mx-20`}>
      <Image
        className="w-full h-fw-full"
        src={"/images/event.jpg"}
        alt="event"
        width={1280}
        height={720}
        priority={true}
      />
    </div>
  );
}

export default Event;
