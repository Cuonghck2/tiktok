import { Fragment } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {publicRoutes} from '~/router'
import {DefaultLayouts} from '~/components/Layouts'


function App() {
  return (
    <Router>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
            <Routes>
               {publicRoutes.map((route,index)=>{
                let Layout = DefaultLayouts

                if(route.layout){
                   Layout = route.layout
                }else if(route.layout === null){
                   Layout = Fragment
                }
                const Page = route.component
                return <Route key={index} path={route.path} element={
                     <Layout><Page/></Layout>
              }/>
               })}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
