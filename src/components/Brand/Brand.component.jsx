import style from "./Brand.module.scss";

function Brand() {
  return (
    <h1 className={style.brand}>
      <img src="#" alt="Logo" />
      <span>MS</span>
    </h1>
  );
}

export default Brand;
