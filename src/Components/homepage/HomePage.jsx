import styled from "@emotion/styled";

import Menu from "../menu/Menu";
import Photos from "../photos/Photos";
import Critics from "../critics/Critics";
import Contact from "../contact/Contact";

import Collage from "../../img/collage.jpg";

const MainPicContainer = styled.div`
  width: 100%;
`;

const HomePage = () => {
  return (
    <div className="home-container" id="home-page">
      <div style={{ textAlign: "center" }}>
        <MainPicContainer>
          <img
            src={Collage}
            style={{
              paddingTop: "30px",
              width: "100%",
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="collage"
          />
        </MainPicContainer>
      </div>
      <div style={{ paddingTop: "70px" }}>
        <Menu />
      </div>
      <div style={{ paddingTop: "70px" }}>
        <Photos />
      </div>

      <div style={{ paddingTop: "70px" }}>
        <Critics />
      </div>
      <div style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
