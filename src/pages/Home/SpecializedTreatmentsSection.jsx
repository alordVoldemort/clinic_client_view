import { Box, Container, Grid, Typography } from "@mui/material";
import TreatmentCard from "./TreatmentCard";
import spineTreatmentImg from "../../assets/treatments/SpineTreatment.jpg";
import gitTreatmentImg from "../../assets/treatments/GITTreatments.jpg";
import cosmetologyImg from "../../assets/treatments/Cosmetology.jpg";
import kidneyTreatmentImg from "../../assets/treatments/KidneyTreatment.jpg";
import gynecologistTreatmentImg from "../../assets/treatments/Gynecologist Treatment.jpg";
import migraineTreatmentImg from "../../assets/treatments/Migraine Treatment.jpg";
import entTreatmentImg from "../../assets/treatments/ENT Treatment.jpg";
import jointTreatmentImg from "../../assets/treatments/JointTreatment.jpg";
import childTreatmentImg from "../../assets/treatments/ChildTreatment.jpg";

const treatments = [
  {
    title: "Spine Treatments",
    description:
      "Expert care for back pain, disc problems, and spinal disorders with advanced techniques.",
    image: spineTreatmentImg,
    route: "/treatments/spine-treatments",
  },
  {
    title: "GIT Treatments",
    description:
      "Comprehensive gastrointestinal care for digestive health and wellness.",
    image: gitTreatmentImg,
    route: "/treatments/git-treatments",
  },
  {
    title: "Cosmetology",
    description:
      "Specialized treatment for acne, pigmentation, anti-aging, hair loss, and skin rejuvenation.",
    image: cosmetologyImg,
    route: "/treatments/cosmetology",
  },
  {
    title: "Kidney Treatment",
    description:
      "Diagnosis and care for kidney stones, infections, urinary incontinence in kidney",
    image: kidneyTreatmentImg,
    route: "/treatments/kidney-treatment",
  },
  {
    title: "Gynecology Treatment",
    description:
      "Treatment for menstrual disorders, PCOS, pregnancy care, and reproductive concerns.",
    image: gynecologistTreatmentImg,
    route: "/treatments/gynecologist-treatment",
  },
  {
    title: "Migraine Treatment",
    description:
      "Specialized treatment for chronic migraines, tension headaches, and neural pain.",
    image: migraineTreatmentImg,
    route: "/treatments/migraine-treatment",
  },
  {
    title: "ENT Treatments",
    description:
      "Specialized treatment for ear, nose, throat infections, allergies, and sinus issues.",
    image: entTreatmentImg,
    route: "/treatments/ent-treatments",
  },
  {
    title: "Joint Treatments",
    description:
      "Pain relief and therapy for knee, shoulder, back, and arthritis-related joint problems.",
    image: jointTreatmentImg,
    route: "/treatments/joint-treatments",
  },
  {
    title: "Child Treatments",
    description:
      "Recurrent cold and cough Adenoids, Child overall development Asthma Tonsillitis",
    image: childTreatmentImg,
    route: "/treatments/child-treatments",
  },
];

export default function SpecializedTreatmentsSection() {
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
            Our Specialized Treatments
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
              fontWeight: 300,
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            We offer comprehensive healthcare services tailored to your specific
            needs
          </Typography>
        </Box>

        {/* Treatment Cards Grid */}
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
          {treatments.map((treatment, index) => (
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
              <TreatmentCard
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
                route={treatment.route}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
