import { Box, Container, Grid, Typography } from "@mui/material";
import DoctorCard from "./DoctorCard";
import DrNitin from "../../assets/Expert_Teams/Dr. Nitin Darda.png";
import DrYogita from "../../assets/Expert_Teams/Dr. Yogita Darda.png";
import DrTanmay from "../../assets/Expert_Teams/Dr. Tanmay Darda.png";

const doctors = [
  {
    name: "Dr. Nitin Darda",
    specialty: "Homeopathy Consultant",
    image: DrNitin,
  },
  {
    name: "Dr. Yogita Darda",
    specialty: "Homeopathy Consultant",
    image: DrYogita,
  },
  {
    name: "Dr. Tanmay Darda",
    specialty: "Homeopathy Consultant",
    image: DrTanmay,
  },
];

export default function ExpertDoctorsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6, lg: 8 },
        backgroundColor: "#FBF9FA",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "1440px",
          px: {
            xs: "25px", // phones → no padding
            sm: "25px", // small tablets → no padding
            md: "66px", // desktop and up → exact Figma spacing
          },
          mx: "auto",
        }}
      >
        {" "}
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "24px",
                lg: "24px",
              },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            Meet Our Expert Doctors
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "16px", sm: "16px", md: "16px" },
              color: "#000000",
              maxWidth: "700px",
              mx: "auto",
              fontWeight: 300,
            }}
          >
            Our team of highly qualified and experienced medical professionals
            is dedicated to providing you with the best care possible.
          </Typography>
        </Box>
        {/* Doctor Cards Grid */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4, lg: 6 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            "& .MuiGrid-item": {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.333333%",
                  lg: "33.333333%",
                },
              }}
            >
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
