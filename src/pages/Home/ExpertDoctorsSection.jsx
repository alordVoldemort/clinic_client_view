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
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
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
          spacing={{ xs: 4, sm: 5, md: 6, lg: 11 }}
          justifyContent="center"
          sx={{
            "& .MuiGrid-item": {
              display: "flex",
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
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
