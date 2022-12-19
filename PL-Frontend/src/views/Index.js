/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { hide } from "@popperjs/core";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-black">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0 p-8">
              <h1 className="font-semibold text-5xl text-white">
              शक्ति
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-4xl text-white">
              Sexual Harassment Story Classsification
              </p>
              <div className="mt-12">
                <a
                  href="/prediction"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                 Get your Stories heard
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-500px"
          src={require("assets/img/top-img1.jfif").default}
          style={{ height: "600px",marginTop:"50px" }}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg" style={{ backgroundColor: "#000" }}>
                <img
                  alt="..."
                  src="https://i.pinimg.com/564x/5e/9f/0c/5e9f0c1c089fd8e3a2bcbe9c2eb2331e.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-black-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Shedding light on the perspective of “women development” is as equally important as “women
                    equality”. Hence, “SHAKTI: for the women, by the women” aims to empower the women by opening up
                    the doors to various opportunities and assistance in varied areas.

                  </h4>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">

                      <h6 className="text-xl mb-1 font-semibold">
                        EDUCATION
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        - Access to primary education
                        - Learning of special survival skills to improve their overall well-being
                        - Help them to learn latest information and communication technologies
                        - Special mother mentorship and health awareness
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">

                      <h6 className="text-xl mb-1 font-semibold">
                        ENTREPRENEURSHIP
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        In Shakti, we are going to provide a platform for empowering entrepreneurship among women, to
                        promote the sustainable development of women entrepreneurs for balanced growth in the country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">

                      <h6 className="text-xl mb-1 font-semibold">COUNSELLING</h6>
                      <p className="mb-4 text-blueGray-500">
                        Women's issues can refer to any concern that might impact a woman’s mental health. Which might be related
                        to gender stereotyping or assumptions and concerns related to women's health, they are also likely to include
                        other challenges faced by women that have nothing to do with gender.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">

                      <h6 className="text-xl mb-1 font-semibold">
                        REWARD SYSTEM
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        In Shakti, we have created a reward system for women where we are trying to encourage them by providing
                        scratch cards or token coins,By organizing events and conducting competitions where the winners or participants will be given appreciating
                        rewards to build their enthusiasm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div> */}
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Features
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                - Making women “literate” & “skilful”
                <br />
                - Serves as a platform for learning skills and seeking
                opportunities
                <br />

                - Bridge between knowledge givers and knowledge seekers
                <br />

                - Building a system to build “independent women”
                <br />

                - Spreading legal and financial awareness through audio-visual
                media
                <br />

                - Motivating and coaching women in sports
                <br />

                - Building networks for knowledge enhancement
                <br />

                - Counselling and empowering the survivors
                <br />

                - Encouraging using reward system
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/c1.jfif").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/c2.jfif").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/c3.jfif").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/c4.jfif").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />

              </div>
            </div>
          </div>

        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/SD6.jpg").default}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div> */}
                <h3 className="text-3xl font-semibold mb-2">
                  Self Defense
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Helps women to be defensive,Provides guidance about self defense techniques using tutorials and virtual environment

                </p>


                <h3 className="text-3xl font-semibold mt-2">
                  Network Building
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This can be a key feature in any every empowerment. Ignoring networks can damage or limit your career and
                  leadership effectiveness. The right relationships and ties are known to be an asset in getting upgraded, earning
                  promotions, learning new things and gaining opportunities.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  In Shakti ecosystem, we are providing the great opportunity to build a network and also recommend like
                  minded people to connect with one another
                </p>


              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div> */}
                <h3 className="text-3xl font-semibold">
                  Financial Literacy
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">

                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    - Connects with opportunities for earnings
                  </li>
                  <li className="py-2">
                    - Knowledge about savings and women abide policies
                  </li>
                  <li className="py-2">
                    - Unable women to take advantage of banking services
                  </li>
                </ul>

                <h3 className="text-3xl font-semibold mt-2">
                  Legal Assistance
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">

                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    - Injustice on the basis of gender is a problem that is seen all over the world.
                  </li>
                  <li className="py-2">
                    - In Shakti, we help women to protect the rights of those who are victims of sexual harassment, domestic abuse,
                    pay-scale inequality, etc.
                  </li>
                  <li className="py-2">
                    - We are helping women by providing awareness about government policies and rights, and by providing legal
                    support.

                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/fin1.png").default}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">GUARDIANS FOR THE SURVIVORS</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              For a survivor, disclosing to someone they care about can be very difficult, so we want to create a community with
              supportive and non-judgemental environment where they are encouraged by providing resources, such as how to
              reach the National Sexual Assault Hotline, seek medical attention, or report the crime to the police, etc.
            </p>
            <p>
              COVID-19 has badly affected orphans and made them more vulnerable; through this ecosystem, we shall provide
              them skills, knowledge and link market to provide them opportunity to earn through decent work and decrease their
              dependency level, which will lead towards change in the position of orphan girls in the society.
            </p>
            <p>
              To help young widows rehabilitate or support the old to live
              their lives in peace. We will build an ecosystem working in the
              field of widow welfare by advancing the rights of widows and
              providing care and access to sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/SD.jfif").default}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/SD-2.jfif").default}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/img/SD-5.png").default}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white-600 overflow-hidden">
        <div className="container mx-auto pb-64">

        </div>
      </section>

      <section className="pb-16 bg-white-200 relative">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >

          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Do you want to join us??
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Send a mail to us, and Join Shakti as volunteer!!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://gmail.com"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Send a mail
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdj-DuciUPELNdCwgLrOqoHbwdYaocqKSRLWIgxDNbVMyZA5A/viewform"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Be a part Of our campaigns
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
