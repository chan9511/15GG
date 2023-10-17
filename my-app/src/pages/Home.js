import React from "react";
import ClassicBuild from "./anal/ClassicBuild";
import Classic from './tier/Classic';
import "./Home.css"
import AramBuild from "./anal/AramBuild";
import Aram from "./tier/Aram";
import WidgetOneButton from "./widget/One";
import WidgetTwoButton from "./widget/Two";

const Home = () => {

  const widgetOneComponentName = sessionStorage.getItem("widgetOneTrue");
  const widgetTwoComponentName = sessionStorage.getItem("widgetTwoTrue");
  const token = sessionStorage.getItem("token")

  const componentMap = {
    Classic_An: <ClassicBuild />,
    Classic_Ti: <Classic />,
    Aram_An: <AramBuild />,
    Aram_Ti: <Aram />,
  };

  const widgetOneComponent = componentMap[widgetOneComponentName]
  const widgetTwoComponent = componentMap[widgetTwoComponentName]


  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://event.leagueoflegends.co.kr/beemo-Teemo/img/beemo-wp.jpg"
          alt=""
        />
     
          <div className="widget-container">
            { widgetOneComponent ? 
            (<div className="widgetOne">
              <WidgetOneButton/>
              {widgetOneComponent}
            </div>) 

            : (token ? 
            (<div className="widgetNotLogin1">
              눌러주세요
            <WidgetOneButton/>
            </div>)
            :(<div className="widgetNotLogin1">
              로그인시 이용 가능한 페이지입니다.
              </div>))}
            

            {widgetTwoComponent ? 
            (<div className="widgetTwo">
              <WidgetTwoButton/>
              {widgetTwoComponent }
            </div>) 
            : (token ? 
            (<div className="widgetNotLogin2">
              눌러주세요
              <WidgetTwoButton/>
              </div>)
              :(<div className="widgetNotLogin2">
                로그인시 이용 가능한 페이지입니다.
                </div>))}
          
          </div>
        </div>
      </div>
  );
};

export default Home;
