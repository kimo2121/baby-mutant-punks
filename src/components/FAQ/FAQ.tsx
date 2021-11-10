import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import "./FAQ.css";
// import Header from "../Header/Header";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "#1C1C50",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#1C1C50",
    borderRadius: "5px",
    color: "white",
    margin: "30px 0",
    marginBottom: -1,
    minHeight: 89,
    paddingRight: "50px",
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>Frequent Questions</h1>
      <div className="accordion-wrpper">
        <div className="accordion-first">
          <Accordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                className={
                  expanded === "panel1"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel1" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                className={
                  expanded === "panel2"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel2" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                className={
                  expanded === "panel3"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel3" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography
                className={
                  expanded === "panel4"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel4" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-second">
          <Accordion
            square
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography
                className={
                  expanded === "panel5"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel5" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography
                className={
                  expanded === "panel6"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel6" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography
                className={
                  expanded === "panel7"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel7" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography
                className={
                  expanded === "panel8"
                    ? "question-styles active"
                    : "question-styles"
                }
              >
                <IoIosArrowDropdownCircle
                  className={expanded === "panel8" ? "arrow active" : "arrow"}
                />
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
