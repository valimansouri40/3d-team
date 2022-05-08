
import './App.css';
import UploadPage from './container/UploadPage/UploadPage';
import { Route ,Switch} from 'react-router-dom';
import NewServiceProvider from './container/NewServiceProvider/NewServiceProvider';
import ServiceProviders from './container/ServiceProviders/ServiceProviders';
import Layout from './component/Layout/Layout';

function App() {
  return (
    <div>
      
      <Switch>
      dsfushufsgfuydgdjgff
      <Route  path="/NewServiceProvider"   component={NewServiceProvider}/>
        <Route  path="/ServiceProviders"   component={ServiceProviders}/>
        <Route  path="/" exact  component={UploadPage}/>
        <Route path="*"  component={Layout}/>
      </Switch>
    </div>
  );
}

export default App;
