import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";

import MenuImg from "../../img/menu.jpg";

import DownLine from "../../img/downline.png";

const MenuContainer = styled.div`
  display: flex;
  place-content: center;
  font-family: "Varela Round", sans-serif;
  padding: 20px 0;
  width: 100%;
  height: 380px;
  position: relative;
`;

const MenuButton = styled.button`
  font-family: "Varela Round", sans-serif;
  background-color: #42aba1;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 10px;
  margin: 0;
`;

const Menu = () => {
  return (
    <MenuContainer id="menu">
      <Card sx={{ maxWidth: 350, textAlign: "center" }}>
        <img src={DownLine} style={{ width: "100%" }} alt="DownLine" />
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            מקום טוב לשבט
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontFamily: "Varela Round, sans-serif" }}
            color="text.secondary"
            gutterBottom
          >
            חומוס בישוב
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            ?איפה
          </Typography>
          <Typography
            variant="body"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            הארז 42, רמת ישי
          </Typography>
          <Typography
            variant="h5"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            ?מתי
          </Typography>
          <Typography
            variant="body"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            ראשון - חמישי 19:00 - 10:00
          </Typography>
          <br />
          <Typography
            variant="body"
            style={{ fontFamily: "Varela Round, sans-serif" }}
          >
            שישי 16:00 - 10:00
          </Typography>
        </CardContent>
        <MenuButton onClick={() => window.open(MenuImg, "_blank")}>
          לצפיה בתפריט
        </MenuButton>
      </Card>
    </MenuContainer>
  );
};

export default Menu;
