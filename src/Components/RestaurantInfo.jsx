const RestaurantInfo = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sección 1: Ambiente */}
        <div className="col-md-6">
          <h2>Un ambiente único</h2>
          <p>
            Sumérgete en una experiencia gastronómica donde el diseño moderno se
            combina con la calidez de un espacio acogedor. Nuestro restaurante
            ofrece un ambiente ideal para cenas románticas, reuniones familiares
            o encuentros con amigos.
          </p>
        </div>
        <div className="col-md-6">
          <div
            id="carouselExampleAutoplaying1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/restaurant/essenzarest1.jpg"
                  className="d-block w-100"
                  alt="Ambiente acogedor"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/restaurant/essenzarest2.jpg"
                  className="d-block w-100"
                  alt="Decoración moderna"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying1"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying1"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* Sección 2: Platos Destacados */}
        <div className="col-md-6 order-md-2">
          <h2>Platos que deleitan</h2>
          <p>
            Nuestros chefs fusionan ingredientes frescos con técnicas
            innovadoras para crear platos inolvidables. Desde entradas
            exquisitas hasta postres irresistibles, cada bocado es una
            experiencia única.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <div
            id="carouselExampleAutoplaying2"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/restaurant/essenzagourmet.jpg"
                  className="d-block w-100"
                  alt="Plato gourmet"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/restaurant/essenzagourmet2.jpg"
                  className="d-block w-100"
                  alt="Presentación artística de la comida"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* Sección 3: Bebidas y Cócteles */}
        <div className="col-md-6">
          <h2>Bebidas y cócteles exclusivos</h2>
          <p>
            Descubre nuestra selección de cócteles artesanales y vinos de alta
            calidad. Ya sea un clásico bien preparado o una creación innovadora,
            tenemos la bebida perfecta para acompañar tu comida.
          </p>
        </div>
        <div className="col-md-6">
          <div
            id="carouselExampleAutoplaying3"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/restaurant/essenzacocktail.jpg"
                  className="d-block w-100"
                  alt="Cóctel colorido"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/restaurant/essenzavino.jpg"
                  className="d-block w-100"
                  alt="Selección de vinos"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying3"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying3"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
