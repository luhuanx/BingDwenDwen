const string = `
/*你好，我是一名前端新人
* 接下来我要演示我的前端功底
* 给你画一个冰墩墩
**/
.bingDwenDwenContainer {
    position: relative;
    z-index: 2;
    width: 400px;
    height: 456px;
    left: 150px;
    top: 10px;
    border: 10px solid black;
    background: white;
    border-radius: 240px 240px 194px 194px;
  }
  
  .ear {
    width: 71px;
    height: 90px;
    background-color: black;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    top: 10px;
    box-shadow: 329px 0 0 0 black;
  }
  
  .leftHand {
    top: 250px;
    left: -75px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
  }
  
  .leftHand::before {
    content: "";
    left: 5px;
    top: -53px;
    width: 0;
    height: 0;
    border: 35px solid;
    border-color: transparent black black transparent;
    position: absolute;
  }
  
  .rightHand {
    top: 120px;
    left: 390px;
    width: 64px;
    height: 126px;
    transform: rotate(40deg);
    background-color: black;
    border-radius: 40px 49px 0 89px;
    position: absolute;
  }
  
  .rightHand::before {
    content: "";
    left: 30px;
    top: 30px;
    width: 14px;
    height: 25px;
    border-radius: 8px 8px 0 16px;
    transform: rotate(19deg);
    background-color: red;
    position: absolute;
  }
  
  .rightHand::after {
    content: "";
    left: 23px;
    top: 34px;
    width: 14px;
    height: 25px;
    border-radius: 8px 8px 16px 0;
    transform: rotate(-71deg);
    background-color: red;
    position: absolute;
  }
  
  .feet {
    width: 82px;
    height: 75px;
    background-color: black;
    top: 435px;
    left: 95px;
    border-bottom: 25px solid black;
    border-radius: 20px 50% 10px 30px;
    position: absolute;
  }
  
  .feet::before {
    content: "";
    width: 82px;
    height: 75px;
    background-color: black;
    left: 130px;
    border-bottom: 25px solid black;
    border-radius: 50% 20px 30px 10px;
    position: absolute;
  }
  
  .face {
    width: 287px;
    height: 230px;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-left-radius: 41% 42%;
    border-bottom-right-radius: 41% 42%;
    border: 5px solid #006bb0;
    box-shadow: 0 0 0 5px yellow, 0 0 0 10px black, 0 0 0 15px green,
      0 0 0 20px red;
    left: 52px;
    top: 50px;
    position: absolute;
  }
  
  .eyes {
    width: 70px;
    height: 100px;
    background-color: black;
    left: 100px;
    top: 100px;
    border-radius: 50%;
    transform: rotate(35deg);
    position: absolute;
  }
  
  .eyes::before {
    content: "";
    width: 70px;
    height: 100px;
    background-color: black;
    left: 110px;
    top: -75px;
    border-radius: 50%;
    transform: rotate(-70deg);
    position: absolute;
  }
  
  .nose {
    width: 25px;
    height: 16px;
    background-color: black;
    position: absolute;
    top: 160px;
    left: 189px;
    border-radius: 5px 5px 50% 50%;
  }
  
  .mouth {
    width: 30px;
    height: 5px;
    border: 3px solid black;
    background-color: red;
    position: absolute;
    top: 185px;
    left: 184px;
    border-radius: 0 0 50% 50%;
  }
  
  .iris {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: black;
    border: 5px solid white;
    position: absolute;
    left: 125px;
    top: 130px;
    box-shadow: 0 0 0 0 gray;
  }
  
  .iris::before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: black;
    border: 5px solid white;
    position: absolute;
    left: 115px;
    top: -5px;
    box-shadow: 0 0 0 -5px cyan;
  }
  
  .highlight {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: white;
    left: 135px;
    top: 140px;
    position: absolute;
    box-shadow: 120px 0 0 0 white;
  }
`;
export default string;