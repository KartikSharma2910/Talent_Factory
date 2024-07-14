const styles = {
  wrapper: {
    width: "100%",
    height: "100vh",
    position: "relative",
    boxSizing: "border-box",
  },

  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0,0.3)",
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
    fontSize: "16px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  factory: {
    textDecoration: "underline",
    textDecorationColor: "#007FFF",
    textDecorationThickness: "3px",
    textUnderlineOffset: "5px",
  },

  contactUs: {
    backgroundColor: "#F6F6F626",
    border: "1.5px solid #007FFF",
    borderRadius: "24px",
    padding: "6px 26px",
    textTransform: "uppercase",
    fontWeight: 600,
  },

  tabs: {
    "& .MuiTabs-root": {
      width: "100%",
      padding: "4px",
      borderRadius: "24px",
      border: "1px solid white",
      backgroundColor: "#F6F6F626",
    },
    "& .MuiTab-root": {
      backgroundColor: "rgb(255,255,255,0.2)",
      borderRadius: "24px",
      fontSize: "14px",
      fontWeight: 400,
      textTransform: "capitalize",
      fontFamily: "Poppins, sans-serif",
      padding: "4px 16px",
      minHeight: "38px",
      minWidth: "120px",
      color: "white",
    },
    "& .MuiTabs-flexContainer": {
      gap: "22px",
    },
    "& .MuiTab-root.Mui-selected": {
      backgroundColor: "#007FFF",
      color: "black",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },

  dataCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    gap: "12px",
    top: "50%",
    left: "50%",
    color: "white",
    transform: "translate(-50%,-50%)",
  },

  headline: {
    fontSize: "18px",
    fontWeight: 300,
    letterSpacing: "3px",
    wordSpacing: "4px",
    textTransform: "uppercase",
    color: "white",
  },

  mainLine: {
    fontSize: "42px",
    fontWeight: "bold",
    lineHeight: "40px",
  },

  register: {
    borderRadius: "24px",
    backgroundColor: "#007FFF",
    color: "black",
    padding: "10px 30px",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: "#007FFF",
    },
  },
};

export default styles;
