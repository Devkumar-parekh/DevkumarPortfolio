const NoPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('/images/bg/under-maintenance.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="container text-center"
    >
      <h1>This page is under construction. Please visit us later!!!</h1>
    </div>
  );
};

export default NoPage;
