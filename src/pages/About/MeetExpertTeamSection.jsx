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
    description: (
      <>
        <Typography component="span" sx={{ fontWeight: 500 }}>
          Special Expertise:
        </Typography>{" "}
        <Typography component="span" sx={{ fontWeight: 300 }}>
          Spine disorders, chronic back pain, and urine/kidney-related issues
          <br />
          <br />
          Experienced in treating a wide range of health conditions through
          classical and advanced homeopathy.
        </Typography>
      </>
    ),
  },
  {
    name: "Dr. Yogita Darda",
    specialty: "Homeopathy Consultant",
    image: DrYogita,
    description: (
      <>
        <Typography component="span" sx={{ fontWeight: 500 }}>
          Special Expertise:
        </Typography>{" "}
        <Typography component="span" sx={{ fontWeight: 300 }}>
          Skin and hair problems, acne, pigmentation, allergies, and hair fall
          management.
          <br />
          <br />
          Treats various acute and chronic diseases with modern homeopathic
          principles.
        </Typography>
      </>
    ),
  },
  {
    name: "Dr. Tanmay Darda",
    specialty: "Homeopathy Consultant",
    image: DrTanmay,
    description: (
      <>
        <Typography component="span" sx={{ fontWeight: 500 }}>
          Special Expertise:
        </Typography>{" "}
        <Typography component="span" sx={{ fontWeight: 300 }}>
          Gut health, digestive disorders, acidity, IBS, and gastric issues.
          <br />
          <br />
          Highly experienced in holistic homeopathic care for all age groups and
          chronic health concerns.
        </Typography>
      </>
    ),
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
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
                lg: "24px",
              },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            Meet Our Expert Team
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.95rem", sm: "1rem", md: "16px" },
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Our doctors are highly qualified professionals dedicated to your
            health and well-being
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
                qualification={doctor.qualification}
                description={doctor.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
