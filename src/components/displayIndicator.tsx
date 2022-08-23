import { styled } from "../styles/stitches.config";

const Style = styled("nav", {
  width: 100,
  height: 100,
  position: "fixed",
  bottom: 0,
  backgroundSize: "cover",
  backgroundPositionX: "center",
  backgroundRepeat: "no-repeat",
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('https://www.creativefabrica.com/wp-content/uploads/2021/03/05/Cell-Phone-Glyph-Icon-Graphics-9250127-1.jpg')`,
      },
      tablet: {
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/513/097/small/67_Tablets.jpg')`,
      },
      desktop: {
        backgroundImage: `url('https://media.istockphoto.com/vectors/desktop-computer-icon-computer-screen-symbol-vector-id909909044?k=20&m=909909044&s=170667a&w=0&h=tp_K0XtmDSQWsTfpfrsInFQl6HwxArFx-JmXZwzgs2I=')`,
      },
    },
  },
});

const DeviceIndicator = () => {
  return (
    <Style
      device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
    ></Style>
  );
};

export default DeviceIndicator;
