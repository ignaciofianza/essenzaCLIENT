import { Link } from "react-router-dom";

const OrderSectionMain = () => {
  return (
    <section className="order-section text-center py-5 mb-5">
      <div className="container">
        <h2 className="mb-4">¿Listo para disfrutar?</h2>
        <p className="mb-4">
          Explora nuestro menú y realiza tu pedido fácilmente.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-dark">
            Hacer Pedido
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSectionMain;
