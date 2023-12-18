const handler = (request: Request) => {
  console.log("CALLBACK CALLED");
};

export { handler as GET, handler as POST };
