import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { red } from "@mui/material/colors";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color={red[800]}>
          ReactSocial
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "25%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem", ml: "0.5rem"}}>
          Welcome! Please enter your credentials
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
