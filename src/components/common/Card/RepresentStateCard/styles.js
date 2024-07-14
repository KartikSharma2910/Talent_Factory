const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    width: "300px",
    height: "400px",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "80px 20px 20px",
    borderRadius: "12px",
    color: "#3C1642",
    backgroundColor: "#007FFF",
  },

  imageWrap: {
    position: "absolute",
    top: -100,
    width: "180px",
    height: "180px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  heading: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: 500,
  },

  description: {
    fontSize: "16px",
    textAlign: "center",
    textTransform: "capitalize",
  },
};

export default styles;
