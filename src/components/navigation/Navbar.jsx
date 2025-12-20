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

  // Show hamburger for iPad Mini (768px) and small devices
  // Show menu options for iPad Air (820px+) and desktop
  const showMenuOptions = useMediaQuery("(min-width:900px)");
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
    "Gynecologist Treatment",
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
    "Gynecologist Treatment": "/treatments/gynecologist-treatment",
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
        position="static"
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ py: { xs: 1, sm: 1.5 }, px: 0 }}>
          <Container
            maxWidth="false"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1440px",
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                gap: 0.5,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Nirmala Healthcare Logo"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: "auto",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "none",
                  color: "#0057B7",
                  fontWeight: 500,
                  fontSize: { xs: "15px", sm: "15px", md: "15px" },
                  lineHeight: 1,
                  textAlign: "center",
                }}
              >
                Nirmal Health Care
              </Typography>
            </Box>

            {/* Menu Options - shown for iPad Air (900px+) and desktop */}
            {showMenuOptions ? (
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 2, md: 2, lg: 2, xl: 3 },
                  alignItems: "center",
                  flexWrap: {
                    xs: "wrap",
                    md: "nowrap",
                    lg: "nowrap",
                    xl: "nowrap",
                  },
                  whiteSpace: "nowrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, sm: 2, md: 2, lg: 2, xl: 3 },
                    alignItems: "center",
                    flexWrap: {
                      xs: "wrap",
                      md: "nowrap",
                    },
                    pr: { xs: 2, md: 17 }, // 👉 RIGHT PADDING APPLIED HERE
                  }}
                >
                  {menuItems.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <Box key={item.path}>
                          <Button
                            onClick={handleTreatmentMenuOpen}
                            color="inherit"
                            endIcon={<ExpandMoreIcon />}
                            sx={{
                              fontSize: {
                                xs: "0.85rem",
                                sm: "0.9rem",
                                md: "0.9rem",
                                lg: "0.9rem",
                                xl: "1rem",
                              },
                              minWidth: "auto",
                              px: { xs: 1, sm: 1.5, md: 1.5, lg: 1.5, xl: 2 },
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
                                  color: isActive(item.path)
                                    ? "#155DFC"
                                    : "#000000",
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
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                            lg: "0.9rem",
                            xl: "1rem",
                          },
                          minWidth: "auto",
                          px: { xs: 1, sm: 1.5, md: 1.5, lg: 1.5, xl: 2 },
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
                <Box
                  sx={{
                    display: {
                      md: "flex",
                      lg: "none",
                      xl: "flex",
                    },
                    // Hide on iPad Pro (1024px) specifically
                    "@media (min-width: 1024px) and (max-width: 1199px)": {
                      display: "none",
                    },
                    alignItems: "center",
                    gap: 1,
                    mr: 2,
                    color: "#000000ff",
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
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                      xl: "15px",
                    },
                    ml: "-10px",
                    px: { xs: 2, sm: 2.5, md: 2, lg: 2, xl: 3 },
                    py: { xs: 0.75, sm: 1 },
                    backgroundColor: "#155DFC",
                    textTransform: "none",
                    fontWeight: 500,
                    borderRadius: "6px",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
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
                sx={{ color: "#1976d2" }}
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

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  navigate("/appointment");
                }}
                sx={{
                  backgroundColor: "rgba(25, 118, 210, 0.08)",
                  mx: 1,
                  borderRadius: "4px",
                }}
              >
                <ListItemText
                  primary="Book Appointment"
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "#1976d2",
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
