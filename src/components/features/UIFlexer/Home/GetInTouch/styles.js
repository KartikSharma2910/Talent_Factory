const styles = {
  wrapper: {
    width: "100%",
    height: "650px",
    display: "flex",
  },

  leftBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: "url(/getTouch.png)",
    padding: "60px",
    width: "40%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  header: {
    display: "flex",
    padding: "20px 40px",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
  },

  logoBox: {
    color: "white",
    fontWeight: "500",
    fontSize: "28px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  factory: {
    textDecoration: "underline",
    textDecorationColor: "#007FFF",
    textDecorationThickness: "3px",
    textUnderlineOffset: "5px",
  },

  text: {
    fontSize: "14px",
    textTransform: "capitalize",
  },

  button: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    bottom: 60,
  },

  rightBox: {
    width: "60%",
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#007FFF",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "8px",
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#3C1642",
  },

  description: {
    fontSize: "14px",
    color: "rgb(0,0,0,0.6)",
  },

  submitButton: {
    color: "#F6F6F6",
    backgroundColor: "#3C1642",
    "&:hover": {
      backgroundColor: "#3C1642",
    },
  },
};

export default styles;
