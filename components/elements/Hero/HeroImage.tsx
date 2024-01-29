import Image from 'next/image';

export default function HeroMessage() {
  return (
    <div className="h-56 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
        className="h-full w-full object-cover"
        fill
        src="https://res.cloudinary.com/partnersense-ab/image/upload/v1631643843/ps_740011016b.jpg"
        alt=""
      />
    </div>
  );
}
