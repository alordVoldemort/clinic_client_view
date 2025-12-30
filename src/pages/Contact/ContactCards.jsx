import { Box, Typography, Link as MuiLink } from "@mui/material";
import PhoneSVG from "../../assets/Appointment/PhoneIcon.svg";
import EmailSVG from "../../assets/Appointment/EmailIcon.svg";
import LocationSVG from "../../assets/Appointment/LocationIcon.svg";

const ContactCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 2, sm: 2, md: 3, lg: "42px" },
        mb: { xs: 4, sm: 5, md: 6, lg: 8 },
        px: { xs: 1, sm: 0 },
        width: { lg: "1194px" },
        mx: "auto",
      }}
    >
      {["Phone", "Email", "Location"].map((type, index) => {
        const getHref = () => {
          if (type === "Phone") return "tel:+919822141851";
          if (type === "Email")
            return "mailto:drdardasnirmalhealthcare@gmail.com";
          if (type === "Location")
            return "https://www.google.com/maps/place/Dr.+Nitin+Darda's+Clinic/@18.5092352,73.8513987,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06e1dd39e97:0xfb05036655a6b1fa!8m2!3d18.5092301!4d73.8539736!16s%2Fg%2F11j23sgtt3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
          return "#";
        };

        return (
          <MuiLink
            key={index}
            href={getHref()}
            target={type === "Location" ? "_blank" : undefined}
            rel={type === "Location" ? "noopener noreferrer" : undefined}
            underline="none"
            sx={{
              display: "block",
              textDecoration: "none",
              flex: "1 1 250px",
              maxWidth: "370px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #eee",
                padding: { xs: "12px", sm: "14px", md: "16px", lg: "10px" },
                borderRadius: "13px",
                backgroundColor: "#FFFFFF",
                width: "100%",
                minHeight: "227px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                component="img"
                src={
                  type === "Phone"
                    ? PhoneSVG
                    : type === "Email"
                    ? EmailSVG
                    : LocationSVG
                }
                alt={`${type} Icon`}
                sx={{ width: 70, height: 70, mb: 1 }}
              />
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "18px" },
                  mb: 0.5,
                }}
              >
                {type}
              </Typography>
              <Typography
                sx={{
                  color: "#155DFC",
                  fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "16px" },
                  mb: 0.5,
                }}
              >
                {type === "Phone"
                  ? "+91 9822141851"
                  : type === "Email"
                  ? "drdardasnirmalhealthcare@gmail.com"
                  : ""}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "11px", md: "12px", lg: "14px" },
                  color: "#404246",
                }}
              >
                {type === "Phone"
                  ? "Mon–Sat, 10:00AM–7:00PM"
                  : type === "Email"
                  ? "We'll reply within 24h"
                  : "Arthashilp, 1349/50, Bajirao Rd, Below hotel Ganraj, Natu Baag, Shukrawar Peth, Pune, Maharashtra 411002"}
              </Typography>
            </Box>
          </MuiLink>
        );
      })}
    </Box>
  );
};

export default ContactCards;
