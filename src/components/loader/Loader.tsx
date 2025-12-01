import './index.css';

export function Loader() {

  return (
      <div className="containerLoader">
        <section className="loader">
          <div className="loaderFocus"></div>
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
  );
}
