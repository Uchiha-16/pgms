import Box from "@mui/material/Box";
import image from "../assets/images/office.png";

const SideImageComponent = () => {
  return (
    <Box
    component="img"
    sx={{
      mt: 10,
      height: 400,
      width: 300,
      maxHeight: { xs: 233, md: 1000 },
      maxWidth: { xs: 350, md: 1000 },
    }}
    alt="In the office"
    src={image}
  />
  );
};

export default SideImageComponent;
