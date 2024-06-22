import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
interface Iprops {}

const Login: React.FC<Iprops> = () => {
  return (
    <div>
      <Accordion
        sx={{
          width: "200px",
          boxShadow: "none",
          maxHeight: "50px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Bruce_Lee_in_watercolour.png"
            style={{ width: 30, height: 30 }}
            alt=""
          />
          BruceLee
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="outlined">Login</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Login;
