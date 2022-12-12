import React from "react";

const About = () => {
  return (
    <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
          ex illo qui laboriosam possimus officia nulla incidunt natus
          doloremque. Odio labore asperiores iusto officia, corrupti quod ipsum
          at laudantium alias cumque, magni et voluptate esse ab omnis nemo
          accusamus natus ipsam? Consectetur eligendi asperiores perspiciatis?
          Deserunt quisquam odit officia.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          doloribus incidunt nisi facilis nam obcaecati excepturi consectetur
          aperiam, est delectus asperiores beatae. Alias, delectus numquam odit
          assumenda explicabo suscipit omnis illo facere placeat aliquid aperiam
          aspernatur nam, ea molestiae, similique totam. Repudiandae fuga,
          impedit voluptatum expedita libero maiores ut eos.
        </p>
      </div>
    </div>
  );
};

export default About;
