import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Email !</h1>
      <p>Subscribe and stay updated</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
