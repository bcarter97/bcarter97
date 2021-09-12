const Layout = ({ children }) => {
  return (
    <div className="container">
      <section className="section default-section">
        <div className="columns is-multiline is-vcentered is-centered">
          <div className="column is-half">
            <div className="box">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
