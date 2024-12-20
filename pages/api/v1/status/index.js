function status(request, response) {
  response.status(200).json({
    message: "Ok",
  });
}

export default status;
