const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    backgroundColor: "black",
    padding: "20px 40px",
    color: "white",
    borderRadius: "24px 24px 0 0",
    marginTop: "-2rem",
  },

  buttonWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Advantage Styles
  advantageWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "48%",
  },

  mainImageWrap: {
    width: "48%",
    borderRadius: "18px 0px 0px 18px",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "18px 0px 0px 18px",
  },

  miniContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "48%",
  },

  miniImageWrap: {
    width: "100%",
    height: "48%",
    backgroundColor: "#037FFE",
    borderRadius: "0px 18px 18px 0px",
  },

  miniImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0px 18px 18px 0px",
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: "48%",
  },

  databox: {
    display: "flex",
    alignItems: "start",
    gap: "18px",
  },

  number: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "80px",
    fontSize: "18px",
    fontWeight: 500,
    borderRadius: "8px",
    color: "black",
    backgroundColor: "#007FFF",
  },

  dataContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  dataHeading: {
    fontSize: "22px",
    fontWeight: 500,
  },

  dataDesc: {
    fontSize: "16px",
    fontWeight: 300,
  },

  // State Match
  stateCardWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  // Showcase Skills
  showcaseCardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  skillSelectorCard: {
    width: "300px",
    height: "300px",
    padding: "40px",
    fontSize: "26px",
    cursor: "pointer",
    fontWeight: 400,
    borderRadius: "12px",
    backgroundColor: "#007FFF",
    position: "relative",
    color: "#3C1642",
  },

  skillNotes: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3rem",
  },
};

export default styles;
