import React from "react";

const Experience = () => {
  return (
    <section className="Experience mt-[140px] mb-[71px]">
      <div className="container">
        <div className="main_wrapper flex">
          <div className="Experience_text_part bg-black w-1/2 h-full text-primary-fff">
            <h5>categories</h5>
            <h1>Enhance Your Music Experience</h1>
            <div className="time">
              <div>
                <p>1</p>
                <p>days</p>
              </div>
            </div>
            <div>
                <button>
                    buy now
                </button>
            </div>
          </div>
          <div className="Experience_img_part bg-green-300 w-1/2 h-full">
            <h1>hello image</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
