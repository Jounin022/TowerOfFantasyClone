import { styled } from "src/styles/stitches.config";

const Style = styled("nav", {
  width: 100,
  height: 100,
  position: "fixed",
  top: "50%",
  opacity: 0.5,
  zIndex: 9999,
  pointerEvents:"none",
  backgroundSize: "cover",
  backgroundPositionX: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: '3px -5px 2px 5px rgba(0, 100, 22, 0.1) , 3px -9px 0px  6px rgba(0, 100, 0, 0.05)',
  
      "@mobile": {
        backgroundImage: `url('https://www.creativefabrica.com/wp-content/uploads/2021/03/05/Cell-Phone-Glyph-Icon-Graphics-9250127-1.jpg')`,
      },
      "@tablet": {
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/513/097/small/67_Tablets.jpg')`,
      },
      "@desktop": {
        backgroundImage: `url('https://media.istockphoto.com/vectors/desktop-computer-icon-computer-screen-symbol-vector-id909909044?k=20&m=909909044&s=170667a&w=0&h=tp_K0XtmDSQWsTfpfrsInFQl6HwxArFx-JmXZwzgs2I=')`,
      },
   
});

const DeviceIndicator = () => {
  return <Style/>
};

export default DeviceIndicator;
