import React from "react";
import { Box } from "@mui/material";
import { Container } from "../../../../common";

const TopPerformer = () => {
  return (
    <Container
      heading="Top Performers"
      description="Recognizing the outstanding performances of players in various categories across different states of India."
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textTransform: "uppercase",
            border: "1px solid white",
            borderRadius: "12px",
            backgroundColor: "#1F1F1F",
            padding: "12px 30px",
          }}
        >
          Highest Scorer
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "500px",
            alignItems: "center",
            padding: "10px 20px",
            color: "#3C1642",
            backgroundColor: "#007FFF",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              height: "250px",
              width: "250px",
            }}
          >
            <Box
              component="img"
              src="/topPerformer.png"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Maharashtra
            </Box>
            <Box
              sx={{
                fontSize: "18px",
              }}
            >
              Akshay Kumar
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  56.3
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Average
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  132
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  High Score
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>72</Box>
              <Box>28</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TopPerformer;
