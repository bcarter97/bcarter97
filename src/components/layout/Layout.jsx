import Seo from "../Seo";

export const LayoutDefault = ({ title, children }) => {
  return (
    <>
      <Seo title={title} />
      <section className="section default-section">
        <div className="columns is-multiline is-vcentered is-centered">
          <div className="column is-half">
            <div className="box">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};
