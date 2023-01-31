import React, { useEffect, useRef, useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style/todolist.css";
import Component from './Component';
import Dividing from './Dividing';
import Footer from './Footer';
import Header from './Header';
import Progress from './Progress';

function TodoList() {
  const [completed, setCompleted] = useState([]);
  const [isSwitch, setIsSwitch] = useState(false);
  const [progress, setProgress] = useState(0);
  const scrollEnd = useRef(null);
  const textRef = useRef(null);
  
  const addTodo = () => {
    setCompleted([...completed, { list: textRef.current.value, bool: false}]);
    textRef.current.value = '';
  };
  
  const deleteClick = (index) => {
    const result = completed.filter((item) => item.list !== completed[index].list);
    setCompleted(result);
  }
  
  const switchClick = () => {
    setIsSwitch(!isSwitch);
  }
  
  const finish = completed.filter((item) => item.bool === true);
  useEffect(() => {
    if (completed.length !== 0) {
      if (finish.length !== 0) {
        setProgress(Math.round((finish.length / completed.length) * 100));
      }
    }
  }, [finish, completed]);

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({behavior: 'smooth'});
  }, [completed]);

  return (
    <div className="container">
      <Header />
      <div className='px-3'>
        <Dividing />
      </div>
      <Progress progress={progress} />
      <div className='overflow-auto row'>
        {
          completed.map((item, index) => item !== '' && <Component listItem={item.list} key={index} deleteClick={deleteClick} index={index} completed={completed} setCompleted={setCompleted} selected={item.bool} />)
        }
          
        <div ref={scrollEnd} />
      </div>
      <div className='px-3'>
        <Dividing />
      </div>
      <Footer onClick={addTodo} textRef={textRef} switchClick={switchClick} />
    </div>
  );
}

export default TodoList;
