/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import C1 from "../../img/critic2.png";
import C2 from "../../img/critic3.png";
import C3 from "../../img/critic4.png";
import C4 from "../../img/critic6.png";
import C5 from "../../img/critic5.png";
import C6 from "../../img/critic1.png";

const Critics = () => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-color: white;
          max-height: 400px;
          overflow-y: scroll;
          box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

          .critic-img {
            width: 50%;
            height: 100%;
            position: relative;
            padding: 2px;
          }

          ${mq[2]} {
            place-items: center;

            .critic-img {
              width: 100%;
              height: 100%;
              position: relative;
            }
          }
        `}
        id="critics"
      >
        <div>
          <img className="critic-img" src={C1} alt="critic1" />
          <img className="critic-img" src={C2} alt="critic2" />
          <img className="critic-img" src={C3} alt="critic3" />
          <img className="critic-img" src={C4} alt="critic4" />
          <img className="critic-img" src={C5} alt="critic5" />
          <img className="critic-img" src={C6} alt="critic6" />
        </div>
      </div>
    </div>
  );
};

export default Critics;
