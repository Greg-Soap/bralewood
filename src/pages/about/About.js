import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuery";
import icon1 from "../../assets/investment.png";
import background1 from "../../assets/investment-1.jpg";
import burear from "../../assets/bureau.png";
import mark from "../../assets/questionmark.png";
import logo from "../../assets/Logo.jpg";
import "./About.css";

const About = () => {
  let isPageWide = UseMediaQuery("(min-width: 760px)");

  return (
    <div className="about_container">
      <div className="about_content__wrapper">
        <div className="section__1">
          <div className="about_card__container">
            <div className="text__content">
              <img className="icon__image" src={icon1} alt="investment" />
              <h1 className="header">About Bralewood</h1>
              <p className="paragraph">
                Bralewood Investments Limited is a financial services firm with
                specialization in Bureau De Change, and Financial Consultancy,
                and Investments.
              </p>
            </div>
            <img
              className={isPageWide ? "coin__img" : "coin__img__mobile"}
              src={background1}
              alt="investment1"
            />
          </div>
        </div>

        <div className="about_img_container">
          <h1 className="about_img_header">INVEST WITH US</h1>
        </div>

        <div className="section__2">
          <div className="text__content">
            <img className="icon__image" src={burear} alt="investment" />
            <h1 className="header">Welcome to Bralewood</h1>
            <p className="paragraph">
              In Bralewood, we are extremely passionate about SERVICE delivery,
              as we seek to always enhance our Customer Experience. We will stop
              at nothing to ensure that all our service touchpoints leave an
              impression during the each interaction with every customer.
            </p>
            <p className="paragraph">
              We are committed to our Clients’ Growth andImprovement, and
              introduce world-class proven Innovations, Ideas, Products and
              Services to suit their needs. With our team of experts in various
              fields, our aim is to create value for our clients and their
              organizations. We will ensure that our unique services are
              delivered as promised.
            </p>
          </div>

          <div className="text__content">
            <img className="icon__image" src={mark} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p className="paragraph">
              Bralewood Investments Ltd was incorporated in 2019 and was
              established to carry on the business of an investment company and
              for that purpose to acquire and hold in the name of the company,
              stocks, debentures, bonds, notes, obligations and securities
              issued or guaranteed by any company in Nigeria and securities
              issued or guaranteed by any government, sovereign rulers,
              commissioners, public body or authority in Nigeria.
            </p>{" "}
            <p className="paragraph">
              To carry on business as investment consultants to broker
              investment and business transactions between prospective investors
              and businesses or idea developers and inventors and to generally
              serve as business incubators.
            </p>{" "}
            <p className="paragraph">
              Bralewood’s immediate to short-term business model and core
              primary area of business is Foreign Exchange trading, which will
              gradually evolve into other lines of businesses including
              businesses within and outside the financial intermediation space.
              Bralewood commenced business on August 5, 2019.
            </p>
          </div>
        </div>

        <div className="image__block">
          <img className="last__logo__image" src={logo} alt="investment" />
        </div>
        <div>
          <div className="section__3">
            <div className="holders">
              <h1 className="header_wrap">Our values</h1>
              <ul className="unodered paragraphContext">
                <li>Reliability</li>
                <li>Integrity</li>
                <li>Passion</li>
                <li>Professionalism</li>
                <li>Speed (Timeliness)</li>
              </ul>
            </div>
            <div className="holders">
              <h1 className="header_wrap">Our subsidiaries</h1>
              <p className="paragraphContext">Lexxy bureau de change limited</p>
            </div>
            <div className="holders">
              <h1 className="header_wrap">Our promise</h1>
              <p className="paragraphContext">
                To promise world-class financial services, through sustainable
                business practices
              </p>
            </div>
            <div className="holders">
              <h1 className="header_wrap">Our services</h1>
              <ul className="unodered paragraphContext">
                <li>
                  To provide world-class financial services, through sustainable
                  business practices.
                </li>
                <li>Foreign bills settlements </li>
                <li>Import Payments </li>
                <li>School Fees Remittance</li>
                <li>Cash exchange for foreign currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
