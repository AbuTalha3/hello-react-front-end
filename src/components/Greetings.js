import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsCont = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {greetingsCont.length > 0 && (
        <h2>
          {
            greetingsCont[Math.floor(Math.random() * greetingsCont.length)]
              .greeting
          }
        </h2>
      )}
    </div>
  );
}

export default Greetings;
