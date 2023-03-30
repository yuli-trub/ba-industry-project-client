import "./ListPage.scss";

const ListPage = () => {
  return (
    <section className="list">
      <div className="list__wrapper">
        <div className="flight">
          <div className="flight__wrapper">
            <h2 className="flight__title">London (LHR) New York (NYC)</h2>
            <div className="flight__return">
              <p className="flight__date">Return • 6 – 9 Apr • 1</p>
              <img src="#" alt="icon of person" className="flight__icon" />
            </div>
            <div className="flight__edit">
              <img src="#" alt="down icon" className="flight__down" />
              <p className="flight__edit-text">Edit search</p>
            </div>
          </div>
        </div>
        <div className="details">
          <h1 className="details__title">London LHR New York NYC</h1>
          <p className="details__num">Flight 1 of 2</p>
          <p className="details__disclaimer">
            Prices are per adult, including all taxes, fees and carrier charges.
          </p>

          <div className="details__dates">
            <img
              src="../../assets/icons/noun-left-arrow-715029.svg "
              alt="left arrow"
              className="details__arrow"
            />
            <div className="details__date">
              <p className="details__day">Mon 3</p>
              <p className="details__price">£685</p>
            </div>
            <div className="details__date">
              <p className="details__day">Tue 4</p>
              <p className="details__price">£685</p>
            </div>
            <div className="details__date">
              <p className="details__day">Wed 5</p>
              <p className="details__price">£485</p>
            </div>
            <div className="details__date details__date--selected">
              <p className="details__day">Thu 6 Apr</p>
              <p className="details__price">£459</p>
            </div>
            <div className="details__date">
              <p className="details__day">Fri 7</p>
              <p className="details__price">£317</p>
            </div>
            <div className="details__date">
              <p className="details__day">Sat 8</p>
              <p className="details__price">£317</p>
            </div>
            <div className="details__date">
              <p className="details__day">Sun 9</p>
              <p className="details__price">£1,220</p>
            </div>
            <img src="#" alt="right arrow" className="details__arrow" />
          </div>
        </div>

        <div className="times">
          <p className="times__direct">Direct Flights</p>
          <p className="times__departures">London Heathrow (LHR) Departures</p>
        </div>
      </div>
    </section>
  );
};

export default ListPage;
