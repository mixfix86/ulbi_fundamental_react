import './App.css'
import { PostItem } from './components/PostItem/PostItem';

export const App = () => {


  return (
    <div className='App'>
      <PostItem post={{id: 1, title: 'JS', body: 'JS - programming language'}}/>
    </div >
  );
}

