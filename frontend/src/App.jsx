import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

/*
- What the user perceives to be a page is a component that represents a URL path in your application, 
  and it is a composition of components.
- Developing a react app is creating hierchies of reusable components.
  Goal: know how to create & compose components.
  Goal: understand the features around components.
- Built-in components are camelCase, user-defined components are PascalCase.
- React team recommends using function components, bc new future react features will likely only be available in functions.
- Functions are less verbose and easier to manage than classes.
*/
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
