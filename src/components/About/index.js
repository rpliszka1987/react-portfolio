// This is the about page for the profile
import React from "react";
import portfolioImage from "../../assets/images/myImage.JPG";
import Bootstrap from "bootstrap";

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="aboutMe">
        <dic className="col-md-12 col-lg-6">
          <center>
            <img
              src={portfolioImage}
              id="my-image"
              alt="photograph of Robert Pliszka"
            />
          </center>
          <div className="d-flex flex-column justify-content-center">
            <center>
              <h1 id="my-name">Robert Pliszka</h1>
              <h2 id="my-career">Junior Developer</h2>
            </center>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              iusto hic nesciunt quisquam nostrum quae inventore fugiat cumque
              minus corporis, quia eius aspernatur odit eaque officia cum veniam
              molestiae facere, illum ipsa itaque modi. Quasi placeat voluptatum
              perspiciatis consequatur sit tenetur delectus, architecto
              doloribus voluptas sunt minus laborum repellendus sapiente fugit
              illo, nostrum consequuntur rerum minima perferendis voluptate?
              Laborum, quaerat, sapiente, reiciendis assumenda corporis eius
              optio itaque placeat nam officiis fugiat eligendi obcaecati
              consequatur doloremque pariatur at natus modi blanditiis est
              eveniet. Laudantium dolores beatae quisquam blanditiis nostrum
              harum eligendi ipsum officiis doloribus! Inventore aliquam dolor
              eius qui, laborum obcaecati.
            </p>
            <p>
              Dolorem nam ipsa nulla minima aliquid magni veniam, mollitia
              eligendi cumque eaque aliquam placeat ut fugiat esse soluta est
              sunt tenetur quae minus odit natus. Aspernatur voluptates nobis,
              doloribus dolorum suscipit mollitia officia iure sequi.
              Voluptates, sequi! Unde harum cum perspiciatis quaerat aspernatur
              et aperiam obcaecati similique quisquam reiciendis doloremque
              laudantium laboriosam, illum suscipit soluta magnam quam sed eum!
              Laborum exercitationem, nemo quae earum ea mollitia, libero a
              dolorem ex enim nisi soluta odio cupiditate tempore nam beatae
              sunt ipsa, architecto eveniet et? Tempore laudantium rem dolor,
              autem corporis architecto odio, temporibus nulla ipsam eligendi
              illo alias sit similique quasi.
            </p>
          </div>
        </dic>
      </div>
    </section>
  );
}

export default About;
