import "../styles/Banner.scss";
import bannerImage from "../images/banner.svg"; 

export function Banner() {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(${bannerImage})`,
      }}
    >
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <button>Ver produto</button>
      </div>
    </section>
  );
}
