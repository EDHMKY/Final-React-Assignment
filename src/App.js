

function App() {
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
 {/* 2c & 5b & BONUS 6f & 7d */}
 <MCUShows
        dates={releaseDates}
        indexTwo={newIndex}
        numTwo={newNum}
      />
    {/* BONUS 6d & 6f */}
    <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* BONUS 7b & 7d */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>  
  </div>
  );
}

export default App;
