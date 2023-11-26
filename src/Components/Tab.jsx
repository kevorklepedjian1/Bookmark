import React, { useState } from "react";
import img1 from '../images/illustration-features-tab-1.svg'
import img2 from '../images/illustration-features-tab-2.svg'
import img3 from '../images/illustration-features-tab-3.svg'


const featuresData = [
  {
    id: 1,
    title: "Bookmark in One Click",
    desc: "Organize your bookmarks effortlessly with our intuitive drag-and-drop interface.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: img1,
  },
  {
    id: 2,
    title: "Intelligent Search",
    desc: "Use our powerful search feature to find saved sites quickly without sifting through all your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: img2,
  },
  {
    id: 3,
    title: "Share Your Bookmarks",
    desc: "Effortlessly share your bookmarks and collections with a click. Create shareable links on the go.",
    link: "More Info",
    button: "Easy Sharing",
    image: img3,
  },
];


const FeatureTab = ({ index, selected, onClick, button }) => (
  <li className={`border-t border-slate-400 last:border-b md:border-t-0 md:border-b`}>
    <button onClick={() => onClick(index)} className={`py-3 md:px-6 ${selected && "border-b-2 border-red-400"}`}>
      {button}
    </button>
  </li>
);


const FeatureDetails = ({ title, desc, image, link }) => (
  <div className="lg:flex-1">
    <h2 className="text-3xl mt-16 mb-8 lg:text-4xl">{title}</h2>
    <p className="mb-10">{desc}</p>
    <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75">
      {link}
    </button>
  </div>
);

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { title, desc, image, link } = featuresData[selectedTab];

  return (
    <section className="container mx-auto px-8 py-20">
      <article className="text-center">
        <h2 className="text-3xl mb-8 lg:text-4xl">Features</h2>
        <p className="lg:w-96 lg:mx-auto">
          Access your favorite websites quickly and easily. Your bookmarks sync seamlessly between devices for on-the-go access.
        </p>
      </article>
 <ul className="flex flex-col text-center md:flex-row items-center justify-center">
          {featuresData.map((feature, index) => (
            <FeatureTab
              key={feature.id}
              index={index}
              selected={index === selectedTab}
              onClick={setSelectedTab}
              button={feature.button}
            />
          ))}
        </ul>
      <div className="my-10 md:flex md:items-start md:justify-center">
       

        <div className="lg:flex items-center justify-center lg:gap-16 pt-10 max-w-7xl mx-auto">
          <article className="lg:flex-1 relative">
            <img src={image} alt={title} className="block mx-auto w-full" />
            <div className="bg-left"></div>
          </article>

          <FeatureDetails title={title} desc={desc} image={image} link={link} />
        </div>
      </div>
    </section>
  );
}
