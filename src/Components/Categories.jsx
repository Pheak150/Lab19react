import React from "react";
import { Link } from "react-router-dom";
import cat1 from "./img/categories/cat-1.jpg";
import cat2 from "./img/categories/cat-2.jpg";
import cat3 from "./img/categories/cat-3.jpg";
import cat4 from "./img/categories/cat-4.jpg";
import cat5 from "./img/categories/cat-5.jpg";

const Categories = () => {
  useEffect(() => {
    document.querySelectorAll(".set-bg").forEach((element) => {
      const bg = element.getAttribute("data-setbg");
      element.style.backgroundImage = `url(${bg})`; // Corrected string interpolation
    });
  }, []);
  return (
    <div>
      {/* Categories Section Begin */}
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{ backgroundImage: `url(${cat1})` }} // Inline style for background image
                >
                  <h5>
                    <Link to="/category/fresh-fruit">Fresh Fruit</Link>{" "}
                    {/* Use Link for navigation */}
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{ backgroundImage: `url(${cat2})` }}
                >
                  <h5>
                    <Link to="/category/dried-fruit">Dried Fruit</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{ backgroundImage: `url(${cat3})` }}
                >
                  <h5>
                    <Link to="/category/vegetables">Vegetables</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{ backgroundImage: `url(${cat4})` }}
                >
                  <h5>
                    <Link to="/category/drink-fruits">Drink Fruits</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  style={{ backgroundImage: `url(${cat5})` }}
                >
                  <h5>
                    <Link to="/category/drink-fruits">Drink Fruits</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}
    </div>
  );
};

export default Categories;
