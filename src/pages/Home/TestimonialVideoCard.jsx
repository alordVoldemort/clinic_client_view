import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Modal,
  Fade,
  Backdrop
} from "@mui/material";
import { PlayCircle, Close } from "@mui/icons-material";

export default function TestimonialVideoCard({ name, quote, thumbnail, youtubeId }) {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleOpen = () => {
    console.log("Opening YouTube video:", youtubeId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // YouTube thumbnail with fallback
  const getThumbnailUrl = () => {
    if (imgError || !thumbnail || thumbnail.includes("share.google")) {
      // Use alternative YouTube thumbnail format
      return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
    }
    return thumbnail;
  };

  return (
    <>
      <Card
        sx={{
          height: "380px",
          width: "300px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transition: "all 0.4s ease",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            // Make play button brighter on hover
            "& .youtube-play-button": {
              backgroundColor: "#FF0000",
              transform: "translate(-50%, -50%) scale(1.05)",
              boxShadow: "0 12px 30px rgba(255, 0, 0, 0.5)",
            },
            // Add dark overlay on thumbnail
            "& .thumbnail-overlay": {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }
          },
        }}
        onClick={handleOpen}
      >
        {/* YouTube Thumbnail */}
        <CardMedia
          component="img"
          image={getThumbnailUrl()}
          alt={`${name} testimonial`}
          sx={{
            width: "100%",
            height: "55%",
            objectFit: "cover",
            backgroundColor: "#f0f0f0",
          }}
          onError={() => setImgError(true)}
        />

        {/* Dark overlay for better contrast */}
        <Box
          className="thumbnail-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "55%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
        />

        {/* CUSTOM RED YOUTUBE-STYLE PLAY BUTTON */}
        <Box
          className="youtube-play-button"
          sx={{
            position: "absolute",
            top: "29.5%", // Center of thumbnail area (55%/2)
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 90,
            height: 65,
            borderRadius: "18px",
            backgroundColor: "#FF0000", // YouTube Red
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 18px",
            boxShadow: "0 8px 25px rgba(255, 0, 0, 0.4)",
            transition: "all 0.3s ease",
            zIndex: 2,
          }}
        >
          {/* Red play button triangle */}
          <Box
            sx={{
              width: 0,
              height: 0,
              borderTop: "14px solid transparent",
              borderBottom: "14px solid transparent",
              borderLeft: "24px solid white",
              marginRight: "8px",
            }}
          />
          
          {/* YouTube text */}
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: "18px",
              fontFamily: "Roboto, Arial, sans-serif",
              letterSpacing: "0.5px",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            YouTube
          </Typography>
        </Box>

        <CardContent sx={{ p: 2.5, height: "45%" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
            {name}
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.6, fontStyle: "italic" }}>
            "{quote}"
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 2 }}>
            <Typography variant="caption" sx={{ color: "#1976d2", fontWeight: 600 }}>
              <PlayCircle sx={{ fontSize: 16, mr: 0.5 }} />
              Watch Video
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* YouTube Video Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",
              width: { xs: "95%", md: "800px" },
              maxWidth: "1200px",
              bgcolor: "background.paper",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: 24,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              <Close />
            </IconButton>

            {/* YouTube Player */}
            <Box sx={{ position: "relative", paddingTop: "56.25%", bgcolor: "#000" }}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&color=red`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none"
                }}
                title={`${name} testimonial video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>

            <Box sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {name}
              </Typography>
              <Typography sx={{ color: "#666", lineHeight: 1.6, fontStyle: "italic" }}>
                "{quote}"
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}