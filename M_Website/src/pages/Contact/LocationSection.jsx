import { Box, styled } from "@mui/material";

// Create a container with fixed aspect ratio
const AspectRatioBox = styled(Box)(({ ratio = 2.125 }) => ({
  width: '100%',
  position: 'relative',
  paddingTop: `${(1 / ratio) * 100}%`, // Creates aspect ratio
  overflow: 'hidden',
  borderRadius: '8px',
}));

const LocationSection = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "280px",
          sm: "800px",
          md: "460px",
          lg: "100%", // Take full width in grid column
        },
        maxWidth: {
          xs: "280px",
          sm: "650px",
          md: "460px",
          lg: "534px", // Max width on desktop
        },
        position: "relative",
        mx: { xs: "auto", lg: 0 }, // Center on mobile, left on desktop
      }}
    >
      <AspectRatioBox ratio={534/294}> {/* Match your desired ratio 534:294 ≈ 1.816:1 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F5F5',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3653617743144!2d73.85134962465203!3d18.51238446942535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e1dd39e97%3A0xfb05036655a6b1fa!2sDr.%20Nitin%20Darda&#39;s%20Clinic!5e0!3m2!1sen!2sin!4v1765128933581!5m2!1sen!2sin"
            style={{
              border: 0,
              display: 'block',
              width: '100%',
              height: '100%', // Make iframe fill the container
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arhatship Location Map"
          />
          
          {/* Location Pin */}
          <Box
            sx={{
              position: 'absolute',
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -100%)",
              zIndex: 2,
              pointerEvents: "none",
              width: {
                xs: "30px",
                sm: "34px",
                md: "38px",
                lg: "40px",
                xl: "42px",
              },
              height: {
                xs: "39px",
                sm: "44px",
                md: "49px",
                lg: "52px",
                xl: "55px",
              },
            }}
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 24 31.2" 
              fill="#EF4444"
              style={{
                filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.4))"
              }}
            >
              <path d="M12 0C7.59 0 4 3.59 4 8c0 8 8 16 8 16s8-8 8-16c0-4.41-3.59-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
          </Box>
        </Box>
      </AspectRatioBox>
    </Box>
  );
};

export default LocationSection;