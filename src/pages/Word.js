import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Intro from "../wordCourses/intro";

const courses = [
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/7%20Cryptography%20Concepts%20EVERY%20Developer%20Should%20Know.mp4?alt=media&token=805eaded-40d4-485f-a0d2-a2437c069cf5",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Auth0%20in%20100%20Seconds%20__%20And%20beyond%20with%20a%20Next.js%20Authentication%20Tutorial.mp4?alt=media&token=fddcffb4-d37d-473b-92fa-4b3c5303aa8a",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/C%20in%20100%20Seconds.mp4?alt=media&token=04859a5b-287b-42a2-b071-ecc88918399c",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Dart%20in%20100%20Seconds.mp4?alt=media&token=a8af31f9-1902-4e42-8793-d4cca621546b",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Flutter%20Basic%20Training%20-%2012%20Minute%20Bootcamp.mp4?alt=media&token=dc13e642-57f8-4264-9580-46c86842d863",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Java%20in%20100%20Seconds.mp4?alt=media&token=a459cd7b-474c-4701-b22d-b799cfdffffc",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Kotlin%20in%20100%20Seconds.mp4?alt=media&token=dd45647f-cb2b-4c10-ac7e-336cdffaa722",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Make%20Money%20from%20your%20API%20Tutorial.mp4?alt=media&token=8fcde6d8-2b7f-464e-a27e-8ea7dee9f01d",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Next.js%2012%20is%20a%20Beast.mp4?alt=media&token=66171a9d-26f2-4f37-8978-8e5a2cc2db79",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Python%20in%20100%20Seconds.mp4?alt=media&token=1bc3ca4a-edc8-4700-b11f-b13c944a6683",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/React%20Native%20vs%20Flutter%20-%20I%20built%20the%20same%20chat%20app%20with%20both.mp4?alt=media&token=8256155d-fe99-4bf2-90b5-5be2f99df729",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Rust%20in%20100%20Seconds.mp4?alt=media&token=e88124fb-8fbc-4969-92de-b6fd3d856756",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Shopify%20built%20a%20JS%20Framework%20__%20Hydrogen%20First%20Look.mp4?alt=media&token=8bc4af42-23cd-4c34-9bda-d0cc775f4954",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Ultimate%20Tailwind%20CSS%20Tutorial%20__%20Build%20a%20Discord-inspired%20Animated%20Navbar.mp4?alt=media&token=ac730847-03ed-47ed-8872-6551dfd00ae4",
  "https://firebasestorage.googleapis.com/v0/b/money-disbursion.appspot.com/o/Why%20I%20Recommend%20the%20GPL%20License.mp4?alt=media&token=689cabed-0641-46f2-8b85-c16eb957c545"
]

const titles = [
  'Introduction',
  'How to create, open and save new Micrososft Word documents and files',
  'How to format basic text styles',
  'How to make page layout designs',
  'How to add and move pictures',
  'How to add headers, footers and page numbers',
  'Shortcuts',
  'How to use grammar and spelling checker',
  'How to change fonts and font styles',
  'How to merge two documents',
  'Inserting page breaks',
  'Using templates',
  'Adding background images',
  'Adding clip art',
  'Adding page boarders'
]

const steps = [""];

const Word = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return 15;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
              <Intro url={courses[activeStep]} />
            <Typography sx={{ mt: 2, mb: 1 }}>{`${activeStep + 1} : ${titles[activeStep]}`}  </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default Word;
