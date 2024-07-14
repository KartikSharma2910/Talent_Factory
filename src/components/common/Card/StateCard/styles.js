const styles = {
  wrapper: {
    width: "300px",
    height: "300px",
    cursor: "pointer",
    borderRadius: "12px",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0,0.2)",
  },

  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontWeight: "bold",
    fontSize: "42px",
  },
};

export default styles;
