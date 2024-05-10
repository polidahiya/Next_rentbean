import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  let companiesarr = [
    "/eventmanager/companies/IBM.png",
    "/eventmanager/companies/airtel.png",
    "/eventmanager/companies/HSBC.png",
    "/eventmanager/companies/Wynk_music_logo.png",
    "/eventmanager/companies/pizza-hut-.png",
    "/eventmanager/companies/idfc.png",
    "/eventmanager/companies/Reebok-logo.png",
    "/eventmanager/companies/The_Lalit-01.png",
  ];

  return (
    <div>
      <Image
        src="/eventmanager/images/wedding.jpg"
        alt="Main theme image"
        width={1280}
        height={551}
        quality={100}
        className="h-[100dvh] w-full object-cover object-center"
      ></Image>
      <main
        className="relative"
        style={{
          background: `radial-gradient(
          circle at center center,
          rgba(217, 217, 217, 0.05) 0%,
          rgba(217, 217, 217, 0.05) 15%,
          rgba(197, 197, 197, 0.05) 15%,
          rgba(197, 197, 197, 0.05) 34%,
          rgba(178, 178, 178, 0.05) 34%,
          rgba(178, 178, 178, 0.05) 51%,
          rgba(237, 237, 237, 0.05) 51%,
          rgba(237, 237, 237, 0.05) 75%,
          rgba(138, 138, 138, 0.05) 75%,
          rgba(138, 138, 138, 0.05) 89%,
          rgba(158, 158, 158, 0.05) 89%,
          rgba(158, 158, 158, 0.05) 100%
        ),
        radial-gradient(
          circle at center center,
          rgb(255, 255, 255) 0%,
          rgb(255, 255, 255) 6%,
          rgb(255, 255, 255) 6%,
          rgb(255, 255, 255) 12%,
          rgb(255, 255, 255) 12%,
          rgb(255, 255, 255) 31%,
          rgb(255, 255, 255) 31%,
          rgb(255, 255, 255) 92%,
          rgb(255, 255, 255) 92%,
          rgb(255, 255, 255) 97%,
          rgb(255, 255, 255) 97%,
          rgb(255, 255, 255) 100%
        );
      background-size: 42px 42px`,
        }}
      >
        {/* grass */}
        <div
          className="h-[100px] w-full absolute top-[-100px]"
          style={{
            background:
              "url(/eventmanager/flowers.png) center / contain repeat-x",
          }}
        ></div>
        {/*  */}
        <Link href="/birthday" className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡  Birthday Celebration  ｡･:*˚:✧｡ </h3>
            <p>
              🎉 Celebrate in Style: A Birthday Bash to Remember! 🎂
              <br />
              Join us for an unforgettable birthday extravaganza! Whether you&aposre
              turning sweet sixteen or fabulous forty, our expert team of event
              planners is here to make your special day shine. Picture-perfect
              decorations, mouthwatering treats, and entertainment tailored to
              your tastes await you and your guests.
              <br />
              Indulge in delectable cuisine, sip on signature cocktails, and
              dance the night away to your favorite tunes. From intimate
              gatherings to grand celebrations, we&aposll craft an experience that
              reflects your personality and exceeds your wildest dreams.
              <br />
              Mark your calendar and get ready to make memories that will last a
              lifetime. Let&aposs toast to another year of laughter, love, and
              endless possibilities!
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink" >Explore &gt;</button>
          </div>
          <div className="h-full w-full  overflow-hidden rounded-tl-full rounded-bl-full">
            <Image
              src="/eventmanager/images/birthday.jpg"
              alt="Birthday party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
        </Link>
        <div className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-tr-full rounded-br-full">
            <Image
              src="/eventmanager/images/wedding.jpg"
              alt="wedding celebration party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡ Wedding Celebration ｡･:*˚:✧｡ </h3>
            <p>
              &quot;✨ Experience the enchantment of a lifetime as two hearts unite
              in the celebration of love. 💖 Our meticulously curated wedding
              celebrations blend elegance, romance, and personal touches to
              create unforgettable moments. From the ethereal ambiance of the
              ceremony to the joyous revelry of the reception, every detail is
              thoughtfully crafted to reflect the unique love story of the
              couple. 💍 Let us transform your dreams into reality, ensuring
              your special day is filled with laughter, love, and cherished
              memories that will last a lifetime. 🥂✨&quot;
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">Explore &gt;</button>
          </div>
        </div>
        <div className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡ Corporate Celebration ｡･:*˚:✧｡ </h3>
            <p>
              &quot;🎉 Embrace success and camaraderie with our expertly crafted
              corporate celebrations. Whether it&aposs commemorating milestones,
              fostering team spirit, or simply reveling in achievements, our
              events are meticulously tailored to reflect your company&aposs unique
              ethos and goals. From elegant soirées to dynamic team-building
              activities, we curate unforgettable experiences that inspire,
              unite, and leave a lasting impression. Elevate your corporate
              culture and honor your team&aposs accomplishments with our seamless
              and sophisticated event planning services. 🥂✨&quot;
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">Explore &gt;</button>
          </div>
          <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-tl-full rounded-bl-full ">
            <Image
              src="/eventmanager/images/corporate.jpg"
              alt="corporate party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
        </div>
        <div className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-tr-full rounded-br-full ">
            <Image
              src="/eventmanager/images/privateparty.jpg"
              alt="private party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡ Private Party ｡･:*˚:✧｡ </h3>
            <p>
              &quot;🎉 Embark on an exclusive journey of celebration with our bespoke
              private party experience. Whether it&aposs an intimate gathering of
              close friends or a lavish affair for esteemed guests, our expert
              event planners curate every detail to perfection. 🌟 From elegant
              decor to tantalizing cuisine and seamless entertainment, we
              transform your vision into an unforgettable reality. 💫 Elevate
              your celebration with unparalleled sophistication and personalized
              service, creating cherished memories that linger long after the
              last toast. 🥂✨&quot;
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">Explore &gt;</button>
          </div>
        </div>
        <div className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡ New Year Eve ｡･:*˚:✧｡ </h3>
            <p>
              &quot;🎉 Ring in the New Year in style at our spectacular New Year&aposs
              Eve celebration! Join us for an unforgettable evening filled with
              glamour, excitement, and endless festivities. 💃 Dance the night
              away to live music performed by top artists, indulge in gourmet
              cuisine 🍽️, and raise a toast 🥂 to new beginnings with our
              premium selection of drinks. As the countdown to midnight begins,
              anticipation fills the air, culminating in a dazzling fireworks
              display 🎆 to welcome the arrival of the new year. Don&apost miss out
              on the most extraordinary way to bid farewell to the old and
              welcome the new! 🎇&quot;
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">Explore &gt;</button>
          </div>
          <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-tl-full rounded-bl-full ">
            <Image
              src="/eventmanager/images/new year eve party.jpeg"
              alt="new year eve party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
        </div>
        <div className="relative py-[50px] w-full h-[30vw] flex justify-between items-center box-content">
          <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-tr-full rounded-br-full ">
            <Image
              src="/eventmanager/images/school events.jpg"
              alt="school events party event manager"
              height={200}
              width={200}
              className="h-full w-full object-cover scale-[1.2] lg:hover:scale-[1] duration-300"
            ></Image>
          </div>
          <div className="w-full px-[50px] text-center flex flex-col items-center justify-center gap-[20px] text-[1.2vw]">
            <h3 className="text-themepink whitespace-nowrap text-[2.3vw] font-recline"> ｡･:*˚:✧｡ School Event ｡･:*˚:✧｡ </h3>
            <p>
              🎉 Join Us for an Unforgettable School Event! 🎉
              <br />
              Calling all students, parents, and faculty members! Get ready to
              embark on an exciting journey filled with fun, laughter, and
              memories to last a lifetime. Our school is buzzing with excitement
              as we gear up for an extraordinary event designed just for you.
              <br />
              From captivating performances to thrilling activities, there&aposs
              something for everyone to enjoy. Whether you&aposre a sports
              enthusiast, an art aficionado, or simply looking to connect with
              fellow peers, this event promises an enriching experience for all.
              <br />
              Come together with your friends and family to celebrate the spirit
              of our school community. Let&aposs create magical moments and
              celebrate the diversity and talent that make our school truly
              special.
            </p>
            <button className="border border-themepink rounded-full bg-themepink text-white px-[20px] py-[5px] lg:hover:bg-transparent lg:hover:text-themepink">Explore &gt;</button>
          </div>
        </div>
        {/* promises  */}
        <div
          className="grid grid-cols-2 md:flex items-center justify-evenly gap-[30px] py-[40px] flex-wrap px-[10px] lg:px-0"
          style={{
            background: `linear-gradient(
          45deg,
          rgba(254, 246, 210, 0.53) 0%,
          rgba(254, 246, 210, 0.53) 14.286%,
          rgba(221, 240, 216, 0.53) 14.286%,
          rgba(221, 240, 216, 0.53) 28.572%,
          rgba(188, 233, 223, 0.53) 28.572%,
          rgba(188, 233, 223, 0.53) 42.858%,
          rgba(156, 227, 229, 0.53) 42.858%,
          rgba(156, 227, 229, 0.53) 57.144%,
          rgba(123, 220, 235, 0.53) 57.144%,
          rgba(123, 220, 235, 0.53) 71.42999999999999%,
          rgba(90, 214, 242, 0.53) 71.43%,
          rgba(90, 214, 242, 0.53) 85.71600000000001%,
          rgba(57, 207, 248, 0.53) 85.716%,
          rgba(57, 207, 248, 0.53) 100.002%
        ),
        linear-gradient(
          135deg,
          rgb(246, 99, 200) 0%,
          rgb(246, 99, 200) 12.5%,
          rgb(223, 98, 196) 12.5%,
          rgb(223, 98, 196) 25%,
          rgb(199, 97, 192) 25%,
          rgb(199, 97, 192) 37.5%,
          rgb(176, 96, 188) 37.5%,
          rgb(176, 96, 188) 50%,
          rgb(152, 95, 184) 50%,
          rgb(152, 95, 184) 62.5%,
          rgb(129, 94, 180) 62.5%,
          rgb(129, 94, 180) 75%,
          rgb(105, 93, 176) 75%,
          rgb(105, 93, 176) 87.5%,
          rgb(82, 92, 172) 87.5%,
          rgb(82, 92, 172) 100%
        )`,
          }}
        >
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/gift-svgrepo-com.svg"
              alt="gifts"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>
            <p className="text-themepink">Best Collection</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/fast-delivery-truck-svgrepo-com.svg"
              alt="Fast delivery"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Instant Service</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/telemarketer-support-svgrepo-com.svg"
              alt="Customer support "
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Customer Support</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/payment-method-bank-svgrepo-com.svg"
              alt="Safe payment"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Secure Payment</p>
          </div>
        </div>
        {/*  */}
        <div
          className="py-[100px] text-white text-center flex flex-col items-center"
          style={{
            background:
              "url(/eventmanager/images/aboutusbg2.jpg) center / cover",
          }}
        >
          <h2 className="font-recline text-[30px] underline ">
            A Note from CEO{" "}
          </h2>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Welcome to{" "}
            <span className="text-themepink">Rentbean Event Planners</span>,
            where unforgettable moments are crafted with care. With our
            expertise spanning across Delhi, Gurgaon, and Noida, we specialize
            in curating exceptional experiences for a variety of occasions.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Whether it&aposs the joyous festivities of a Birthday Celebration, the
            timeless romance of a Wedding Celebration, the professional finesse
            of a Corporate Event, the intimate charm of a Private Party, the
            exhilarating countdown of a New Year&aposs Eve bash, or the spirited
            enthusiasm of a School Event, we are dedicated to turning your
            vision into reality.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            From conceptualization to execution, our team ensures every detail
            is meticulously planned, leaving you free to immerse yourself in the
            joy of the moment. Let us transform your event into a cherished
            memory that will be treasured for a lifetime.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Contact us today to begin planning your next extraordinary event.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">Thank you</p>
        </div>
        {/*  */}
        <div className="p-[10px] md:p-[40px]">
          <h2 className="text-center text-[30px] font-recline">Trusted By</h2>
          <div className="flex items-center justify-center gap-[10px] flex-wrap mt-[30px]">
            {companiesarr?.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item}
                  alt="Trusted by images"
                  height={80}
                  width={140}
                  quality={100}
                  className="h-[80px] aspect-[7/4] object-contain border border-slate-300 rounded-[10px] p-[10px] hover:p-[5px] duration-300"
                ></Image>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
