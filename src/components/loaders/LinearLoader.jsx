import { LinearProgress, Box, } from "@mui/material";

const LinearLoader = () => {
  return (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1100,
          }}
        >
          <LinearProgress 
            sx={{
              height:'3px',
              "& .MuiLinearProgress-bar": {
                transitionDuration: "8s",
              },
            }}
          />
        </Box>
  );
};

export default LinearLoader;
