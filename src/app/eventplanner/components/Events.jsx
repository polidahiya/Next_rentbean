import React from "react";
import Link from "next/link";
import Image from "next/image";

function Events() {
  const eventsdata = [
    {
      link: "/eventplanner/",
      title: "Birthday Celebration",
      desc: [
        `
            🎉 Celebrate in Style: A Birthday Bash to Remember! 🎂
            `,
        `
            Join us for an unforgettable birthday extravaganza! Whether
            you're turning sweet sixteen or fabulous forty, our expert team
            of event planners is here to make your special day shine.
            Picture-perfect decorations, mouthwatering treats, and entertainment
            tailored to your tastes await you and your guests.`,
        `
            Indulge in delectable cuisine, sip on signature cocktails, and dance
            the night away to your favorite tunes. From intimate gatherings to
            grand celebrations, we'll craft an experience that reflects your
            personality and exceeds your wildest dreams.`,
        `
            Mark your calendar and get ready to make memories that will last a
            lifetime. Let's toast to another year of laughter, love, and
            endless possibilities!
            `,
      ],
      image: "/eventmanager/images/birthday.jpg",
      alt: "Birthday party event manager",
    },
    {
      link: "/eventplanner/",
      title: "Wedding Celebration",
      desc: [
        `
           ✨ Experience the enchantment of a lifetime as two hearts
            unite in the celebration of love. 💖 Our meticulously curated
            wedding celebrations blend elegance, romance, and personal touches
            to create unforgettable moments. From the ethereal ambiance of the
            ceremony to the joyous revelry of the reception, every detail is
            thoughtfully crafted to reflect the unique love story of the couple.
            💍 Let us transform your dreams into reality, ensuring your special
            day is filled with laughter, love, and cherished memories that will
            last a lifetime. 🥂✨
      `,
      ],
      image: "/eventmanager/images/wedding.jpg",
      alt: "wedding celebration party event manager",
    },
    {
      link: "/eventplanner/",
      title: "Corporate Celebration",
      desc: [
        `
     🎉 Embrace success and camaraderie with our expertly crafted
      corporate celebrations. Whether it's commemorating milestones,
      fostering team spirit, or simply reveling in achievements, our
      events are meticulously tailored to reflect your company's
      unique ethos and goals. From elegant soirées to dynamic
      team-building activities, we curate unforgettable experiences that
      inspire, unite, and leave a lasting impression. Elevate your
      corporate culture and honor your team's accomplishments with our
      seamless and sophisticated event planning services. 🥂✨
      `,
      ],
      image: "/eventmanager/images/corporate.jpg",
      alt: "corporate party event manager",
    },
    {
      link: "/eventplanner/",
      title: "Private Party",
      desc: [
        `
           🎉 Embark on an exclusive journey of celebration with our
            bespoke private party experience. Whether it's an intimate
            gathering of close friends or a lavish affair for esteemed guests,
            our expert event planners curate every detail to perfection. 🌟 From
            elegant decor to tantalizing cuisine and seamless entertainment, we
            transform your vision into an unforgettable reality. 💫 Elevate your
            celebration with unparalleled sophistication and personalized
            service, creating cherished memories that linger long after the last
            toast. 🥂✨
      `,
      ],
      image: "/eventmanager/images/privateparty.jpg",
      alt: "private party event manager",
    },
    {
      link: "/eventplanner/",
      title: "New Year Eve",
      desc: [
        `
           🎉 Ring in the New Year in style at our spectacular New
            Year's Eve celebration! Join us for an unforgettable evening
            filled with glamour, excitement, and endless festivities. 💃 Dance
            the night away to live music performed by top artists, indulge in
            gourmet cuisine 🍽️, and raise a toast 🥂 to new beginnings with our
            premium selection of drinks. As the countdown to midnight begins,
            anticipation fills the air, culminating in a dazzling fireworks
            display 🎆 to welcome the arrival of the new year. Don't miss
            out on the most extraordinary way to bid farewell to the old and
            welcome the new! 🎇
      `,
      ],
      image: "/eventmanager/images/new year eve party.jpeg",
      alt: "new year eve party event manager",
    },
    {
      link: "/eventplanner/",
      title: "School Event",
      desc: [
        `
            🎉 Join Us for an Unforgettable School Event! 🎉`,
        `
            Calling all students, parents, and faculty members! Get ready to
            embark on an exciting journey filled with fun, laughter, and
            memories to last a lifetime. Our school is buzzing with excitement
            as we gear up for an extraordinary event designed just for you.
            `,
        `
            From captivating performances to thrilling activities, there's
            something for everyone to enjoy. Whether you're a sports
            enthusiast, an art aficionado, or simply looking to connect with
            fellow peers, this event promises an enriching experience for all.
            `,
        `
            Come together with your friends and family to celebrate the spirit
            of our school community. Let's create magical moments and
            celebrate the diversity and talent that make our school truly
            special.
      `,
      ],
      image: "/eventmanager/images/school events.jpg",
      alt: "school events party event manager",
    },
  ];
  return (
    <>
      {eventsdata?.map((item, i) => {
        if (i % 2 == 0) {
          return (
            <Link
              key={i}
              href={item.link}
              className="relative py-[30px] md:py-[50px] w-full md:h-[30vw] flex flex-col md:flex-row justify-between items-center box-content"
            >
              <div className="w-full px-[5px] md:px-[50px] text-center flex flex-col items-center justify-center gap-0 md:gap-[20px] ">
                <h3 className="text-themepink whitespace-nowrap text-[20px] md:text-[2.3vw] font-recline mb-[10px] md:mb-0">
                  ｡･:*˚:✧｡ {item.title} ｡･:*˚:✧｡
                </h3>
                <div className="p-[10px] md:p-0 text-[16px]">
                  {item?.desc.map((item1, i) => {
                    return (
                      <p key={i} className="mt-[5px]">
                        {item1}
                      </p>
                    );
                  })}
                </div>
                <button className="hidden md:block border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">
                  Explore &gt;
                </button>
              </div>
              <div className="min-h-[200px] md:h-full w-[90%]  overflow-hidden rounded-[20px]   md:rounded-tl-full md:rounded-bl-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  height={200}
                  width={200}
                  className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
                ></Image>
              </div>
            </Link>
          );
        } else {
          return (
            <Link
              key={i}
              href={item.link}
              className="relative py-[30px] md:py-[50px] w-full md:h-[30vw] flex flex-col-reverse md:flex-row justify-between items-center box-content"
            >
              <div className="min-h-[200px] md:h-full w-[90%]  overflow-hidden rounded-[20px]  md:rounded-tr-full md:rounded-br-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  height={200}
                  width={200}
                  className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
                ></Image>
              </div>
              <div className="w-full px-[5px] md:px-[50px] text-center flex flex-col items-center justify-center gap-0 md:gap-[20px]">
                <h3 className="text-themepink whitespace-nowrap text-[20px] md:text-[2.3vw] font-recline mb-[10px] md:mb-0">
                  ｡･:*˚:✧｡ {item.title} ｡･:*˚:✧｡
                </h3>
                <div className="p-[10px] md:p-0 text-[16px]">
                  {item?.desc.map((item1, i) => {
                    return (
                      <p key={i} className="mt-[5px]">
                        {item1}
                      </p>
                    );
                  })}
                </div>
                <button className="hidden md:block border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">
                  Explore &gt;
                </button>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
}

export default Events;
