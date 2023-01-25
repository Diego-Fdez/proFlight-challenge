import { useState } from 'react';
import './App.css';
import selectedLogo from './assets/selected-logo.svg';
import unselectedLogo from './assets/preview-logo.svg';

function App() {
  const setNumOfImages = [0, 1, 2, 3];
  const [selectedIndex, setSelectedIndex] = useState(0);

  /**
   * If the selectedIndex is greater than 0, then set the selectedIndex to the previous index.
   * Otherwise, set the selectedIndex to the last index in the setNumOfImages array
   */
  const previousImage = () => {
    const isSelected = selectedIndex > 0;
    const nextIndex = isSelected
      ? selectedIndex - 1
      : setNumOfImages.length - 1;
    setSelectedIndex(nextIndex);
  };

  /**
   * If the selected index is less than the number of images in the set, then increment the selected
   * index by one, otherwise set the selected index to zero
   */
  const nextImage = () => {
    const isSelected = selectedIndex < setNumOfImages.length - 1;
    const prevIndex = isSelected ? selectedIndex + 1 : 0;
    setSelectedIndex(prevIndex);
  };

  return (
    <main className='container'>
      <button onClick={() => previousImage()} className='prev-btn' />
      {setNumOfImages.map((num) => (
        <img
          key={num}
          src={selectedIndex !== num ? unselectedLogo : selectedLogo}
          alt='Logo ProFlight'
          className='logo'
        />
      ))}
      <button onClick={() => nextImage()} className='next-btn' />
    </main>
  );
}

export default App;
