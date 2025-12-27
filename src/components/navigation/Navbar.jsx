import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/clinic/logo/Group 1686550958.svg";
import phoneIcon from "../../assets/clinic/Navbar/phone-flip (3) 1.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Show hamburger for iPad Mini, iPad Air, Surface Pro 7, and small devices
  // Show menu options for large desktop screens (1400px+)
  const showMenuOptions = useMediaQuery("(min-width:1100px)");
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Treatments",
      path: "/treatments/spine",
      hasDropdown: true,
    },
    { label: "Contact", path: "/contact" },
  ];

  const treatments = [
    "Spine Treatments",
    "GIT Treatments",
    "Cosmetology",
    "Kidney Treatment",
    "Gynecology Treatment",
    "Migraine Treatment",
    "ENT Treatments",
    "Joint Treatments",
    "Child Treatments",
  ];

  // Map treatment names to their correct routes
  const treatmentRouteMap = {
    "Spine Treatments": "/treatments/spine-treatments",
    "GIT Treatments": "/treatments/git-treatments",
    Cosmetology: "/treatments/cosmetology",
    "Kidney Treatment": "/treatments/kidney-treatment",
    "Gynecology Treatment": "/treatments/gynecologist-treatment",
    "Migraine Treatment": "/treatments/migraine-treatment",
    "ENT Treatments": "/treatments/ent-treatments",
    "Joint Treatments": "/treatments/joint-treatments",
    "Child Treatments": "/treatments/child-treatments",
  };

  const handleTreatmentMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTreatmentMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTreatmentClick = (treatment) => {
    // Use the route map to get the correct path
    const path =
      treatmentRouteMap[treatment] ||
      `/treatments/${treatment.toLowerCase().replace(/\s+/g, "-")}`;
    navigate(path);
    handleTreatmentMenuClose();
  };

  return (
    <>
      <AppBar
        position="sticky"
        top={0}
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "7px 10px 4.6px rgba(226, 226, 226, 0.34)",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            py: { xs: 1, sm: 1.5 },
            px: 0,
            height: { xs: "75px", sm: "75px", md: "75px" },
          }}
        >
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "1440px",
              },
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "1440px",
              },
              height: { xs: "auto", sm: "auto", md: "82px" },
              px: { xs: 2, sm: 3, md: 1, lg: 1, xl: "32px" },
              mx: "auto",
              overflow: "hidden",
            }}
          >
            {/* LEFT SECTION: Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "auto", sm: "auto", md: "153px" },
                flexShrink: 0,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                sx={{
                  width: { xs: 40, sm: 45, md: "47px" },
                  height: { xs: "auto", sm: "auto", md: "32px" },
                  mb: { xs: "5px", md: "5px", lg: "5px" },
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  color: "#0057B7",
                  fontSize: { xs: "12px", sm: "13px", md: "15px" },
                  mt: { xs: "2px", md: 0 },
                }}
              >
                Nirmal Health Care
              </Typography>
            </Box>

            {/* CENTER SECTION: Menu Options - shown for desktop (1400px+) */}
            {showMenuOptions ? (
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  minWidth: 0,
                  paddingRight: "120px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 0.5, sm: 1, md: 1, lg: 1.5, xl: 4 },
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  {menuItems.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <Box key={item.path}>
                          <Button
                            onClick={handleTreatmentMenuOpen}
                            color="inherit"
                            endIcon={
                              <ExpandMoreIcon
                                sx={{
                                  width: "24px",
                                  height: "24px",
                                }}
                              />
                            }
                            sx={{
                              fontSize: "16px",
                              minWidth: "auto",
                              px: { xs: 0.75, sm: 1, md: 1, lg: 1.25, xl: 1.5 },
                              color: location.pathname.startsWith("/treatments")
                                ? "#155DFC"
                                : "#000000",
                              fontWeight: 500,
                              textTransform: "none",
                              flexShrink: 0,
                              fontFamily: "Poppins, sans-serif",
                              "&:hover": {
                                backgroundColor: "rgba(25, 118, 210, 0.04)",
                                color: "#155DFC",
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleTreatmentMenuClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                            PaperProps={{
                              sx: {
                                mt: 1,
                                minWidth: 200,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                              },
                            }}
                          >
                            {treatments.map((treatment) => (
                              <MenuItem
                                key={treatment}
                                onClick={() => handleTreatmentClick(treatment)}
                                sx={{
                                  fontFamily: "Poppins, sans-serif",
                                  color: "#000000",
                                  fontSize: "0.95rem",
                                  py: 1.5,
                                  px: 2,
                                  "&:hover": {
                                    color: "#155DFC",
                                    backgroundColor: "rgba(21, 93, 252, 0.04)",
                                  },
                                }}
                              >
                                {treatment}
                              </MenuItem>
                            ))}
                          </Menu>
                        </Box>
                      );
                    }
                    return (
                      <Button
                        key={item.path}
                        component={Link}
                        to={item.path}
                        color="inherit"
                        sx={{
                          fontSize: "16px",
                          minWidth: "auto",
                          px: { xs: 0.75, sm: 1, md: 1, lg: 1.25, xl: 1.5 },
                          color: isActive(item.path) ? "#155DFC" : "#000000",
                          fontWeight: 500,
                          textTransform: "none",
                          flexShrink: 0,
                          fontFamily: "Poppins, sans-serif",
                          "&:hover": {
                            backgroundColor: "rgba(25, 118, 210, 0.04)",
                            color: "#155DFC",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            ) : null}

            {/* RIGHT SECTION: Phone Number + Book Appointment Button */}
            {showMenuOptions ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5, md: 2 },
                  ml: "auto",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                    },
                    // Show on iPad Air landscape (1180px) and above when menu options are visible
                    "@media (min-width: 1100px)": {
                      display: "flex",
                    },
                    alignItems: "center",
                    gap: 1,
                    color: "#000000ff",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={phoneIcon}
                    alt="Phone"
                    sx={{
                      width: { xs: "16px", md: "24px" },
                      height: "24px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "16px", md: "16px" },
                      fontWeight: 500,
                    }}
                  >
                    +91-9822141851{" "}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/appointment")}
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                      xl: "15px",
                    },
                    px: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2.5 },
                    py: { xs: 0.75, sm: 0.875, md: 1 },
                    backgroundColor: "#155DFC",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: "6px",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    minWidth: { xs: "auto", sm: "auto", md: "auto" },
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            ) : (
              // Hamburger Menu - for iPad Mini (768px) and small mobile devices
              <IconButton
                edge="end"
                onClick={() => setOpen(true)}
                sx={{ color: "#1976d2", ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, paddingTop: 2 }}>
          <List>
            {menuItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <Box key={item.path}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "1rem",
                            fontWeight: 500,
                          }}
                        />
                        <ExpandMoreIcon
                          sx={{
                            transform: treatmentsOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    {treatmentsOpen && (
                      <Box sx={{ pl: 2 }}>
                        {treatments.map((treatment) => (
                          <ListItem
                            key={treatment}
                            disablePadding
                            onClick={() => {
                              handleTreatmentClick(treatment);
                              setOpen(false);
                              setTreatmentsOpen(false);
                            }}
                          >
                            <ListItemButton>
                              <ListItemText
                                primary={treatment}
                                primaryTypographyProps={{
                                  fontSize: "0.9rem",
                                  fontWeight: 400,
                                  fontFamily: "Poppins, sans-serif",
                                  color: "#000000",
                                }}
                                sx={{
                                  "&:hover": {
                                    color: "#155DFC",
                                  },
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              }
              return (
                <ListItem
                  key={item.path}
                  disablePadding
                  onClick={() => setOpen(false)}
                >
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}

            {/* Phone Number */}
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 2,
                  px: 2,
                }}
              >
                <Box
                  component="img"
                  src={phoneIcon}
                  alt="Phone"
                  sx={{
                    width: "20px",
                    height: "20px",
                    flexShrink: 0,
                  }}
                />
                <ListItemText
                  primary="+91-9822141851"
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  navigate("/appointment");
                }}
                sx={{
                  backgroundColor: "#155DFC",
                  mx: 1,
                  borderRadius: "6px",
                  mt: 1,
                  py: 1.25,
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                <ListItemText
                  primary="Book Appointment"
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: "#FFFFFF",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
