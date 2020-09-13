export default (req, res) => {
  res.status(200).json([
    {
      comment: "First",
    },
    {
      comment: "Nice post",
    },
  ]);
};
