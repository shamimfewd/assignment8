import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero  bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse lg:p-32">
          <img
            src="https://image.makewebeasy.net/makeweb/m_1920x0/7GFEYsdVK/DefaultData/cover_Hitchhiker_s_Guide_to_the_Galaxy_%E0%B8%9B%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.jpg"
            className="max-w-sm rounded-lg shadow-2xl h-[25rem]"
          />
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold lg:w-4/5 leading-relaxed mb-8">
              Books to freshen up your bookshelf
            </h1>

            <Link to={"/listedbook"}>
              <button className="btn bg-[#23BE0A] text-white font-bold">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
